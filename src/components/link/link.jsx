import React from 'react';
import classNames from 'classnames';

// styles
import styles from './link.scss';

const Link = ({ url, children, className }) => {
  return (
    <a className={classNames(styles.base, className)} href={url}>{children}</a>
  )
};

export default Link;
