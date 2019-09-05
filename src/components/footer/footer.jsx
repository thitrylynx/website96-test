import React from 'react';
import Link from '../link/link';
import Logo from '../logo/logo';
import Socials from '../socials/socials';

// styles
import styles from './footer.scss';

const NAV_CATEGORIES = [
  { title: 'Электроника', url: '#' },
  { title: 'Часы', url: '#' },
  { title: 'Одежда', url: '#' },
  { title: 'Обувь', url: '#' },
  { title: 'Товары для детей', url: '#' },
  { title: 'Товары для дома', url: '#' }
]

const MAIN_NAV = [
  { title: 'О компании', url: '#' },
  { title: 'Новости', url: '#' },
  { title: 'Акции', url: '#' },
  { title: 'Доставка и оплата', url: '#' }
]

const ADDITIONAL_INFO = [
  { title: 'Гарантии', url: '#' },
  { title: 'Вопрос-ответ', url: '#' },
  { title: 'Контакты', url: '#' }
]

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        <h3>Каталог продукции</h3>
        <ul className={styles.nav}>
          {NAV_CATEGORIES.map((item, key) => <li key={key} className={styles.navItem}><Link className={styles.link} url={item.url}>{item.title}</Link></li>)}
        </ul>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.nav}>
          {MAIN_NAV.map((item, key) => <li key={key} className={styles.navItem}><Link className={styles.link} url={item.url}>{item.title}</Link></li>)}
        </ul>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.nav}>
          {ADDITIONAL_INFO.map((item, key) => <li key={key} className={styles.navItem}><Link className={styles.link} url={item.url}>{item.title}</Link></li>)}
        </ul>
      </div>
      <div className={styles.contacts}>
        <h3>Телефон</h3>
        <p>+7 (343) 372-57-75</p>
        <h3>Адресс</h3>
        <p>г. Екатеринбург ул. Генеральская, 3</p>
      </div>
    </div>
  </div>
)

export default Footer;