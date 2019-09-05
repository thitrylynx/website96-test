import React from 'react';
import Link from '../link/link';

// styles
import styles from './main-nav.scss';

const NAV_ITEMS = [
  { title: 'О компании', url: '#' },
  { title: 'Новости и акции', url: '#' },
  { title: 'Доставка и оплата', url: '#' },
  { title: 'Гарантии', url: '#' },
  { title: 'Вопрос-ответ', url: '#' },
  { title: 'Контакты', url: '#' }
];

const MainNav = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <ul className={styles.nav}>
        {NAV_ITEMS.map((item, key) => <li key={key} className={styles.navItem}>
          <Link url={item.url}>{item.title}</Link>
        </li>)}
      </ul>
      <p className={styles.address}>г. Екатеринбург, ул. Генеральская, 3, оф. 206</p>
    </div>
  </div>
)

export default MainNav;