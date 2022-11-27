import React, { Children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({Children}) => {
  return (
    <div>
    <Navbar />
    {Children}
    <Footer />
      
    </div>
  );
}

export default Layout;
