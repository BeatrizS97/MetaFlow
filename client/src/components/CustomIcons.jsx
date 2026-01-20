// src/components/CustomIcons.jsx - Ícones Premium MetaFlow

// Montanha de Conquista - Hero principal (Estilo Imagem 1 - GRANDE e ocupando espaço)
export const MountainSuccessIcon = ({ size = 320, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 400 280" fill="none" className={className}>
    <defs>
      <linearGradient id="mountain-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4BAEB" />
        <stop offset="40%" stopColor="#B89BD4" />
        <stop offset="100%" stopColor="#8B6DB0" />
      </linearGradient>
      <linearGradient id="mountain-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7E6BA8" />
        <stop offset="100%" stopColor="#6B5B95" />
      </linearGradient>
      <linearGradient id="mountain-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B5B95" />
        <stop offset="100%" stopColor="#5B4B85" />
      </linearGradient>
      <linearGradient id="mountain-back" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5B4B85" />
        <stop offset="100%" stopColor="#4B3B75" />
      </linearGradient>
    </defs>

    {/* Nuvens de baixo - BEM mais volumosas */}
    <g opacity="0.95">
      <ellipse cx="60" cy="245" rx="55" ry="25" fill="#FEFEFE"/>
      <ellipse cx="35" cy="252" rx="40" ry="22" fill="#FEFEFE"/>
      <ellipse cx="85" cy="255" rx="45" ry="24" fill="#FEFEFE"/>
      
      <ellipse cx="340" cy="245" rx="55" ry="25" fill="#FEFEFE"/>
      <ellipse cx="315" cy="252" rx="40" ry="22" fill="#FEFEFE"/>
      <ellipse cx="365" cy="255" rx="45" ry="24" fill="#FEFEFE"/>
    </g>

    {/* Nuvens superiores esquerdas - maiores */}
    <g opacity="0.85">
      <ellipse cx="50" cy="60" rx="38" ry="18" fill="#FEFEFE"/>
      <ellipse cx="35" cy="66" rx="28" ry="15" fill="#FEFEFE"/>
      <ellipse cx="65" cy="68" rx="32" ry="16" fill="#FEFEFE"/>
    </g>
    
    {/* Nuvens médias esquerdas */}
    <g opacity="0.75">
      <ellipse cx="100" cy="120" rx="30" ry="14" fill="#FEFEFE"/>
      <ellipse cx="88" cy="124" rx="22" ry="12" fill="#FEFEFE"/>
    </g>
    
    {/* Nuvens superiores direitas - maiores */}
    <g opacity="0.85">
      <ellipse cx="350" cy="55" rx="40" ry="19" fill="#FEFEFE"/>
      <ellipse cx="335" cy="61" rx="30" ry="16" fill="#FEFEFE"/>
      <ellipse cx="368" cy="63" rx="34" ry="17" fill="#FEFEFE"/>
    </g>

    {/* Montanha ao fundo (extrema direita) - MAIOR */}
    <path d="M280 260 L360 40 L440 260 Z" fill="url(#mountain-back)"/>
    
    {/* Montanha esquerda - MAIOR */}
    <path d="M-20 260 L90 80 L200 260 Z" fill="url(#mountain-left)"/>
    
    {/* Lado escuro montanha esquerda */}
    <path d="M90 80 L200 260 L90 260 Z" fill="#5B4B85" opacity="0.4"/>
    
    {/* Montanha direita - MAIOR */}
    <path d="M220 260 L320 50 L420 260 Z" fill="url(#mountain-right)"/>
    
    {/* Montanha principal (centro) - MUITO MAIOR e mais centralizada */}
    <path d="M80 260 L200 20 L320 260 Z" fill="url(#mountain-main)"/>
    
    {/* Lado escuro da montanha principal */}
    <path d="M200 20 L320 260 L200 260 Z" fill="#7E6BA8" opacity="0.5"/>
    
    {/* Detalhes rochosos na montanha principal */}
    <path d="M200 20 L225 90 L210 90 Z" fill="#9B7BB7" opacity="0.35"/>
    <path d="M200 20 L192 75 L175 80 Z" fill="#B89BD4" opacity="0.25"/>
    
    {/* Neve no topo - mais realista e maior */}
    <path d="M200 20 L220 70 L180 70 Z" fill="#FFFFFF"/>
    <path d="M200 20 L230 85 L170 85 Z" fill="#F8F0FF" opacity="0.75"/>
    <path d="M200 20 L245 105 L155 105 Z" fill="#F5E6FF" opacity="0.5"/>
    
    {/* Mastro da bandeira - mais alto */}
    <line x1="200" y1="20" x2="200" y2="-5" stroke="#E0E0E0" strokeWidth="3.5"/>
    
    {/* Bandeira vermelha MAIOR com movimento */}
    <path d="M200 0 L250 15 L200 30 Q207 15 200 0 Z" fill="#FF5570"/>
    <path d="M200 0 L250 15 L200 30 Q207 15 200 0 Z" fill="#FF3355" opacity="0.45"/>
    
    {/* Estrela dourada MAIOR no topo da bandeira */}
    <circle cx="200" cy="-2" r="5.5" fill="#FFD700"/>
    <path d="M200 -7 L201.5 -3 L205.5 -3 L202.5 -0.5 L204 3.5 L200 1 L196 3.5 L197.5 -0.5 L194.5 -3 L198.5 -3 Z" 
          fill="#FFD700"/>
    
    {/* Pontos do caminho - MAIORES e mais visíveis */}
    <circle cx="120" cy="210" r="7" fill="#FFFFFF" stroke="#FF5570" strokeWidth="2"/>
    <circle cx="142" cy="175" r="7" fill="#FFFFFF" stroke="#FF5570" strokeWidth="2"/>
    <circle cx="160" cy="140" r="7" fill="#FFFFFF" stroke="#FF5570" strokeWidth="2"/>
    <circle cx="175" cy="105" r="7" fill="#FFFFFF" stroke="#FF5570" strokeWidth="2"/>
    <circle cx="187" cy="70" r="7" fill="#FFFFFF" stroke="#FF5570" strokeWidth="2"/>
    
    {/* Linhas pontilhadas do caminho - MAIS GROSSAS */}
    <line x1="120" y1="210" x2="142" y2="175" stroke="#FF5570" strokeWidth="4" strokeDasharray="8 8" opacity="0.9"/>
    <line x1="142" y1="175" x2="160" y2="140" stroke="#FF5570" strokeWidth="4" strokeDasharray="8 8" opacity="0.9"/>
    <line x1="160" y1="140" x2="175" y2="105" stroke="#FF5570" strokeWidth="4" strokeDasharray="8 8" opacity="0.9"/>
    <line x1="175" y1="105" x2="187" y2="70" stroke="#FF5570" strokeWidth="4" strokeDasharray="8 8" opacity="0.9"/>
  </svg>
);

// Planta Crescente - Crescimento Pessoal
export const GrowthPlantIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="plant-stem" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#22C55E" />
      </linearGradient>
      <linearGradient id="plant-flower" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44BF0" />
      </linearGradient>
    </defs>
    
    {/* Vaso */}
    <path d="M12 26 L20 26 L19 30 L13 30 Z" fill="url(#plant-stem)" opacity="0.3"/>
    
    {/* Caule */}
    <path d="M16 26 Q16 20 16 12" stroke="url(#plant-stem)" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Folhas */}
    <path d="M16 20 Q12 18 10 14" stroke="url(#plant-stem)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M16 16 Q20 14 22 10" stroke="url(#plant-stem)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    
    {/* Flores */}
    <circle cx="16" cy="8" r="4" fill="url(#plant-flower)" opacity="0.8"/>
    <circle cx="14" cy="6" r="2" fill="#FFD700"/>
    <circle cx="18" cy="6" r="2" fill="#FFD700"/>
    <circle cx="16" cy="10" r="2" fill="#FFD700"/>
  </svg>
);

