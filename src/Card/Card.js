import React from 'react';
/*import './Card.css';*/
import styles from './Card.module.css';

export function  Card(props)  {
  return <div className={styles.card}>{props.children}</div>;
};


