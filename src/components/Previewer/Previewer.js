import React from 'react';
import styles from './Previewer.module.css';

const Previewer = ({ onClose }) => {
  return (
    <div className={styles.container} id='previewer-container'>
      <div>
        <div className={styles.titlebar}>
          <strong>Previewer</strong>
          <button className={styles.close_btn} onClick={onClose}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
        <div id='preview' className={styles.preview}></div>
      </div>
    </div>
  );
};

export default Previewer;
