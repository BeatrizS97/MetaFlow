// src/pages/Goals/components/EmptyState.jsx
import { GoalsIcon as TargetIcon, RocketIcon } from './CustomIcons';
import './EmptyState.css';

export const EmptyState = ({ onAdd }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon-container">
        <TargetIcon size={120} className="empty-icon" />
      </div>
      
      <h2>Nenhuma meta encontrada</h2>
      <p>Comece sua jornada criando sua primeira meta!</p>

      <button onClick={onAdd} className="btn-create-first">
        <RocketIcon size={24} />
        Criar Minha Primeira Meta
      </button>

      <div className="empty-tips">
        <h3>💡 Dicas para criar boas metas:</h3>
        <ul>
          <li>✓ Seja específico e claro</li>
          <li>✓ Defina prazos realistas</li>
          <li>✓ Divida em pequenas etapas</li>
          <li>✓ Acompanhe seu progresso</li>
        </ul>
      </div>
    </div>
  );
};