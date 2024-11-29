import React from 'react';

export interface ISearchBarProps {
  handleSearch: (value: string) => void;
}

export interface IHeaderProps {
  label: string;
  isBorder?: boolean;
  showBackButton?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  onBack?: () => void;
  onAction?: () => void;
}

export interface IStoreExampleCardProps {
  src: string;
  label: string;
}

export interface IContainerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
