import React from 'react';
import styles from './MyButton.module.css';

function MyButton({ children, ...props }) {
  let classes = [styles.myBtn];
  if (props.active) {
    classes.push(styles.myBtnActive);
  }
  return (
    <button {...props} className={classes.join(' ')}>
      {children}
    </button>
  );
}

export default MyButton;
