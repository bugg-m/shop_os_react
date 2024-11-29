import logo from '@assets/icons/logo-icon.svg';
import NavigationItems from './NavigationItems';
import Image from '@components/image/Image';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex min-h-screen w-20 flex-col items-center justify-between border-r border-gray-300 bg-white py-6 md:w-20">
      <div className="flex items-center justify-center" onClick={() => navigate('/')}>
        <Image src={logo} alt="logo icon" />
      </div>
      <NavigationItems />
      <div className="flex size-10 items-center justify-center rounded-full border border-gray-900">
        <span className="text-gray-900">S</span>
      </div>
    </nav>
  );
};

export default Navbar;
