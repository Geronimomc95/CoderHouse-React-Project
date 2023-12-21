import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className='contenedor'>
            <article className='CardItem'>
                <header className='Header'>
                    <h2 className='ItemHeader'>{name}</h2>
                </header>
                <picture className='ContenedorImg'>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className='Info'> Precio: ${price}</p>
                    <p className='Info'> Unidades disponibles: {stock}</p>
                </section>
                <footer className='ItemFooter'>
                    <Link to={`/item/${id}`} className='Option'>
                        Detalles
                    </Link>
                </footer>
            </article>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

export default Item;
