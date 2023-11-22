import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 
import "./Item.css"

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="custom-card-container">
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" className="imagen-item" />
          <p className="card-text">{description}</p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};



Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
