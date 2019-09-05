import React from 'react';
import Filters from '../filters/filters';
import ProductList from '../product-list/product-list';
import DiscountList from '../discount-list/discount-list';
import NewsList from '../news-list/news-list';
import SortingOtions from '../sorting-options/sorting-options';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Pagination from '../pagination/pagination';
import Agreement from '../agreement-block/agreement-block';

// styles
import styles from './container.scss';

const Container = ({ products }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Breadcrumbs />
      <h1>Ноутбуки</h1>
      <p>1050 товаров</p>
    </header>
    <div className={styles.inner}>
      <div className={styles.leftBlock}>
        <Filters />
        <DiscountList />
        <NewsList />
      </div>
      <div className={styles.rightBlock}>
        <SortingOtions />
        <ProductList products={products} />
        <Pagination />
        <Agreement />
      </div>
    </div>
  </div>
)

export default Container;