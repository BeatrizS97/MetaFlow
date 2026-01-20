// src/pages/Goals/components/GoalFilters.jsx
import { FilterIcon, CalendarIcon } from '../Goals/CustomIcons';
import './GoalFilters.css';

export const GoalFilters = ({ filters, setFilters }) => {
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="goal-filters">
      <div className="filters-header">
        <FilterIcon size={24} />
        <h3>Filtros</h3>
      </div>

      <div className="filters-grid">
        {/* Category Filter */}
        <div className="filter-group">
          <label>Categoria</label>
          <div className="filter-buttons">
            <button
              className={filters.category === 'all' ? 'active' : ''}
              onClick={() => updateFilter('category', 'all')}
            >
              Todas
            </button>
            <button
              className={filters.category === 'personal' ? 'active' : ''}
              onClick={() => updateFilter('category', 'personal')}
            >
              👤 Pessoal
            </button>
            <button
              className={filters.category === 'career' ? 'active' : ''}
              onClick={() => updateFilter('category', 'career')}
            >
              📈 Carreira
            </button>
          </div>
        </div>

        {/* Status Filter */}
        <div className="filter-group">
          <label>Status</label>
          <div className="filter-buttons">
            <button
              className={filters.status === 'all' ? 'active' : ''}
              onClick={() => updateFilter('status', 'all')}
            >
              Todas
            </button>
            <button
              className={filters.status === 'pending' ? 'active' : ''}
              onClick={() => updateFilter('status', 'pending')}
            >
              ⏳ Pendentes
            </button>
            <button
              className={filters.status === 'completed' ? 'active' : ''}
              onClick={() => updateFilter('status', 'completed')}
            >
              ✓ Concluídas
            </button>
          </div>
        </div>

        {/* Period Filter */}
        <div className="filter-group">
          <label>
            <CalendarIcon size={18} />
            Período
          </label>
          <div className="filter-buttons">
            <button
              className={filters.period === 'all' ? 'active' : ''}
              onClick={() => updateFilter('period', 'all')}
            >
              Todas
            </button>
            <button
              className={filters.period === 'week' ? 'active' : ''}
              onClick={() => updateFilter('period', 'week')}
            >
              Esta Semana
            </button>
            <button
              className={filters.period === 'month' ? 'active' : ''}
              onClick={() => updateFilter('period', 'month')}
            >
              Este Mês
            </button>
            <button
              className={filters.period === 'year' ? 'active' : ''}
              onClick={() => updateFilter('period', 'year')}
            >
              Este Ano
            </button>
          </div>
        </div>

        {/* Search Filter */}
        <div className="filter-group search-group">
          <label>Buscar</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            placeholder="🔍 Buscar por título ou descrição..."
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};