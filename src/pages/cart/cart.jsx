import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { PRODUCTS } from '../../products';
import { ShopContext} from '../../context/shop-context';
import { CartItem } from './cartItem';
import './cart.css';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return  (
    <div className='cart'>
      <div> 
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0 ) {
            return <CartItem data={product}/>;
          }
        })}
      </div>

    {totalAmount > 0 ? (
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button 
          onClick={() => {
            // checkout();
            // navigate('/checkout');
          }}
        >
          Checkout
          </button>
      </div>
    ) : (
        <p>Your Cart is Empty</p>
        )}
    </div>
  );
};
