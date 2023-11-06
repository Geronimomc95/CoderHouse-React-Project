import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';

export const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCartCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <BsCart4 color="red" size={20} />
      <span className='mx-2'>{cartCount}</span>
      <button className="btn btn-secondary mx-2" onClick={incrementCartCount}>+</button>
      <button className="btn btn-secondary" onClick={decrementCartCount}>-</button>
    </div>
  );
};
