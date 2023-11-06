import PropTypes from 'prop-types'; 
import styles from './container.module.css';

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.color}>{greeting}</div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired, 
};