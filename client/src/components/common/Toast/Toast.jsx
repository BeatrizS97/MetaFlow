// src/components/common/Toast/Toast.jsx
import { useEffect } from 'react';
import { CheckCircleIcon, AlertIcon, CloseIcon } from '../../../pages/Goals/CustomIcons';
import './Toast.css';

export const Toast = ({ 
  message, 
  type = 'info', 
  onClose, 
  duration = 4000,
  position = 'bottom-right'
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircleIcon size={24} />,
    error: <AlertIcon size={24} />,
    info: <AlertIcon size={24} />
  };

  return (
    <div className={`toast toast-${type} toast-${position}`}>
      <div className="toast-icon">{icons[type]}</div>
      <div className="toast-message">{message}</div>
      <button onClick={onClose} className="toast-close">
        <CloseIcon size={18} />
      </button>
    </div>
  );
};