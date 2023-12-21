import './Cart.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CarItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h3>No se encuentran artículos en el carrito</h3>
                <Link to ='/' className='OptionCart'>Ver productos</Link>
            </div>
        )
    }


    return(
        <div>
            {cart.map(p=> <CarItem key = {p.id} {...p}/>)}
            <h3>Total : ${total}</h3>
            <button onClick={()=> clearCart()} className='OptionCart'>Vaciar carrito</button>
            <Link to ='/checkout' className='OptionCart'>Pagar</Link>
        </div>
    )
}

export default Cart