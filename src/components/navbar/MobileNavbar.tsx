import NavigationItems from './NavigationItems';
import React from 'react';

const MobileNavbar: React.FC = () => {
  return (
    <nav className="flex min-h-16 w-full items-center justify-around border-t border-gray-300 bg-white">
      <NavigationItems />
    </nav>
  );
};

export default MobileNavbar;
