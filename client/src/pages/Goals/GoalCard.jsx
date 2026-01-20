// src/pages/Goals/components/GoalCard.jsx
import { CheckCircleIcon, TrashIcon } from '../Goals/CustomIcons';
import './GoalCard.css';

export const GoalCard = ({ goal, index, onToggle, onDelete }) => {
  return (
    <div 
      className={`goal-card ${goal.completed ? 'completed' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="goal-card-header">
        <div className="goal-category-badge">
          {goal.category === 'personal' ? '👤 Pessoal' : '📈 Carreira'}
        </div>
        <div className="goal-actions">
          <button 
            onClick={onToggle}
            className={`btn-toggle ${goal.completed ? 'active' : ''}`}
            title={goal.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
          >
            <CheckCircleIcon size={24} />
          </button>
          <button 
            onClick={onDelete}
            className="btn-delete"
            title="Deletar meta"
          >
            <TrashIcon size={24} />
          </button>
        </div>
      </div>

      <h3 className="goal-title">{goal.title}</h3>
      <p className="goal-description">{goal.description}</p>

      <div className="goal-footer">
        <span className="goal-date">
          📅 {new Date(goal.createdAt).toLocaleDateString('pt-BR')}
        </span>
        {goal.completed && (
          <span className="goal-completed-badge">
            ✓ Concluída
          </span>
        )}
      </div>
    </div>
  );
};