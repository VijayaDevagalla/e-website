import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    if (product) {
      setCart([...cart, product]);
      alert('Item added successfully');
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
      } catch (error) {
        setError('Error fetching product data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const ShowProduct = () => {
    return (
      <>
        <div className="flex ">
  <div className="max-w-2xl mx-4 my-8 p-8 bg-white rounded-lg shadow-lg">
    <div className="mb-6">
      <img src={product?.image} alt={product?.image} className="w-1/2 h-auto" />
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2">{product?.category}</h4>
      <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
      <p className="font-semibold mb-2">Rating {product?.rating && product?.rating.rate}</p>
      <h3 className="text-2xl font-bold mb-4">$ {product?.price}</h3>
      <p className="mb-4">{product?.description}</p>
      <button onClick={addToCart} className="border-2 bg-indigo-500 text-xl text-black m-3 p-2 rounded-md">
        Add to Cart
      </button>
      <button className="border-2 bg-indigo-500 text-xl text-black m-3 p-2 rounded-md">Go to Cart</button>
    </div>
  </div>
</div>

      </>
    );
  };

  return (
    <div>
      <div className="container">
        {loading ? <p>Loading...</p> : error ? <PageNotFound/> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
