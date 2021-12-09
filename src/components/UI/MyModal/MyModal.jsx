import React from 'react';
import st from './MyModal.module.css';

function MyModal({ children, formModal, setFormModal }) {
  let styles = [st.MyModal];
  if (formModal) {
    styles.push(st.active);
  }
  return (
    <div className={styles.join(' ')} onClick={() => setFormModal(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={st.MyModalContent}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
