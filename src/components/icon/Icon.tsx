import { IIconProps } from '@/types/core-types';
import { cn } from '@utils/ui-design';
import React from 'react';

const Icon: React.FC<IIconProps> = ({ src, alt, className, ...props }) => {
  return <img src={src} alt={alt} {...props} className={cn('hue-rotate-180 filter', className)} />;
};

export default Icon;
