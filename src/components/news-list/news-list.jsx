import React from 'react';
import NewsItem from '../news-item/news-item';
import Link from '../link/link';

// styles 
import styles from './news-list.scss';

const news = [
  {
    'id': 1,
    'date': '16 января 2018',
    'title': 'Люди, встречайте возвращение Nokia 3310'
  },

  {
    'id': 2,
    'date': '9 января 2018',
    'title': 'Переводчик с кошачьего – это реально'
  },

  {
    'id': 3,
    'date': '31 декабря 2017',
    'title': 'Наша компания поздравляет вас с Новым годом'
  }
]

const NewsList = () => (
  <div className={styles.wrapper}>
    <h3>Новости</h3>
    <ul className={styles.inner}>
      {news.map(child => (
        <li key={child.id}>
          <NewsItem {...child} />
        </li>
      ))}
    </ul>
    <Link className={styles.additional} url='#'>Все новости</Link>
  </div>
);
export default NewsList;