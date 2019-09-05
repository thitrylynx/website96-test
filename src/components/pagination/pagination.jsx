import React from 'react';
import classNames from 'classnames';

// styles
import styles from './pagination.scss';

const Pagination = () => (
  <ul className={styles.pagination}>
    <li className={classNames(styles.disabled)}>
      <a className={classNames(styles.pageLink, styles.arrowLeft)} href='#' tabIndex='-1' />
    </li>
    <li className={classNames(styles.active)}>
      <a className={styles.pageLink} href='#'>1</a>
    </li>
    <li><a className={styles.pageLink} href='#'>2</a></li>
    <li><a className={styles.pageLink} href='#'>3</a></li>
    <li><a className={styles.pageLink} href='#'>4</a></li>
    <li><a className={styles.pageLink} href='#'>5</a></li>
    <li>
      <a className={classNames(styles.pageLink, styles.arrowRight)} href='#' />
    </li>
  </ul>
);

export default Pagination;
