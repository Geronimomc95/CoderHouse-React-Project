import './ItemDetail.css'
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img , category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext);
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture className='ContenedorImgDetail'>
                <img src={img} alt={name} className='ItemImgDetail' />
            </picture>
            <section>
                <p className='Info'> Categoria : {category}</p>
                <p className='Info'> Descripcion : {description}</p>
                <p className='Info'> Precio : {price}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <>
                            <Link to='/cart' className='Option finishPurchase'>Finalizar compra</Link>
                            <Link to='/' className='Option continueShopping'>Seguir comprando</Link>
                        </>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

ItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

export default ItemDetail
