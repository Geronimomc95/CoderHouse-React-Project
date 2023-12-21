import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Cart3 } from 'react-bootstrap-icons';
import "./CartWidget.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="carrito">
            <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <div className="iconoCantidadContainer">
                    <Cart3 className="iconoCarrito" />
                    <span className="cantidadCarrito">{totalQuantity}</span>
                </div>
            </Link>
        </div>
    );
}

export default CartWidget;
