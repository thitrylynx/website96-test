import React from 'react';

// styles
import styles from './search-bar.scss';

const SearchBar = () => (
  <div className={styles.search}>
    <input type='text' className={styles.searchTerm} placeholder='Поиск по 12000 товарам' />
    <button type='submit' className={styles.searchButton} />
  </div>
)

export default SearchBar;