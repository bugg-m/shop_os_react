import Icon from '@components/icon/Icon';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { QuickMenuItems } from '@static/search-nav-items';
import { IQuickMenuItems } from '@/types/nav-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import addCircleIcon from '@assets/icons/add-circle-icon.svg';
import arrow from '@assets/icons/arrow-icon.svg';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="mb-4 text-lg font-semibold md:text-2xl">How can I assist you today?</h1>
      <div className="relative flex w-full items-center space-x-2 rounded-full border border-gray-300 bg-white px-1 py-0.5 md:w-3/5 md:px-2 md:py-1">
        <div className="ml-1 flex items-center justify-center">
          <Icon src={addCircleIcon} alt="add circle icon" />
        </div>
        <Input
          type="text"
          placeholder="What are we selling today?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="none"
          className="w-full rounded-full px-2"
        />
        <div className="flex items-center justify-center rounded-full bg-gray-300 p-2">
          <Icon src={arrow} alt="add circle icon" className="rotate-90" />
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        {QuickMenuItems.map(({ path, icon, label }: IQuickMenuItems) => (
          <NavLink to={path} key={label}>
            <Button
              variant="outlineRounded"
              value={label}
              iconLeft={<Icon src={icon} alt={label} className="size-5 md:size-8" />}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
