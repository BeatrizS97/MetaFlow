// src/components/icons/CustomIcons.jsx - Ícones Únicos e Personalizados

// Ícone exclusivo do MetaFlow - Fluxo de Energia
export const MetaFlowIcon = ({ size = 64, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" className={className}>
    <defs>
      <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Fundo com nuvens - círculo grande azul claro */}
    <circle cx="100" cy="100" r="95" fill="#D4EEF7" opacity="0.6"/>
    
    {/* Nuvens decorativas */}
    <g opacity="0.4">
      {/* Nuvem esquerda */}
      <ellipse cx="35" cy="100" rx="18" ry="12" fill="#FFFFFF"/>
      <ellipse cx="25" cy="105" rx="12" ry="10" fill="#FFFFFF"/>
      <ellipse cx="45" cy="105" rx="15" ry="11" fill="#FFFFFF"/>
      
      {/* Nuvem direita */}
      <ellipse cx="165" cy="100" rx="18" ry="12" fill="#FFFFFF"/>
      <ellipse cx="175" cy="105" rx="12" ry="10" fill="#FFFFFF"/>
      <ellipse cx="155" cy="105" rx="15" ry="11" fill="#FFFFFF"/>
      
      {/* Linhas de velocidade esquerda */}
      <line x1="30" y1="85" x2="45" y2="85" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
      <line x1="25" y1="92" x2="40" y2="92" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
      <line x1="28" y1="99" x2="43" y2="99" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
    </g>

    {/* Cordinha para pendurar */}
    <g>
      <line x1="100" y1="20" x2="100" y2="35" stroke="#5C4033" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="100" cy="18" r="5" fill="#8B7355" stroke="#5C4033" strokeWidth="2"/>
    </g>

    {/* Alvo - Círculo azul externo */}
    <circle cx="100" cy="100" r="60" fill="#6BA3D5" stroke="#3D3D3D" strokeWidth="4" filter="url(#soft-shadow)"/>
    
    {/* Alvo - Círculo branco */}
    <circle cx="100" cy="100" r="48" fill="#FEFEFE" stroke="#3D3D3D" strokeWidth="4"/>
    
    {/* Alvo - Círculo vermelho */}
    <circle cx="100" cy="100" r="32" fill="#FF6B88" stroke="#3D3D3D" strokeWidth="4"/>
    
    {/* Alvo - Círculo amarelo central */}
    <circle cx="100" cy="100" r="16" fill="#FFD952" stroke="#3D3D3D" strokeWidth="3"/>

    {/* Flecha atravessando */}
    <g transform="rotate(-45 100 100)">
      {/* Sombra da flecha */}
      <rect x="96" y="20" width="8" height="90" fill="#000000" opacity="0.15" rx="4"/>
      
      {/* Haste da flecha - verde */}
      <rect x="96" y="20" width="8" height="85" fill="#7CB342" stroke="#3D3D3D" strokeWidth="2" rx="4"/>
      
      {/* Ponta da flecha - preta */}
      <path 
        d="M100 10 L88 25 L96 23 L100 20 L104 23 L112 25 Z" 
        fill="#3D3D3D" 
        stroke="#3D3D3D" 
        strokeWidth="2"
      />
      
      {/* Penas da flecha - amarelo com listras */}
      <g transform="translate(0, 100)">
        {/* Pena esquerda */}
        <ellipse cx="92" cy="5" rx="7" ry="15" fill="#FFD952" stroke="#3D3D3D" strokeWidth="2"/>
        <line x1="92" y1="-8" x2="92" y2="18" stroke="#3D3D3D" strokeWidth="1.5"/>
        <line x1="88" y1="-3" x2="96" y2="-3" stroke="#3D3D3D" strokeWidth="1"/>
        <line x1="88" y1="3" x2="96" y2="3" stroke="#3D3D3D" strokeWidth="1"/>
        <line x1="88" y1="9" x2="96" y2="9" stroke="#3D3D3D" strokeWidth="1"/>
        
        {/* Pena direita */}
        <ellipse cx="108" cy="5" rx="7" ry="15" fill="#FFD952" stroke="#3D3D3D" strokeWidth="2"/>
        <line x1="108" y1="-8" x2="108" y2="18" stroke="#3D3D3D" strokeWidth="1.5"/>
        <line x1="104" y1="-3" x2="112" y2="-3" stroke="#3D3D3D" strokeWidth="1"/>
        <line x1="104" y1="3" x2="112" y2="3" stroke="#3D3D3D" strokeWidth="1"/>
        <line x1="104" y1="9" x2="112" y2="9" stroke="#3D3D3D" strokeWidth="1"/>
      </g>
    </g>

    {/* Nuvem inferior com linhas de movimento */}
    <g opacity="0.5">
      <ellipse cx="100" cy="175" rx="25" ry="12" fill="#FFFFFF"/>
      <ellipse cx="115" cy="178" rx="18" ry="10" fill="#FFFFFF"/>
      <ellipse cx="85" cy="178" rx="18" ry="10" fill="#FFFFFF"/>
      
      {/* Linhas pontilhadas de movimento */}
      <circle cx="125" cy="175" r="2" fill="#3D3D3D"/>
      <circle cx="132" cy="175" r="2" fill="#3D3D3D"/>
      <circle cx="139" cy="175" r="2" fill="#3D3D3D"/>
    </g>
  </svg>
);

