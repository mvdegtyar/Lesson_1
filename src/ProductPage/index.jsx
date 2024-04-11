import React, { useState, useEffect } from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';

// https://v5.reactrouter.com/web/example/url-params
export const ProductPage = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id]);

  return (
    <>
      <Link to="/">Home</Link>
      <div>
        { !!product 
          ? <div className="product-container">
              <img className='prodImage' src={product.image}></img>
              <span>{product.id} - {product.name}</span>
            </div>  
          : 'loading'  
        }
        
      </div>
    </>
  );
};
