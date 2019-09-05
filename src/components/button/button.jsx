import React from 'react';
import classNames from 'classnames';
import styles from './button.scss';

const COLORS = ['white', 'red'];

let returnOrdinaryClasses = (color, className) => (
  classNames(styles.base, styles[color], className)
);

const Button = ({ color, children, className }) => {
  let clr = COLORS.indexOf(color) > -1 && color;
  let buttonClasses = returnOrdinaryClasses(clr, className);
  return (
    <button className={buttonClasses} type='button'>
      {children}
    </button>
  )
};

export default Button;