// Mãozinha acenando animada
export const WavingHandIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`waving-hand ${className}`}>
    <defs>
      <linearGradient id="hand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    
    {/* Palma da mão */}
    <path
      d="M32 52 C28 52 24 50 22 46 L18 38 C17 36 18 34 20 34 C21 34 22 35 23 36 L25 40 L25 20 C25 18 26 16 28 16 C30 16 31 18 31 20 L31 24 L32 24 L32 18 C32 16 33 14 35 14 C37 14 38 16 38 18 L38 24 L39 24 L39 20 C39 18 40 16 42 16 C44 16 45 18 45 20 L45 28 L46 28 L46 24 C46 22 47 20 49 20 C51 20 52 22 52 24 L52 40 C52 48 44 52 32 52 Z"
      fill="url(#hand-gradient)"
      stroke="#4A4A4A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    
    {/* Linhas de movimento acenando */}
    <g className="wave-lines" opacity="0.7">
      <path d="M8 20 Q12 18 16 20" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M6 26 Q10 24 14 26" stroke="#C44BF0" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M8 32 Q12 30 16 32" stroke="#667EEA" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </g>
  </svg>
);

// Dashboard - Monitor com gráfico
export const DashboardIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7 H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 21 H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 17 V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 13 L9 10.5 L12 12 L15 9 L18 11" 
          stroke="url(#dash-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <defs>
      <linearGradient id="dash-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#667EEA"/>
      </linearGradient>
    </defs>
  </svg>
);

// Metas - Alvo com trajetória
export const GoalsIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="12" cy="12" r="2" fill="url(#goal-gradient)"/>
    <path d="M2 2 L10 10" stroke="url(#goal-gradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="2" cy="2" r="1.5" fill="url(#goal-gradient)"/>
    <defs>
      <linearGradient id="goal-gradient">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
  </svg>
);

// Perfil - Avatar estilizado
export const ProfileIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="4" fill="url(#profile-gradient)" opacity="0.8"/>
    <path d="M5 20 C5 15.5 8 13 12 13 C16 13 19 15.5 19 20" 
          stroke="url(#profile-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"/>
    <circle cx="12" cy="12" r="11" stroke="url(#profile-gradient)" strokeWidth="1" opacity="0.3"/>
    <defs>
      <linearGradient id="profile-gradient">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
    </defs>
  </svg>
);

// Estrela de sucesso - 3D style
export const SuccessStarIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2 L14.5 9 L22 9.5 L16 14.5 L18 22 L12 18 L6 22 L8 14.5 L2 9.5 L9.5 9 Z" 
          fill="url(#star-gradient)" 
          stroke="#FFD700" 
          strokeWidth="1"/>
    <path d="M12 2 L14.5 9 L22 9.5 L16 14.5 L18 22 L12 18 L6 22 L8 14.5 L2 9.5 L9.5 9 Z" 
          fill="url(#star-shine)" 
          opacity="0.6"/>
    <defs>
      <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
      <linearGradient id="star-shine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// Foguete estilizado
