import React from 'react';
import DiscountItem from '../discount-item/discount-item';
import Link from '../link/link';

// styles
import styles from './discount-list.scss';

const disctounts = [
  {
    'id': 1,
    'offer': 'Скидка',
    'discount': '40%',
    'item': 'на горные велосипеды',
    'img': 'assets/images/Discount-photo.png'
  },

  {
    'id': 2,
    'offer': 'Скидка ',
    'discount': '40% ',
    'item': 'на горные велосипеды',
    'img': 'assets/images/Discount-photo.png'
  },
]

const DiscountList = () => (
  <div className={styles.wrapper}>
    <h3>Акции</h3>
    <ul className={styles.inner}>
      {disctounts.map(child => (
        <li key={child.id}>
          <DiscountItem {...child} />
        </li>
      ))}
    </ul>
    <Link className={styles.additional} url='#'>Все акции</Link>
  </div>
);

export default DiscountList;