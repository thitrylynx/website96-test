import React from 'react';
import Link from '../link/link';

// styles
import styles from './categories.scss';

const ITEMS = [
  { title: 'Электроника', url: '#' },
  { title: 'Часы', url: '#' },
  { title: 'Одежда', url: '#' },
  { title: 'Обувь', url: '#' },
  { title: 'Товары для детей', url: '#' },
  { title: 'Товары для дома', url: '#' },
  { title: 'Спортивные товары', url: '#' }
];

const Categories = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <ul className={styles.nav}>
        {ITEMS.map((item, key) => <li key={key} className={styles.navItem}><Link url={item.url}>{item.title}</Link></li>)}
      </ul>
      <Link className={styles.additional} url='#'>Еще</Link>
    </div>
  </div>
)

export default Categories;