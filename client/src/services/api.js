// src/services/api.js
const API_URL = 'http://localhost:5000/api'; // Ajuste se seu backend estiver em outra porta

// Função auxiliar para requisições com cookies
const apiFetch = async (url, options = {}) => {
  const config = {
    ...options,
    credentials: 'include', // ✅ Essencial para HTTP-only cookies
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };

  const response = await fetch(`${API_URL}${url}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Erro desconhecido' }));
    throw new Error(errorData.error || 'Erro na requisição');
  }

  return response.json();
};

// AUTH
export const authService = {
  async register(email, password, name) {
    return apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name })
    });
  },

  async login(email, password) {
    return apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },

  async verify() {
    return apiFetch('/auth/verify'); // Sem headers, só credentials
  },

  async logout() {
    return apiFetch('/auth/logout', {
      method: 'POST'
    });
  }
};

// GOALS
export const goalsService = {
  async getAll(category) {
    const url = category ? `/goals?category=${category}` : '/goals';
    return apiFetch(url);
  },

  async create(goalData) {
    return apiFetch('/goals', {
      method: 'POST',
      body: JSON.stringify(goalData)
    });
  },

  async update(id, updates) {
    return apiFetch(`/goals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  },

  async delete(id) {
    return apiFetch(`/goals/${id}`, {
      method: 'DELETE'
    });
  }
};

// USER
export const userService = {
  async updateProfile(name, email) {
    return apiFetch('/user/profile', {
      method: 'PUT',
      body: JSON.stringify({ name, email })
    });
  },

  async changePassword(currentPassword, newPassword) {
    return apiFetch('/user/password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword })
    });
  },

  async deleteAccount(password) {
    return apiFetch('/user/account', {
      method: 'DELETE',
      body: JSON.stringify({ password })
    });
  }
};

// STATS
export const statsService = {
  async get(period = 'month') {
    return apiFetch(`/stats?period=${period}`);
  }
};