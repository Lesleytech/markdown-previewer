import React from 'react';
import styles from './Previewer.module.css';
import Toolbar from '../Toolbar/Toolbar';

const Previewer = ({ handleClose }) => {
  return (
    <div className={styles.container} id="previewer-container">
      <Toolbar title="Previewer" handleClose={handleClose} />
      <div id="preview" className={styles.preview}></div>
    </div>
  );
};

export default Previewer;
