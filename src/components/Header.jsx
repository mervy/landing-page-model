import React from 'react';
import config from '../config/config';

const Header = () => {
  return (
    <header className="bg-info text-white text-center py-3">
      <h1>{config.siteTitle}</h1>
    </header>
  );
};

export default Header;
