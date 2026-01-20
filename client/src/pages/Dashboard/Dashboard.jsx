// src/pages/Dashboard/Dashboard.jsx - Versão profissional aprimorada
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { statsService } from '../../services/api';
import { StatsCard } from './components/StatsCard';
import { ProgressRing } from './components/ProgressRing';
import { GoalsChart } from './components/GoalsChart';
import { 
  MountainSuccessIcon, 
  GrowthPlantIcon, 
  TargetGoalIcon, 
  CalendarCheckIcon,
  ChartProgressIcon,
  TrophyStarIcon,
  SparklesIcon,
  LightBulbIcon
} from '../../components/CustomIcons';
import './Dashboard.css';

export const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [period, setPeriod] = useState('month');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, [period]);

  const loadStats = async () => {
    try {
      setLoading(true);
      const data = await statsService.get(period);
      setStats(data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const tips = [
    'Quebre grandes metas em pequenas tarefas para facilitar o progresso',
    'Celebre cada conquista, por menor que seja',
    'Revise suas metas semanalmente e ajuste conforme necessário',
    'Visualize seu sucesso todos os dias para manter a motivação',
    'Comece com pequenos passos diários e construa momentum',
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Carregando seus dados...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">
            {getGreeting()}, <span className="user-highlight">{user?.name}</span>
          </h1>
          <p className="welcome-subtitle">
            Bem-vindo ao seu painel de <strong>conquistas e crescimento</strong>
          </p>
          <div className="daily-tip">
            <div className="tip-icon">
              <LightBulbIcon size={32} />
            </div>
            <div className="tip-content">
              <span className="tip-label">Dica do dia</span>
              <span className="tip-text">{randomTip}</span>
            </div>
          </div>
        </div>
        <div className="welcome-illustration">
          <MountainSuccessIcon size={140} />
        </div>
      </div>

      {/* Period Filter */}
      <div className="period-filter">
        <button
          className={`period-btn ${period === 'week' ? 'active' : ''}`}
          onClick={() => setPeriod('week')}
        >
          Semana
        </button>
        <button
          className={`period-btn ${period === 'month' ? 'active' : ''}`}
          onClick={() => setPeriod('month')}
        >
          Mês
        </button>
        <button
          className={`period-btn ${period === 'year' ? 'active' : ''}`}
          onClick={() => setPeriod('year')}
        >
          Ano
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatsCard
          icon={<TargetGoalIcon size={32} />}
          title="Total de Metas"
          value={stats?.total || 0}
          color="blue"
          trend={`${stats?.total > 0 ? '+' : ''}${stats?.total || 0} este período`}
        />
        <StatsCard
          icon={<TrophyStarIcon size={32} />}
          title="Concluídas"
          value={stats?.completed || 0}
          color="green"
          trend={`${stats?.completionRate || 0}% de conclusão`}
        />
        <StatsCard
          icon={<GrowthPlantIcon size={32} />}
          title="Em Andamento"
          value={stats?.pending || 0}
          color="orange"
          trend="Continue assim!"
        />
        <StatsCard
          icon={<CalendarCheckIcon size={32} />}
          title="Taxa de Sucesso"
          value={`${stats?.completionRate || 0}%`}
          color="purple"
          trend={stats?.completionRate >= 70 ? 'Excelente!' : 'Pode melhorar'}
        />
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-card">
          <h3>Progresso Geral</h3>
          <div className="progress-ring-container">
            <ProgressRing 
              percentage={stats?.completionRate || 0} 
              size={200}
            />
          </div>
          <p className="progress-text">
            {stats?.completed || 0} de {stats?.total || 0} metas concluídas
          </p>
        </div>

        <div className="chart-card">
          <h3>Distribuição por Categoria</h3>
          <GoalsChart stats={stats} />
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements-section">
        <h3>Conquistas Desbloqueadas</h3>
        <div className="achievements-grid">
          <div className={`achievement-badge ${stats?.total >= 1 ? '' : 'locked'}`}>
            {stats?.total >= 1 ? (
              <>
                <GrowthPlantIcon size={48} />
                <span>Primeiro Passo</span>
              </>
            ) : (
              <>
                <div className="lock-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="14" y="22" width="20" height="18" rx="3" stroke="#999" strokeWidth="2.5" fill="none"/>
                    <path d="M18 22V16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V22" stroke="#999" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="24" cy="31" r="2.5" fill="#999"/>
                  </svg>
                </div>
                <span>Primeiro Passo</span>
              </>
            )}
          </div>
          <div className={`achievement-badge ${stats?.completed >= 3 ? '' : 'locked'}`}>
            {stats?.completed >= 3 ? (
              <>
                <MountainSuccessIcon size={48} />
                <span>3 Conquistas</span>
              </>
            ) : (
              <>
                <div className="lock-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="14" y="22" width="20" height="18" rx="3" stroke="#999" strokeWidth="2.5" fill="none"/>
                    <path d="M18 22V16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V22" stroke="#999" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="24" cy="31" r="2.5" fill="#999"/>
                  </svg>
                </div>
                <span>3 Conquistas</span>
              </>
            )}
          </div>
          <div className={`achievement-badge ${stats?.total >= 10 ? '' : 'locked'}`}>
            {stats?.total >= 10 ? (
              <>
                <ChartProgressIcon size={48} />
                <span>10 Metas Criadas</span>
              </>
            ) : (
              <>
                <div className="lock-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="14" y="22" width="20" height="18" rx="3" stroke="#999" strokeWidth="2.5" fill="none"/>
                    <path d="M18 22V16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V22" stroke="#999" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="24" cy="31" r="2.5" fill="#999"/>
                  </svg>
                </div>
                <span>10 Metas Criadas</span>
              </>
            )}
          </div>
          <div className={`achievement-badge ${stats?.completionRate >= 100 ? '' : 'locked'}`}>
            {stats?.completionRate >= 100 ? (
              <>
                <SparklesIcon size={48} />
                <span>Perfeição!</span>
              </>
            ) : (
              <>
                <div className="lock-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="14" y="22" width="20" height="18" rx="3" stroke="#999" strokeWidth="2.5" fill="none"/>
                    <path d="M18 22V16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V22" stroke="#999" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="24" cy="31" r="2.5" fill="#999"/>
                  </svg>
                </div>
                <span>100% Completo</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};