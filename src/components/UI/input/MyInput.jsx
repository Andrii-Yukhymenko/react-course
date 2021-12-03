import React from 'react';
import styles from './MyInput.module.css'

function MyInput(props) {
  return (
    <input className={styles.myInput} {...props}/>
  );
}

export default MyInput;
