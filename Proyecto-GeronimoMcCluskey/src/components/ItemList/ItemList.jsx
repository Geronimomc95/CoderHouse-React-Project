import { Item } from "../Item/Item";
import PropTypes from "prop-types"; 

export const ItemList = ({ products }) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};


ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
