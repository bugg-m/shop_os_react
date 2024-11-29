import logo from '@assets/icons/logo-icon.svg';
import Image from '@components/image/Image';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-300 bg-white px-4 py-3">
      <div className="flex items-center justify-center" onClick={() => navigate('/')}>
        <Image src={logo} alt="logo icon" />
      </div>
      <div className="flex size-10 items-center justify-center rounded-full border border-gray-900">
        <span className="text-gray-900">S</span>
      </div>
    </header>
  );
};

export default NavHeader;
