import React from 'react';
import classNames from 'classnames';

// styles
import styles from './dropdown-list.scss';

const DropdownList = ({ selectors, placeHolderName, style }) => (
  <div className={classNames(styles.select, style)}>
    <input type='radio' name='option' />
    <i className={classNames(styles.toggle, styles.icon, styles.iconArrowDown)}></i>
    <i className={classNames(styles.toggle, styles.icon, styles.iconArrowUp)}></i>
    <span className={styles.placeholder}>{placeHolderName}</span>
    {selectors && selectors.map(child => (
      <label key={child} className={styles.option}>
        <input type='radio' name='option' />
        <span className={styles.title}>{child}</span>
      </label>
    ))}
  </div>
)

export default DropdownList;



