import { useState } from "react";
import PropTypes from "prop-types";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="count-buttons">
        <button
          className={`count-button ${count === initial ? "disabled" : ""}`}
          onClick={decrement}
          disabled={count === initial}
          style={{
            pointerEvents: count === initial ? "none" : "auto",
          }}
        >
          -
        </button>
        <span className="count">{count}</span>
        <button
          className="count-button"
          onClick={increment}
          disabled={count === stock}
        >
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
};
