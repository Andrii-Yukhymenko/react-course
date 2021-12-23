import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Страница не найдена, вернитесь на главную:</h1>
        <Link className={styles.link} to="/posts">Главная</Link>
      </div>
    </div>
  );
}

export default NotFound;
