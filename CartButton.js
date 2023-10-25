// CartButton.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Store/Store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const isClicked = useSelector((state) => state.cart.isClicked);
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
