import React from 'react';
import StoreExampleCard from '@components/cards/StoreExampleCard';
import Header from '@components/header/Header';
import Button from '@components/ui/button';
import { IStoreExampleCardProps } from '@/types/core-types';
import addCircle from '@assets/icons/add-circle-icon.svg';
import { StoreExampleItems } from '@static/store-items';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import Icon from '@components/icon/Icon';
import usePathNavigator from '@hooks/usePathNavigator';

const Stores: React.FC = () => {
  const { navigateTo } = usePathNavigator();

  return (
    <ContainerWrapper className="items-start">
      <div className="mx-auto w-full lg:w-1/2">
        <Header label="My Stores" />
        <div>
          <div className="rounded-lg bg-neutral-100 px-5 py-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Generate a Store</h2>
            <div className="text-sm font-medium text-gray-500">
              <p className="mb-4">
                Generative stores are AI built shopping destinations for your users. They adapt,
                personalize, and present information real-time. It&apos;s simply a better way to
                shop.
              </p>
              <p>
                Start by adding everything in your mind about the brand and what you are selling.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-10">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Examples</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {StoreExampleItems.map(({ src, label }: IStoreExampleCardProps) => (
                  <StoreExampleCard key={label} src={src} label={label} />
                ))}
              </div>
            </div>
            <div>
              <Button
                onClick={() => navigateTo('createStore')}
                variant="primaryRounded"
                value="Create a Store"
                iconLeft={<Icon src={addCircle} alt="add icon" />}
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Stores;
