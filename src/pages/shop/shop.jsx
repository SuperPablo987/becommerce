import React from 'react';

import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css';

export const Shop = () => {
  return (
    <div class="shop">
        <div className="shopTitle">
            <h1>PabloTech Shop</h1>
        </div>
        <div className="products">
            {" "}
            {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
        </div>
    </div>
  );
};
