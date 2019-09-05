import React from 'react';

// styles
import styles from './price-filter.scss';


const PriceFilter = () => (
  <div className={styles.wrapper}>
    <p>Цена</p>
    <button className={styles.collapse} />
    <div className={styles.inner}>
      <div className={styles.priceInputs}>
        <input type='text' className={styles.searchTerm} placeholder='520' />
        <p>-</p>
        <input type='text' className={styles.searchTerm} placeholder='999 999 999' />
      </div>
      <div className={styles.multiRange}>
        <input type='range' min='0' max='50' defaultValue='5' id='lower' />
        <input type='range' min='0' max='50' defaultValue='45' id='upper' />
      </div>
    </div>
  </div>
)

export default PriceFilter;