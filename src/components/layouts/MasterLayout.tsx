import AppNavBar from 'components/partials/AppNavBar';
import React from 'react';

const MasterLayout = ({ children }) => {
  return (
    <>
      <div className="master">
        <AppNavBar />
        <main className="main container">{children}</main>
      </div>
    </>
  );
};

export default MasterLayout;
