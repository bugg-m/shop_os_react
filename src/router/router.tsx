import SearchBar from '@features/search/components/SearchBar';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '@router/RootLayout';
import Stores from '@features/store/components/Store';
import CreateStore from '@features/store/components/CreateStore';
import Cart from '@features/cart/components/Cart';
import NotFoundPage from '@components/error/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<SearchBar />} />
      <Route path="stores" element={<Stores />} />
      <Route path="stores/createStore" element={<CreateStore />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
