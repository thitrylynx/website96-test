import React from 'react';
import DropdownList from '../dropdown-list/dropdown-list';
import classNames from 'classnames';

// styles
import styles from './offer-filter.scss';

let selectors = ['Акции', 'Скидки', 'Распродажа', 'Уцененный товар']
let placeHolderName = 'Предложения'

const OfferFilter = () => (
  <div className={styles.wrapper}>
    <p>Бренд</p>
    <button className={styles.collapse} />
    <DropdownList selectors={selectors} placeHolderName={placeHolderName} style={styles.select} />
  </div>
)

export default OfferFilter;