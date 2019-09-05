import React from 'react';
import Button from '../button/button';
import Price from '../price/price';
import Link from '../link/link';

// styles
import styles from './product-item.scss';

const ProductItem = ({ title, price, img, showPopup, id }) => (
  <a href='#' className={styles.wrapper}>
    <div className={styles.favorite} url='#' />
    <div className={styles.image}>
      <img styles={styles.image} src={img} alt={title} title={title} />
    </div>
    <header className={styles.header}>
      <p className={styles.title}>{title}</p>
      <Price className={styles.price} price={price} />
    </header>
  </a>
);

export default ProductItem;
