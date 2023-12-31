// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/Store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const increaseQuantityHandler = () => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
        <div className={classes.remove}>
          <button onClick={removeItemHandler}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
