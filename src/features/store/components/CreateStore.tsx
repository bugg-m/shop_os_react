import React from 'react';
import Input from '@components/ui/input';
import Header from '@components/header/Header';
import TextArea from '@components/ui/textarea';
import UploadFile from '@components/ui/uploadFile';
import Button from '@components/ui/button';
import { CreateStoreButtonItems } from '@static/store-items';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import Icon from '@components/icon/Icon';

const CreateStore: React.FC = () => {
  return (
    <ContainerWrapper className="items-start">
      <div className="mx-auto w-full md:w-3/4 md:px-5 lg:w-2/3">
        <header>
          <Header label="Create a new store" />
        </header>
        <div className="mx-auto">
          <div className="mb-4">
            <Input
              id="storeName"
              type="text"
              placeholder="Name your store"
              variant="defaultRounded"
              label="Store Name"
            />
          </div>

          <div className="mb-4">
            <TextArea
              id="storeDescription"
              placeholder="Describe your store"
              variant="default"
              label="Store Description"
            />
          </div>

          <div className="mb-4">
            <UploadFile />
          </div>

          <div className="mb-4 flex items-center justify-between gap-4">
            {CreateStoreButtonItems.map(({ label, src }) => (
              <Button
                key={label}
                variant="outline"
                value={label}
                iconLeft={<Icon src={src} alt={label} className="size-4 md:size-5" />}
                className="w-full text-nowrap rounded-xl text-xs md:w-auto"
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" className="w-full rounded-xl md:w-auto" value="Upload" />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default CreateStore;
