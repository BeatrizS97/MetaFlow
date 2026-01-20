// src/components/layout/Sidebar/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { 
  DashboardIcon, 
  GoalsIcon, 
  ProfileIcon 
} from '../../../pages/Goals/CustomIcons';
import './Sidebar.css';

export const Sidebar = () => {
  const menuItems = [
    {
      path: '/dashboard',
      icon: <DashboardIcon size={24} />,
      label: 'Dashboard',
      description: 'Visão geral'
    },
    {
      path: '/goals',
      icon: <GoalsIcon size={24} />,
      label: 'Minhas Metas',
      description: 'Gerencie suas metas'
    },
    {
      path: '/profile',
      icon: <ProfileIcon size={24} />,
      label: 'Perfil',
      description: 'Configurações'
    }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <div className="sidebar-item-icon">{item.icon}</div>
            <div className="sidebar-item-content">
              <span className="sidebar-item-label">{item.label}</span>
              <span className="sidebar-item-description">{item.description}</span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-tip">
          <span className="tip-icon">💡</span>
          <div>
            <strong>Dica do dia</strong>
            <p>Divida grandes metas em pequenas tarefas!</p>
          </div>
        </div>
      </div>
    </aside>
  );
};