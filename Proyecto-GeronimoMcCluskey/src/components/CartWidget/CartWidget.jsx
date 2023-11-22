import { BiCart } from "react-icons/bi";
import PropTypes from "prop-types"; 
import "./CartWidget.css";

export const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <BiCart size={28} className="cart-icon" />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};


CartWidget.propTypes = {
  itemCount: PropTypes.number.isRequired, 
};