// Alvo Inteligente - Metas
export const TargetGoalIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="target-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="50%" stopColor="#C44BF0" />
        <stop offset="100%" stopColor="#667EEA" />
      </linearGradient>
      <radialGradient id="target-center">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </radialGradient>
    </defs>
    
    {/* Círculos do alvo */}
    <circle cx="16" cy="16" r="14" stroke="url(#target-grad)" strokeWidth="2" opacity="0.3" fill="none"/>
    <circle cx="16" cy="16" r="10" stroke="url(#target-grad)" strokeWidth="2.5" opacity="0.5" fill="none"/>
    <circle cx="16" cy="16" r="6" stroke="url(#target-grad)" strokeWidth="2.5" opacity="0.7" fill="none"/>
    
    {/* Centro dourado */}
    <circle cx="16" cy="16" r="3" fill="url(#target-center)"/>
    
    {/* Seta acertando o alvo */}
    <path d="M26 6 L18 14" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M26 6 L24 8" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 6 L28 8" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// CalendárioCheck - Organização
export const CalendarCheckIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="cal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C44BF0" />
        <stop offset="100%" stopColor="#667EEA" />
      </linearGradient>
    </defs>
    
    {/* Base calendário */}
    <rect x="4" y="6" width="24" height="22" rx="3" fill="url(#cal-grad)" opacity="0.2"/>
    <rect x="4" y="6" width="24" height="22" rx="3" stroke="url(#cal-grad)" strokeWidth="2"/>
    
    {/* Header */}
    <rect x="4" y="6" width="24" height="6" rx="3" fill="url(#cal-grad)" opacity="0.6"/>
    
    {/* Argolas */}
    <line x1="10" y1="4" x2="10" y2="8" stroke="url(#cal-grad)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="4" x2="22" y2="8" stroke="url(#cal-grad)" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Check grande */}
    <path d="M11 18 L14 21 L21 14" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Dias */}
    <circle cx="9" cy="16" r="1" fill="url(#cal-grad)" opacity="0.4"/>
    <circle cx="23" cy="16" r="1" fill="url(#cal-grad)" opacity="0.4"/>
  </svg>
);

