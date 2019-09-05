import React from 'react';
import classNames from 'classnames';

// styles
import styles from './logo.scss';

const Logo = ({ isColorful, style }) => <a href='#' className={classNames(styles.logo, style)}>
  <img
    src={`/assets/images/${isColorful ? 'Logo' : 'Logo-bw'}.png`}
    alt='Логотип'
    title='Логотип компании Website96'
  />
</a>

export default Logo;