import React from 'react';
import ProductItem from '../product-item/product-item';

// styles
import styles from './product-list.scss';

const ProductList = ({ products, showPopup, hidePopup }) => (
  <ul className={styles.wrapper}>
    {products && products.map(child => (
      <li key={child.id}>
        <ProductItem {...child} />
      </li>
    ))}
  </ul>
);
export default ProductList;
