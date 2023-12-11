

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        setData(productsData);
        setFilter(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProduct = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    setFilter(updatedItems);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons">
          <button onClick={() => setFilter(data)} className="border-solid border-2 text-3xl text-black ps-8 pe-8 bg-indigo-400 border-black m-10 p-1 rounded-md">All Brands</button>
          <button onClick={() => filterProduct("men's clothing")} className="border-solid border-2 bg-indigo-400 ps-8 pe-8 text-3xl border-black text-black m-10 p-1 rounded-md">Men</button>
          <button onClick={() => filterProduct("women's clothing")} className="border-solid border-2 bg-indigo-400 text-3xl ps-8 pe-8 border-black text-black m-10 p-1 rounded-md">Women</button>
          <button onClick={() => filterProduct("jewelery")} className="border-solid border-2 bg-indigo-400 text-3xl text-black ps-8 pe-8 border-black m-10 p-1 rounded-md">Jewellery</button>
          <button onClick={() => filterProduct("electronics")} className="border-solid border-2 text-3xl bg-indigo-400 ps-8 pe-8 text-black border-black m-10 p-1 rounded-md">Electronics</button>
        </div>
        <div>
        {filter.map((item) => (
                  <div key={item.id} className="mb-8 p-4 border-2 rounded-md">
                 <img src={item.image} alt={item.title} style={{ maxHeight: '200px' }} />
     
         <h2 className="text-3xl font-semibold mb-2">{item.title.substring(0, 12)}</h2>
         <p className="text-xl text-gray-700 mb-2">$ {item.price}</p>
         {item.rating && (
           <p className="text-xl font-semibold mb-2">Rating: {item.rating.rate}</p>
         )}
         {item.description && (
           <p className="text-xl mb-4">{item.description}</p>
         )}
         <Link to={`/products/${item.id}`} className="text-xl text-blue-500 border-indigo-600 border-solid border-2 p-2 rounded-md hover:underline">
           Buy Now
         </Link>
       </div>
    
   ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <p className="text-center text-6xl p-2">All Products</p>
      {loading ? <p className="text-center text-2xl p-4">Loading...</p> : <ShowProducts />}
    </div>
  );
};

export default Products;
