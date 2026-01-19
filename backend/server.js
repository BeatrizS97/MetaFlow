// server.js - Backend com HTTP-only cookies + Rate Limiting
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(express.json());
app.use(cookieParser()); 

// Configuração do CORS para permitir cookies
app.use(cors({
  origin: 'http://localhost:3000', // ajuste se seu front-end estiver em outra porta
  credentials: true // permite cookies
}));

app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => {
    console.error('❌ Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  });

// Modelos
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['personal', 'career'], required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});
const Goal = mongoose.model('Goal', goalSchema);

// Rate limiting para login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 tentativas
  message: { error: 'Muitas tentativas de login. Tente novamente mais tarde.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware de autenticação via cookie
const authenticateToken = (req, res, next) => {
  const token = req.cookies?.token;
  
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.userId = user.id;
    next();
  });
};

// Função para definir cookie seguro
const setAuthCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,     // não acessível via JavaScript (protege contra XSS)
    secure: false,      // true apenas em HTTPS (em produção, mude para true)
    sameSite: 'lax',    // protege contra CSRF
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  });
};

// Rotas de Autenticação

// Registro
app.post('/api/auth/register', [
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
  body('name').notEmpty().withMessage('Nome é obrigatório')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, name } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, { expiresIn: '24h' });
    setAuthCookie(res, token); // ✅ Define cookie HTTP-only

    res.status(201).json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Login (com rate limiting)
app.post('/api/auth/login', loginLimiter, [
  body('email').isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Senha é obrigatória')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }

    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, { expiresIn: '24h' });
    setAuthCookie(res, token); // ✅ Define cookie HTTP-only

    res.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Verificar token
app.get('/api/auth/verify', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({
      id: user._id.toString(),
      email: user.email,
      name: user.name
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  });
  res.json({ message: 'Logout realizado com sucesso' });
});

// Rotas de Metas (protegidas)
app.get('/api/goals', authenticateToken, async (req, res) => {
  try {
    const { category } = req.query;
    let filter = { userId: req.userId };
    if (category) filter.category = category;
    const userGoals = await Goal.find(filter);
    res.json(userGoals);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar metas' });
  }
});

app.post('/api/goals', authenticateToken, [
  body('title').notEmpty().withMessage('Título é obrigatório'),
  body('description').notEmpty().withMessage('Descrição é obrigatória'),
  body('category').isIn(['personal', 'career']).withMessage('Categoria inválida')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description, category } = req.body;
    const newGoal = new Goal({ title, description, category, userId: req.userId });
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar meta' });
  }
});

app.put('/api/goals/:id', authenticateToken, async (req, res) => {
  try {
    const goal = await Goal.findOne({ _id: req.params.id, userId: req.userId });
    if (!goal) return res.status(404).json({ error: 'Meta não encontrada' });
    Object.assign(goal, req.body);
    goal.updatedAt = new Date();
    await goal.save();
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar meta' });
  }
});

app.delete('/api/goals/:id', authenticateToken, async (req, res) => {
  try {
    const result = await Goal.deleteOne({ _id: req.params.id, userId: req.userId });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Meta não encontrada' });
    res.json({ message: 'Meta deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar meta' });
  }
});

// Atualizar perfil
app.put('/api/user/profile', authenticateToken, [
  body('name').optional().notEmpty(),
  body('email').optional().isEmail()
], async (req, res) => {
  try {
    const { name, email } = req.body;
    const updateData = {};
    if (name) updateData.name = name;
    if (email) {
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser._id.toString() !== req.userId) {
        return res.status(400).json({ error: 'E-mail já em uso' });
      }
      updateData.email = email;
    }
    const user = await User.findByIdAndUpdate(req.userId, updateData, { new: true });
    res.json({ id: user._id.toString(), name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar perfil' });
  }
});

// Alterar senha
app.put('/api/user/password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.userId);
    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Senha atual incorreta' });
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: 'Senha alterada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao alterar senha' });
  }
});

// Deletar conta
app.delete('/api/user/account', authenticateToken, async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findById(req.userId);
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Senha incorreta' });
    await User.deleteOne({ _id: req.userId });
    await Goal.deleteMany({ userId: req.userId });
    res.clearCookie('token'); // limpa cookie ao deletar conta
    res.json({ message: 'Conta deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar conta' });
  }
});

// Estatísticas
app.get('/api/stats', authenticateToken, async (req, res) => {
  try {
    const { period } = req.query;
    let startDate;
    if (period === 'week') startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    else if (period === 'month') {
      const now = new Date();
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (period === 'year') {
      const now = new Date();
      startDate = new Date(now.getFullYear(), 0, 1);
    }

    const filter = { userId: req.userId };
    if (startDate) filter.createdAt = { $gte: startDate };

    const [total, completed] = await Promise.all([
      Goal.countDocuments(filter),
      Goal.countDocuments({ ...filter, completed: true })
    ]);

    const completionRate = total > 0 ? (completed / total * 100).toFixed(1) : 0;
    const personal = await Goal.countDocuments({ ...filter, category: 'personal' });
    const career = await Goal.countDocuments({ ...filter, category: 'career' });

    res.json({ total, completed, pending: total - completed, completionRate, byCategory: { personal, career } });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
});

// Rota de saúde
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend com HTTP-only cookies funcionando!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});