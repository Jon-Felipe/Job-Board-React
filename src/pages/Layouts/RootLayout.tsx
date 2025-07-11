import { Outlet } from 'react-router';

// components
import Header from '../../components/Header/Header';

function RootLayout() {
  return (
    <>
      <Header title='Job Board' />
      <Outlet />
    </>
  );
}

export default RootLayout;
