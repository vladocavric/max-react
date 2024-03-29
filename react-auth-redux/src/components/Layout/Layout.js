import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main><Outlet /></main>
    </Fragment>
  );
};

export default Layout;
