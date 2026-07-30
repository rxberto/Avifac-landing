interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  children,
  href = '#',
  onClick,
  className = '',
}: ButtonProps) => {
  const isPrimary = variant === 'primary';

  const baseStyles =
    'inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium leading-[1.2] tracking-[-0.02em] transition-all duration-200 select-none cursor-pointer';

  const primaryStyles =
    'bg-[#0A0C0B] dark:bg-white text-white dark:text-black hover:ring-2 hover:ring-[rgba(10,12,11,0.18)] dark:hover:ring-white/50 shadow-sm';

  const secondaryStyles =
    'bg-[#E6E6E3] dark:bg-[#232326] text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:bg-[#D2D2CE] dark:hover:bg-[#303131] hover:text-[#0A0C0B] dark:hover:text-white';

  const combinedClasses = `${baseStyles} ${
    isPrimary ? primaryStyles : secondaryStyles
  } ${className}`;

  if (href && href !== '#') {
    return (
      <a
        href={href}
        target={isPrimary ? '_blank' : '_self'}
        rel={isPrimary ? 'noopener noreferrer' : ''}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
