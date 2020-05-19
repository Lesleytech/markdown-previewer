import React from 'react';
import styles from './Toolbar.module.css';

const Toolbar = ({ title, handleClose }) => {
  return (
    <div className={styles.toolbar}>
      <small>{title}</small>
      <button onClick={(e) => handleClose(e)} id={'close' + title}>
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Toolbar;
