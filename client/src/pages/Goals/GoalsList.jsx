// src/pages/Goals/GoalsList.jsx
import { useState, useEffect } from 'react';
import { goalsService } from '../../services/api';
import { GoalCard } from './GoalCard.jsx';
import { AddGoalModal } from './AddGoalModal.jsx';
import { GoalFilters } from './GoalFilters.jsx';
import { EmptyState } from './EmptyState.jsx';
import { PlusIcon } from './CustomIcons.jsx';
import './Goals.css';

export const GoalsList = () => {
  const [goals, setGoals] = useState([]);
  const [filteredGoals, setFilteredGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    period: 'all',
    search: ''
  });

  useEffect(() => {
    loadGoals();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [goals, filters]);

  const loadGoals = async () => {
    try {
      setLoading(true);
      const data = await goalsService.getAll();
      setGoals(data);
    } catch (error) {
      console.error('Error loading goals:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = [...goals];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(g => g.category === filters.category);
    }

    // Filter by status
    if (filters.status === 'completed') {
      result = result.filter(g => g.completed);
    } else if (filters.status === 'pending') {
      result = result.filter(g => !g.completed);
    }

    // Filter by search
    if (filters.search) {
      result = result.filter(g => 
        g.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        g.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredGoals(result);
  };

  const handleAddGoal = async (goalData) => {
    try {
      await goalsService.create(goalData);
      await loadGoals();
      setShowModal(false);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await goalsService.update(id, { completed: !completed });
      await loadGoals();
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      await goalsService.delete(id);
      await loadGoals();
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  if (loading) {
    return <div className="goals-loading">Carregando metas...</div>;
  }

  return (
    <div className="goals-page">
      <div className="goals-header">
        <div>
          <h1>Minhas Metas</h1>
          <p>Gerencie e acompanhe suas metas</p>
        </div>
        <button className="btn-add-goal" onClick={() => setShowModal(true)}>
          <PlusIcon size={24} />
          Nova Meta
        </button>
      </div>

      <GoalFilters filters={filters} setFilters={setFilters} />

      {filteredGoals.length === 0 ? (
        <EmptyState onAdd={() => setShowModal(true)} />
      ) : (
        <div className="goals-grid">
          {filteredGoals.map((goal, index) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              index={index}
              onToggle={() => handleToggleComplete(goal.id, goal.completed)}
              onDelete={() => handleDeleteGoal(goal.id)}
            />
          ))}
        </div>
      )}

      {showModal && (
        <AddGoalModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddGoal}
        />
      )}
    </div>
  );
};