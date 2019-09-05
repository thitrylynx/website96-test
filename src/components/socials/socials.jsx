import React from 'react';
import Link from '../link/link';
import Logo from '../logo/logo';

// styles
import styles from './socials.scss';

const Socials = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      <p>Интеллектуальная собственность © 2018 Shop Template</p>
      <div className={styles.socials}>
        <Link className={styles.link} url='#'><img src={`/assets/images/VK.png`} alt='В контакте' title='В контакте' /></Link>
        <Link className={styles.link} url='#'><img src={`/assets/images/FB.png`} alt='Facebook' title='Facebook' /></Link>
        <Link className={styles.link} url='#'><img src={`/assets/images/Insta.png`} alt='Instagram' title='Instagram' /></Link>
      </div>
      <Logo isColorful={false} />
    </div>
  </div>
)

export default Socials;