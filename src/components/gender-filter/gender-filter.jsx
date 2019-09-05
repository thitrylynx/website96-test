import React from 'react';

// styles
import styles from './gender-filter.scss';


const GenderFilter = () => (
  <div className={styles.wrapper}>
    <p>Бренд</p>
    <button className={styles.collapse} />
    <div className={styles.container}>
      <div className={styles.radio}>
        <input id='radio-1' name='radio' type='radio' defaultChecked />
        <label htmlFor='radio-1' className={styles.radioLabel}>Мужчинам</label>
      </div>
      <div className={styles.radio}>
        <input id='radio-2' name='radio' type='radio' />
        <label htmlFor='radio-2' className={styles.radioLabel}>Женщинам</label>
      </div>
    </div>
  </div>
)

export default GenderFilter;