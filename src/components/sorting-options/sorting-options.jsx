import React from 'react';
import DropdownList from '../dropdown-list/dropdown-list';

// styles
import styles from './sorting-options.scss';

let placeHolderNameFirst = 'Цене от низкой к высокой'
let placeHolderNameSecond = '12'

const SortingOtions = () => (
  <div className={styles.wrapper}>
    <button className={styles.filterButton}>Фильтр</button>
    <div className={styles.inner}>
      <p>Сортировать по</p>
      <DropdownList placeHolderName={placeHolderNameFirst} style={styles.select} />
    </div>
    <div className={styles.inner}>
      <p>Показывать товаров на странице</p>
      <DropdownList placeHolderName={placeHolderNameSecond} style={styles.select} />
    </div>
  </div>
)

export default SortingOtions;