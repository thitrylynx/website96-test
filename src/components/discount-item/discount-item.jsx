import React from 'react';

// styles
import styles from './discount-item.scss';

const DiscountItem = ({ offer, discount, item, title, img }) => (
  <a href='#' className={styles.wrapper}>
    <h4 className={styles.title}>
      <span>{offer}</span>
      <span>{discount}</span>
      <span>{item}</span>
    </h4>
    <div className={styles.image}>
      <img src={img} alt={offer} title={offer} className={styles.image} />
    </div>
  </a>
);

export default DiscountItem;