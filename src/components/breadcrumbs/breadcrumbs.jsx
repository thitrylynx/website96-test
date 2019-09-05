import React from 'react';

// styles
import styles from './breadcrumbs.scss';

const Breadcrumbs = () => (
  <div className={styles.breadcrumb}>
    <a href='#'>Главная /</a>
    <a href='#'>Каталог товаров /</a>
    <a href='#'>Бытовая техника /</a>
    <a href='#'>Нотубуки</a>
  </div>
)

export default Breadcrumbs;

