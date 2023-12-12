import React from 'react';
import { Link } from 'react-router-dom';


const NavBarComp = () => {
  
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link to='/' className='text-2xl font-bold text-white'>Home</Link>
          <Link to='/products' className='text-2xl font-bold text-white'>Products</Link>
          
          <Link to='/login' className="text-2xl font-bold text-white">Login</Link>
        </div>
      </nav>
      </div>
  );
};

export default NavBarComp;
