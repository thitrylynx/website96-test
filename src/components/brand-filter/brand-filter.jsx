import React from 'react';

// styles
import styles from './brand-filter.scss';

const CHECK_BOXES = [
  {
    'id': 1,
    'name': 'Adidas',
    'checked': true
  },
  {
    'id': 2,
    'name': 'Adidas'
  },
  {
    'id': 3,
    'name': 'Adidas'
  },
  {
    'id': 4,
    'name': 'Adidas'
  }
]

const BrandFilter = () => (
  <div className={styles.wrapper}>
    <p>Бренд</p>
    <button className={styles.collapse} />
    <ul className={styles.centered}>
      {CHECK_BOXES.map(child => (
        <li key={child.id}>
          <input
            className={styles.styledCheckbox}
            id={`styled-checkbox-${child.id}`}
            type='checkbox'
            defaultValue={`value${child.id}`}
            defaultChecked={child.checked}
          />
          <label htmlFor={`styled-checkbox-${child.id}`}>{child.name}</label>
        </li>
      ))}
    </ul>
  </div>
)

export default BrandFilter;