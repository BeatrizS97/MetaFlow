// src/components/icons/Icons.jsx - Ícones SVG Personalizados e Animados

export const SparkleIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-sparkle ${className}`}
  >
    <path 
      d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" 
      fill="url(#sparkle-gradient)"
      className="sparkle-main"
    />
    <path 
      d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z" 
      fill="url(#sparkle-gradient)"
      className="sparkle-small"
    />
    <defs>
      <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
);

export const UserIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-user ${className}`}
  >
    <circle 
      cx="12" 
      cy="8" 
      r="4" 
      stroke="url(#user-gradient)" 
      strokeWidth="2"
      fill="none"
    />
    <path 
      d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21" 
      stroke="url(#user-gradient)" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="user-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>
  </svg>
);

export const CareerIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-career ${className}`}
  >
    <path 
      d="M3 17L9 11L13 15L21 7" 
      stroke="url(#career-gradient)" 
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M16 7H21V12" 
      stroke="url(#career-gradient)" 
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="career-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="100%" stopColor="#ffa500" />
      </linearGradient>
    </defs>
  </svg>
);

export const TargetIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-target ${className}`}
  >
    <circle cx="12" cy="12" r="10" stroke="url(#target-gradient)" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="url(#target-gradient)" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="url(#target-gradient)" />
    <defs>
      <linearGradient id="target-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="100%" stopColor="#ffa500" />
      </linearGradient>
    </defs>
  </svg>
);

export const CheckIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-check ${className}`}
  >
    <path 
      d="M5 13L9 17L19 7" 
      stroke="currentColor" 
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-trash ${className}`}
  >
    <path 
      d="M3 6H21" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M8 6V4C8 3.447 8.447 3 9 3H15C15.553 3 16 3.447 16 4V6" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M19 6V20C19 20.553 18.553 21 18 21H6C5.447 21 5 20.553 5 20V6" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M10 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LogoutIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-logout ${className}`}
  >
    <path 
      d="M9 21H5C4.447 21 4 20.553 4 20V4C4 3.447 4.447 3 5 3H9" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M16 17L21 12L16 7" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M21 12H9" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const MailIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-mail ${className}`}
  >
    <rect 
      x="3" 
      y="5" 
      width="18" 
      height="14" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M3 7L12 13L21 7" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LockIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-lock ${className}`}
  >
    <rect 
      x="5" 
      y="11" 
      width="14" 
      height="10" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M7 11V7C7 4.791 8.791 3 11 3H13C15.209 3 17 4.791 17 7V11" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

export const EyeIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-eye ${className}`}
  >
    <path 
      d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="3" 
      stroke="currentColor" 
      strokeWidth="2"
    />
  </svg>
);

export const EyeOffIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-eye-off ${className}`}
  >
    <path 
      d="M3 3L21 21" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M10.584 10.587C10.218 10.958 10 11.456 10 12C10 13.105 10.895 14 12 14C12.544 14 13.042 13.782 13.413 13.416" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M17.357 17.349C15.726 18.449 13.942 19 12 19C5 19 2 12 2 12C2.889 10.243 4.109 8.679 5.632 7.349" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M9.363 5.365C10.222 5.123 11.111 5 12 5C19 5 22 12 22 12C21.611 12.815 21.145 13.587 20.605 14.312" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const PlusIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-plus ${className}`}
  >
    <path 
      d="M12 5V19" 
      stroke="currentColor" 
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path 
      d="M5 12H19" 
      stroke="currentColor" 
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-close ${className}`}
  >
    <path 
      d="M18 6L6 18" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path 
      d="M6 6L18 18" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const AlertIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-alert ${className}`}
  >
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M12 8V12" 
      stroke="currentColor" 
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle 
      cx="12" 
      cy="16" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);

export const RocketIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-rocket ${className}`}
  >
    <path 
      d="M12 2C12 2 19 5 19 12C19 15 17 17 15 19L12 22L9 19C7 17 5 15 5 12C5 5 12 2 12 2Z" 
      fill="url(#rocket-gradient)"
      stroke="url(#rocket-gradient-stroke)" 
      strokeWidth="1.5"
    />
    <circle cx="12" cy="10" r="2" fill="white" />
    <path d="M8 19L6 21" stroke="url(#rocket-gradient-stroke)" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 19L18 21" stroke="url(#rocket-gradient-stroke)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="rocket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="100%" stopColor="#ffa500" />
      </linearGradient>
      <linearGradient id="rocket-gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="100%" stopColor="#ffa500" />
      </linearGradient>
    </defs>
  </svg>
);

export const HeartIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`icon-heart ${className}`}
  >
    <path 
      d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.99872 7.05 2.99872C5.59096 2.99872 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54872 7.04097 1.54872 8.5C1.54872 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" 
      fill="url(#heart-gradient)"
    />
    <defs>
      <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="100%" stopColor="#ff1744" />
      </linearGradient>
    </defs>
  </svg>
);