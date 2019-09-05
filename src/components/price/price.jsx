import React from 'react';
import classNames from 'classnames';

// styles
import styles from './price.scss';

const colors = ['gray', 'pink'];

const formatPrice = number => {
  const result = [];
  const parts = String(number).split('');
  while (parts.length) {
    result.push(parts.splice(-3).join(''));
  }
  return result.reverse().join(' ');
};

const Price = ({ price, currency = '₽', className, color }) => {
  const colorClass = colors.indexOf(color) > -1 ? color : colors[0];
  return (
    <p className={classNames(styles.price, className, styles[colorClass])}>{formatPrice(price)}&nbsp;{currency}</p>
  );
};

export default Price;