export const RocketIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2 C12 2 18 6 18 12 C18 15 16 17 14 19 L12 22 L10 19 C8 17 6 15 6 12 C6 6 12 2 12 2Z" 
          fill="url(#rocket-body)"/>
    <ellipse cx="12" cy="10" rx="3" ry="4" fill="url(#rocket-window)"/>
    <path d="M8 19 L6 22" stroke="url(#rocket-fire)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 19 L18 22" stroke="url(#rocket-fire)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="12" cy="10" r="1.5" fill="#FFFFFF" opacity="0.8"/>
    <defs>
      <linearGradient id="rocket-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#C44BF0"/>
      </linearGradient>
      <linearGradient id="rocket-window" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
      <linearGradient id="rocket-fire" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFA500"/>
        <stop offset="100%" stopColor="#FF6B9D"/>
      </linearGradient>
    </defs>
  </svg>
);

// Gráfico de barras animado
export const ChartIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="14" width="3" height="6" rx="1" fill="url(#chart-grad-1)"/>
    <rect x="10" y="10" width="3" height="10" rx="1" fill="url(#chart-grad-2)"/>
    <rect x="16" y="6" width="3" height="14" rx="1" fill="url(#chart-grad-3)"/>
    <path d="M2 20 H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="chart-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0.3"/>
      </linearGradient>
      <linearGradient id="chart-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C44BF0"/>
        <stop offset="100%" stopColor="#C44BF0" stopOpacity="0.3"/>
      </linearGradient>
      <linearGradient id="chart-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#667EEA" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
  </svg>
);

// Calendário moderno
export const CalendarIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 9 H21" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 2 V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 2 V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="13" r="1" fill="currentColor"/>
    <circle cx="12" cy="13" r="1" fill="currentColor"/>
    <circle cx="16" cy="13" r="1" fill="currentColor"/>
    <circle cx="8" cy="17" r="1" fill="currentColor"/>
    <circle cx="12" cy="17" r="1" fill="url(#cal-gradient)"/>
    <defs>
      <linearGradient id="cal-gradient">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#667EEA"/>
      </linearGradient>
    </defs>
  </svg>
);

// Filtro elegante
export const FilterIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 6 L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 12 L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 18 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="6" r="2" fill="url(#filter-gradient)"/>
    <circle cx="14" cy="12" r="2" fill="url(#filter-gradient)"/>
    <circle cx="12" cy="18" r="2" fill="url(#filter-gradient)"/>
    <defs>
      <linearGradient id="filter-gradient">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#667EEA"/>
      </linearGradient>
    </defs>
  </svg>
);

// Check estilizado com círculo
export const CheckCircleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#check-bg)" opacity="0.2"/>
    <circle cx="12" cy="12" r="10" stroke="url(#check-stroke)" strokeWidth="2"/>
    <path d="M7 12 L10.5 15.5 L17 9" 
          stroke="url(#check-stroke)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <defs>
      <linearGradient id="check-bg">
        <stop offset="0%" stopColor="#4ADE80"/>
        <stop offset="100%" stopColor="#22C55E"/>
      </linearGradient>
      <linearGradient id="check-stroke">
        <stop offset="0%" stopColor="#4ADE80"/>
        <stop offset="100%" stopColor="#22C55E"/>
      </linearGradient>
    </defs>
  </svg>
);

// Configurações com engrenagem suave
export const SettingsIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2 L12 5 M12 19 L12 22 M22 12 L19 12 M5 12 L2 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <path d="M18.4 5.6 L16.2 7.8 M7.8 16.2 L5.6 18.4 M18.4 18.4 L16.2 16.2 M7.8 7.8 L5.6 5.6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="url(#settings-gradient)"/>
    <defs>
      <linearGradient id="settings-gradient">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
    </defs>
  </svg>
);

