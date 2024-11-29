import { IHeaderProps } from '@/types/core-types';
import React from 'react';
import arrowIcon from '@assets/icons/arrow-icon.svg';
import Button from '@components/ui/button';
import Image from '@components/image/Image';
import usePathNavigator from '@hooks/usePathNavigator';

const Header: React.FC<IHeaderProps> = ({
  label,
  isBorder = false,
  showBackButton = true,
  showActionButton = false,
  actionButtonText = '',
  onBack,
  onAction,
}) => {
  const { goBack } = usePathNavigator();

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    }
    goBack();
  };
  return (
    <div
      className={`flex items-center justify-between bg-white py-4 ${isBorder ? 'border-b border-gray-200' : ''}`}
    >
      <div className="flex items-center gap-5">
        {showBackButton && (
          <Image
            onClick={handleGoBack}
            src={arrowIcon}
            alt="arrow_back"
            className="cursor-pointer"
          />
        )}

        <h1 className="grow text-center text-3xl font-semibold text-gray-800">{label}</h1>
      </div>

      {showActionButton && (
        <Button
          variant="secondary"
          value={actionButtonText}
          onClick={onAction}
          aria-label={actionButtonText}
        />
      )}
    </div>
  );
};

export default Header;
