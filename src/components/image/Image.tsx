import { IIconProps } from '@/types/core-types';
import React from 'react';

const Image: React.FC<IIconProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Image;
