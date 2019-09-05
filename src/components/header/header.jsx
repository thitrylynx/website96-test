import React from 'react';
import Link from '../link/link';
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import Button from '../button/button';

// styles
import styles from './header.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <Logo style={styles.logo} isColorful={true} />
      <SearchBar />
      <Link utl='tel:+73433725775' children='+7 (343) 372-57-75' className={styles.phone} />
      <Button children='Заказать звонок' className={styles.button} color='white' />
    </div>
  </div>
)

export default Header;