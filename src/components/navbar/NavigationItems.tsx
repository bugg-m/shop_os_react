import React, { useMemo } from 'react';
import { MenuItems } from '@static/nav-items';
import { IMenuItems } from '@/types/nav-types';
import { NavLink, useLocation } from 'react-router-dom';
import Image from '@components/image/Image';

const NavigationItems: React.FC = () => {
  const { pathname } = useLocation();
  const menuItemsWithActiveState = useMemo(
    () =>
      MenuItems.map((item: IMenuItems) => ({
        ...item,
        isActive: pathname === item.path || pathname.startsWith(item.path + '/'),
      })),
    [pathname]
  );

  return (
    <nav className="flex w-full items-center justify-around md:flex-col md:justify-center">
      {menuItemsWithActiveState.map(({ path, selectedIcon, icon, isActive }) => (
        <NavLink key={path} to={path} className="md:p-2">
          <Image
            src={isActive ? selectedIcon : icon}
            alt="menu icon"
            className={`${isActive ? 'md:size-7' : 'md:size-6'} size-10 transition-all duration-300 ease-in-out`}
          />
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationItems;
