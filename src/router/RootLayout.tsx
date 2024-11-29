import MobileNavbar from '@components/navbar/MobileNavbar';
import Navbar from '@components/navbar/Navbar';
import NavHeader from '@components/navbar/NavHeader';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="box-border min-h-screen min-w-full">
      <div className="hidden min-h-screen md:flex">
        <section className="fixed z-40 w-full">
          <Navbar />
        </section>
        <div className="mx-auto flex-1 overflow-auto px-5">
          <Outlet />
        </div>
      </div>
      <div className="box-border flex min-h-screen flex-col md:hidden">
        <section className="fixed top-0 z-40 w-full">
          <NavHeader />
        </section>
        <div className="size-full min-h-screen overflow-auto px-10 py-20">
          <Outlet />
        </div>
        <section className="fixed bottom-0 z-40 w-full">
          <MobileNavbar />
        </section>
      </div>
    </div>
  );
}

export default RootLayout;
