// src/utils/constants.js

// Categorias de metas
export const GOAL_CATEGORIES = {
  PERSONAL: 'personal',
  CAREER: 'career'
};

export const GOAL_CATEGORY_LABELS = {
  [GOAL_CATEGORIES.PERSONAL]: 'Pessoal',
  [GOAL_CATEGORIES.CAREER]: 'Carreira'
};

export const GOAL_CATEGORY_ICONS = {
  [GOAL_CATEGORIES.PERSONAL]: '👤',
  [GOAL_CATEGORIES.CAREER]: '📈'
};

// Status de metas
export const GOAL_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  ALL: 'all'
};

export const GOAL_STATUS_LABELS = {
  [GOAL_STATUS.PENDING]: 'Pendentes',
  [GOAL_STATUS.COMPLETED]: 'Concluídas',
  [GOAL_STATUS.ALL]: 'Todas'
};

// Períodos de filtro
export const TIME_PERIODS = {
  TODAY: 'today',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
  ALL: 'all'
};

export const TIME_PERIOD_LABELS = {
  [TIME_PERIODS.TODAY]: 'Hoje',
  [TIME_PERIODS.WEEK]: 'Esta Semana',
  [TIME_PERIODS.MONTH]: 'Este Mês',
  [TIME_PERIODS.YEAR]: 'Este Ano',
  [TIME_PERIODS.ALL]: 'Todas'
};

// Tipos de toast
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

// Posições de toast
export const TOAST_POSITIONS = {
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right'
};

// Rotas da aplicação
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  GOALS: '/goals',
  PROFILE: '/profile'
};

// Mensagens de erro padrão
export const ERROR_MESSAGES = {
  NETWORK: 'Erro de conexão. Verifique sua internet.',
  UNAUTHORIZED: 'Você não tem permissão para acessar este recurso.',
  NOT_FOUND: 'Recurso não encontrado.',
  SERVER_ERROR: 'Erro no servidor. Tente novamente mais tarde.',
  VALIDATION_ERROR: 'Dados inválidos. Verifique os campos.'
};

// Mensagens de sucesso padrão
export const SUCCESS_MESSAGES = {
  GOAL_CREATED: '✓ Meta criada com sucesso!',
  GOAL_UPDATED: '✓ Meta atualizada com sucesso!',
  GOAL_DELETED: '✓ Meta deletada com sucesso!',
  GOAL_COMPLETED: '🎉 Parabéns! Meta concluída!',
  PROFILE_UPDATED: '✓ Perfil atualizado com sucesso!',
  PASSWORD_CHANGED: '✓ Senha alterada com sucesso!'
};

// Dicas motivacionais
export const MOTIVATIONAL_TIPS = [
  '🎯 Quebre grandes metas em pequenas tarefas!',
  '🌟 Celebre cada conquista, por menor que seja!',
  '📅 Revise suas metas semanalmente!',
  '💪 Visualize seu sucesso todos os dias!',
  '🚀 Comece com pequenos passos diários!',
  '✨ Consistência é mais importante que perfeição!',
  '🎓 Aprenda algo novo todos os dias!',
  '🏆 Defina metas SMART: Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais!',
  '💡 A melhor hora para começar é AGORA!',
  '🌈 Transforme obstáculos em oportunidades!'
];

// Configurações padrão
export const DEFAULT_SETTINGS = {
  TOAST_DURATION: 4000,
  PAGE_SIZE: 10,
  MAX_GOAL_TITLE_LENGTH: 100,
  MAX_GOAL_DESCRIPTION_LENGTH: 500,
  MIN_PASSWORD_LENGTH: 6,
  RECOMMENDED_PASSWORD_LENGTH: 12
};

// Cores do tema
export const THEME_COLORS = {
  PRIMARY_PINK: '#FF6B9D',
  PRIMARY_PURPLE: '#C44BF0',
  PRIMARY_BLUE: '#667EEA',
  SUCCESS_GREEN: '#4ade80',
  ERROR_RED: '#ff4444',
  WARNING_ORANGE: '#ffa500',
  INFO_BLUE: '#667eea'
};