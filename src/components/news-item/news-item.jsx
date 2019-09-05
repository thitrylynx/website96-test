import React from 'react';
import Link from '../link/link';

import styles from './news-item.scss';

const NewsItem = ({ title, date }) => (
  <header className={styles.header}>
    <p>{date}</p>
    <Link className={styles.title} url='#'>{title}</Link>
  </header>
);

export default NewsItem;