'use client'
import React, { useEffect, useState } from 'react';
import Products from "../../../components/cards/products.tsx";

const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await fetch('http://localhost:5001/products/getAllFavorites', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
       console.log(data);
       
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch favorite products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
      <div className="flex flex-wrap -m-4">
       
          <Products products={products} />
      
      </div>
    </div>
  );
};

export default Favorites;
