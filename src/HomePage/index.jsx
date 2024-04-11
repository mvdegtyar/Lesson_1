import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './style.css';

export const HomePage = () => {

  // const items = [
  //   { id: 1, name: 'Product1', img: 'rocket.svg' },
  //   { id: 2, name: 'Product2', img: 'rocket.svg' }
  // ];

  const [items, setItems] = useState();

  useEffect(() => {
    fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  return (
    <>
      <h2>Actualní nabídka</h2>
      <div className="products-container">
        {items?.map(it =>
          <div key={it.id}>
            <img src={it.image}></img>
            <Link to={'/product/' + it.id}>{it.name}</Link>
          </div>)
        }
      </div>
    </>
  );
};
