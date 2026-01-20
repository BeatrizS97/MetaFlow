// src/components/layout/Header/Header.jsx
import { useAuth } from '../../../context/AuthContext';
import { MetaFlowIcon, LogoutIcon } from '../../../pages/Goals/CustomIcons';
import './Header.css';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <MetaFlowIcon size={40} className="logo-icon" />
          <div className="logo-text">
            <h1>MetaFlow</h1>
            <span>2026</span>
          </div>
        </div>

        <div className="header-right">
          <div className="user-info">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <span className="user-name">{user?.name}</span>
          </div>
          
          <button onClick={logout} className="btn-logout">
            <LogoutIcon size={20} />
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};