// Gráfico de Progresso - Analytics
export const ChartProgressIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="chart-1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#667EEA" />
        <stop offset="100%" stopColor="#764BA2" />
      </linearGradient>
      <linearGradient id="chart-2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#C44BF0" />
        <stop offset="100%" stopColor="#FF6B9D" />
      </linearGradient>
    </defs>
    
    {/* Eixos */}
    <path d="M5 26 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    <path d="M5 26 V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    
    {/* Barras */}
    <rect x="8" y="20" width="4" height="6" rx="2" fill="url(#chart-1)" opacity="0.7"/>
    <rect x="14" y="16" width="4" height="10" rx="2" fill="url(#chart-1)" opacity="0.8"/>
    <rect x="20" y="10" width="4" height="16" rx="2" fill="url(#chart-2)" opacity="0.9"/>
    
    {/* Linha de tendência */}
    <path d="M10 22 L16 18 L22 12 L26 8" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="22" r="2" fill="#4ADE80"/>
    <circle cx="16" cy="18" r="2" fill="#4ADE80"/>
    <circle cx="22" cy="12" r="2" fill="#4ADE80"/>
    <circle cx="26" cy="8" r="2" fill="#4ADE80"/>
  </svg>
);

// Troféu Estrela - Conquistas
export const TrophyStarIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="trophy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B9D" />
      </linearGradient>
    </defs>
    
    {/* Base */}
    <rect x="12" y="26" width="8" height="2" rx="1" fill="url(#trophy-grad)" opacity="0.5"/>
    <rect x="10" y="24" width="12" height="2" rx="1" fill="url(#trophy-grad)" opacity="0.7"/>
    
    {/* Haste */}
    <rect x="15" y="20" width="2" height="4" fill="url(#trophy-grad)"/>
    
    {/* Copa */}
    <path d="M10 8 H22 V14 C22 17 19 20 16 20 C13 20 10 17 10 14 V8 Z" 
          fill="url(#trophy-grad)" opacity="0.3"/>
    <path d="M10 8 H22 V14 C22 17 19 20 16 20 C13 20 10 17 10 14 V8 Z" 
          stroke="url(#trophy-grad)" strokeWidth="2" fill="none"/>
    
    {/* Alças */}
    <path d="M10 10 H7 C6 10 6 12 6 13 C6 14 6 15 7 15 H10" stroke="url(#trophy-grad)" strokeWidth="2"/>
    <path d="M22 10 H25 C26 10 26 12 26 13 C26 14 26 15 25 15 H22" stroke="url(#trophy-grad)" strokeWidth="2"/>
    
    {/* Estrela no topo */}
    <path d="M16 2 L17 5 L20 5.5 L18 7.5 L18.5 10.5 L16 9 L13.5 10.5 L14 7.5 L12 5.5 L15 5 Z" 
          fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
  </svg>
);

