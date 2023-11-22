import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './ItemListContainerStyle.css'; 

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    setLoadingProducts(true);
    toast.info("Cargando productos", { autoClose: 1000 });

    getProducts()
      .then((resp) => {
        const filteredProducts = category
          ? resp.filter((product) => product.category === category)
          : resp;

        setTimeout(() => {
          setProducts(filteredProducts);
          setLoadingProducts(false);
        }, 1500);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div className={loadingProducts ? 'blurred' : ''}>
      <ItemList products={products} />
    </div>
  );
};

ItemListContainer.propTypes = {
  category: PropTypes.string,
};
