import React, { Fragment } from 'react';
import PriceFilter from '../price-filter/price-filter';
import BrandFilter from '../brand-filter/brand-filter';
import GenderFilter from '../gender-filter/gender-filter';
import OfferFilter from '../offer-filter/offer-filter';
import Button from '../button/button'

// styles
import styles from './filters.scss';

const Filters = () => (
  <div className={styles.wrapper}>
    <PriceFilter />
    <BrandFilter />
    <GenderFilter />
    <OfferFilter />
    <Button children='Применить' className={styles.button} color='red' />
    <Button children='Сбросить' className={styles.button} color='white' />
  </div>
)

export default Filters;