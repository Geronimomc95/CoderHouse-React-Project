import PropTypes from "prop-types";
import { ItemCount } from "../ItemCount/ItemCount";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ItemDetail.css"; 

export const ItemDetail = ({ name, description, img, price, stock }) => {
  const onAdd = () => {
    toast.success('Agregado al carrito correctamente', { autoClose: 2000 });
  };

  return (
    <div className="item-detail-container">
      <div className="custom-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" className="img-detail" />
          <p className="card-text">{description}</p>
          <p className="card-price">Precio: {price}</p>
          <ItemCount stock={stock} onAdd={onAdd} className="item-count" />
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};