// Lixeira moderna
export const TrashIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 6 H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 6 V4 C8 3.5 8.5 3 9 3 H15 C15.5 3 16 3.5 16 4 V6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <rect x="5" y="6" width="14" height="15" rx="2" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="url(#trash-gradient)" 
          fillOpacity="0.1"/>
    <path d="M10 11 L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 11 L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="trash-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#FF4444"/>
      </linearGradient>
    </defs>
  </svg>
);

// Logout com porta
export const LogoutIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 21 H5 C4.5 21 4 20.5 4 20 V4 C4 3.5 4.5 3 5 3 H9" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <path d="M16 17 L21 12 L16 7" 
          stroke="url(#logout-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <path d="M21 12 H9" 
          stroke="url(#logout-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"/>
    <defs>
      <linearGradient id="logout-gradient">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#FF4444"/>
      </linearGradient>
    </defs>
  </svg>
);

// Plus com cruz arredondada
export const PlusIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#plus-bg)" opacity="0.2"/>
    <path d="M12 7 V17" 
          stroke="url(#plus-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round"/>
    <path d="M7 12 H17" 
          stroke="url(#plus-gradient)" 
          strokeWidth="3" 
          strokeLinecap="round"/>
    <defs>
      <linearGradient id="plus-bg">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#667EEA"/>
      </linearGradient>
      <linearGradient id="plus-gradient">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#667EEA"/>
      </linearGradient>
    </defs>
  </svg>
);

// Close com X
export const CloseIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 6 L6 18" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"/>
    <path d="M6 6 L18 18" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"/>
  </svg>
);

// Alert com exclamação
export const AlertIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="url(#alert-bg)" 
            fillOpacity="0.1"/>
    <path d="M12 7 V13" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"/>
    <circle cx="12" cy="17" r="1.5" fill="currentColor"/>
    <defs>
      <linearGradient id="alert-bg">
        <stop offset="0%" stopColor="#FFA500"/>
        <stop offset="100%" stopColor="#FF4444"/>
      </linearGradient>
    </defs>
  </svg>
);

// Email com envelope
export const MailIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="url(#mail-bg)" 
          fillOpacity="0.1"/>
    <path d="M3 7 L12 13 L21 7" 
          stroke="url(#mail-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <defs>
      <linearGradient id="mail-bg">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
      <linearGradient id="mail-gradient">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
    </defs>
  </svg>
);

// Lock com cadeado
export const LockIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="6" y="11" width="12" height="10" rx="2" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="url(#lock-bg)" 
          fillOpacity="0.1"/>
    <path d="M8 11 V7 C8 5 9.5 3 12 3 C14.5 3 16 5 16 7 V11" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <circle cx="12" cy="16" r="2" fill="url(#lock-gradient)"/>
    <defs>
      <linearGradient id="lock-bg">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
      <linearGradient id="lock-gradient">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
    </defs>
  </svg>
);

// Eye com olho
export const EyeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 12 C2 12 5 5 12 5 C19 5 22 12 22 12 C22 12 19 19 12 19 C5 19 2 12 2 12Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="url(#eye-bg)" 
          fillOpacity="0.1"/>
    <circle cx="12" cy="12" r="3" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="url(#eye-gradient)"/>
    <defs>
      <linearGradient id="eye-bg">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
      <linearGradient id="eye-gradient">
        <stop offset="0%" stopColor="#667EEA"/>
        <stop offset="100%" stopColor="#764BA2"/>
      </linearGradient>
    </defs>
  </svg>
);

// Eye Off
export const EyeOffIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3 L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10.5 10.7 C10 11.1 9.7 11.7 9.7 12.3 C9.7 13.5 10.7 14.5 11.9 14.5 C12.5 14.5 13 14.2 13.4 13.7" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <path d="M17.2 17C15.7 18.2 13.9 19 12 19 C5 19 2 12 2 12 C2.9 10.2 4.1 8.7 5.5 7.4" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
    <path d="M9.3 5.3 C10.2 5.1 11.1 5 12 5 C19 5 22 12 22 12 C21.6 12.8 21.1 13.6 20.5 14.3" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"/>
  </svg>
);