// Sparkles - Magia/Perfeição
export const SparklesIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F093FB" />
        <stop offset="50%" stopColor="#C44BF0" />
        <stop offset="100%" stopColor="#667EEA" />
      </linearGradient>
    </defs>
    
    {/* Estrela principal */}
    <path d="M16 4 L18 12 L24 14 L18 16 L16 24 L14 16 L8 14 L14 12 Z" 
          fill="url(#sparkle-grad)" opacity="0.9"/>
    <path d="M16 4 L18 12 L24 14 L18 16 L16 24 L14 16 L8 14 L14 12 Z" 
          stroke="#F093FB" strokeWidth="1.5" fill="none"/>
    
    {/* Estrelinhas decorativas */}
    <path d="M26 8 L27 10 L29 10.5 L27.5 12 L28 14 L26 13 L24 14 L24.5 12 L23 10.5 L25 10 Z" 
          fill="#FFD700"/>
    <path d="M6 10 L7 12 L9 12.5 L7.5 14 L8 16 L6 15 L4 16 L4.5 14 L3 12.5 L5 12 Z" 
          fill="#FFD700"/>
    <path d="M28 22 L29 24 L31 24.5 L29.5 26 L30 28 L28 27 L26 28 L26.5 26 L25 24.5 L27 24 Z" 
          fill="#FFA500"/>
  </svg>
);

// Lâmpada Ideia - Dicas
export const LightBulbIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="bulb-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <filter id="glow-bulb">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Raios de luz */}
    <path d="M16 2 V5" stroke="url(#bulb-grad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 8 L10 10" stroke="url(#bulb-grad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 8 L22 10" stroke="url(#bulb-grad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 16 H7" stroke="url(#bulb-grad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 16 H25" stroke="url(#bulb-grad)" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Lâmpada */}
    <g filter="url(#glow-bulb)">
      <circle cx="16" cy="14" r="7" fill="url(#bulb-grad)" opacity="0.3"/>
      <circle cx="16" cy="14" r="7" stroke="url(#bulb-grad)" strokeWidth="2"/>
    </g>
    
    {/* Base */}
    <rect x="13" y="21" width="6" height="2" fill="url(#bulb-grad)" opacity="0.5" rx="1"/>
    <rect x="13" y="23" width="6" height="2" fill="url(#bulb-grad)" opacity="0.5" rx="1"/>
    <path d="M13 21 Q13 19 16 19 Q19 19 19 21" stroke="url(#bulb-grad)" strokeWidth="2"/>
    
    {/* Filamento */}
    <path d="M16 10 L16 18" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 12 L18 16" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 12 L14 16" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);