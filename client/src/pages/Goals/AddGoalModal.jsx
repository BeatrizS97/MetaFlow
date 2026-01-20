// src/pages/Goals/components/AddGoalModal.jsx
import { useState } from 'react';
import { validators } from '../../utils/validators';
import { CloseIcon, RocketIcon } from '../Goals/CustomIcons';
import './AddGoalModal.css';

export const AddGoalModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'personal'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (field, value) => {
    const result = validators[field === 'title' ? 'goalTitle' : 'goalDescription'](value);
    setErrors(prev => ({
      ...prev,
      [field]: result.valid ? '' : result.message
    }));
    return result.valid;
  };

  const handleSubmit = async () => {
    // Validate all fields
    const titleValid = validateField('title', formData.title);
    const descriptionValid = validateField('description', formData.description);

    if (!titleValid || !descriptionValid) {
      return;
    }

    setLoading(true);
    try {
      await onAdd(formData);
    } catch (error) {
      console.error('Error adding goal:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-container">
            <RocketIcon size={28} />
            <h3>Nova Meta</h3>
          </div>
          <button onClick={onClose} className="modal-close">
            <CloseIcon size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Categoria</label>
            <div className="category-selector">
              <button
                type="button"
                className={`category-option ${formData.category === 'personal' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, category: 'personal' })}
              >
                👤 Pessoal
              </button>
              <button
                type="button"
                className={`category-option ${formData.category === 'career' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, category: 'career' })}
              >
                📈 Carreira
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Título da Meta *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
                validateField('title', e.target.value);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Ex: Aprender React e criar 3 projetos"
              className={errors.title ? 'error' : ''}
              maxLength={100}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
            <span className="char-count">{formData.title.length}/100</span>
          </div>

          <div className="form-group">
            <label>Descrição *</label>
            <textarea
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
                validateField('description', e.target.value);
              }}
              placeholder="Descreva sua meta com detalhes... O que você quer alcançar? Por quê é importante?"
              className={errors.description ? 'error' : ''}
              rows="5"
              maxLength={500}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
            <span className="char-count">{formData.description.length}/500</span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !formData.title || !formData.description}
            className="btn-submit"
          >
            {loading ? (
              <>⏳ Criando...</>
            ) : (
              <>
                <RocketIcon size={20} />
                Criar Meta
              </>
            )}
          </button>

          <p className="modal-tip">
            💡 <strong>Dica:</strong> Metas específicas e mensuráveis são mais fáceis de alcançar!
          </p>
        </div>
      </div>
    </div>
  );
};