import React from 'react';
import { Link } from 'react-router-dom';

const NavBarComp = () => {
  //const [cartItems, setCartItems] = useState([]);

  // Removes an item with a specified ID
  
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link to='/' className='text-2xl font-bold text-white'>Home</Link>
          <Link to='/products' className='text-2xl font-bold text-white'>Products</Link>
          <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        value="value"               
      />
      <button class="text-xl">search</button>
    </div>
            <Link to='/login' className="text-2xl font-bold text-white">Login</Link>
           
          </div>
        
      </nav>
    </div>
  );
};

export default NavBarComp;
