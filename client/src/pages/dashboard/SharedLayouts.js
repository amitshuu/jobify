import React from 'react';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Link, Outlet } from 'react-router-dom';
import SmallSidebar from '../../components/SmallSidebar';
import BigSidebar from '../../components/BigSidebar';
import Navbar from '../../components/Navbar';

const SharedLayouts = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayouts;
