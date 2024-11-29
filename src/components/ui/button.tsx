import React from 'react';
import { cn } from '@utils/ui-design';
import spinner from '@assets/icons/spinner-icon.svg';
import { IButtonProps } from '@/types/ui-types';
import Icon from '@components/icon/Icon';

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  shadowVariant = 'shadow',
  iconLeft,
  className = '',
  value = '',
  onClick,
  loading = false,
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    outline: 'text-black hover:bg-gray-100 border border-gray-200',
    outlineRounded: 'text-black hover:bg-gray-100 border border-gray-200 rounded-full',
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    primaryRounded: 'bg-black text-white hover:bg-zinc-800 rounded-full',
    secondaryRounded: 'bg-gray-200 text-black hover:bg-gray-300 rounded-full',
  };

  const shadowStyles = {
    none: '',
    shadow: 'shadow',
    shadowMd: 'shadow-md',
    shadowLg: 'shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        `flex items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-normal transition-all md:gap-3 md:px-6 md:py-3 md:text-base ${variantStyles[variant]} ${shadowStyles[shadowVariant]}`,
        className
      )}
      {...props}
    >
      {iconLeft && !loading && iconLeft}
      {loading && <Icon src={spinner} alt="spinner" className="size-6 animate-spin" />}
      <span>{loading ? 'Generating...' : value}</span>
    </button>
  );
};

export default Button;
