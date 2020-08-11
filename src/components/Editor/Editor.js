import React from 'react';
import styles from './Editor.module.css';

const Editor = ({ text, onChange, onClose }) => {
  return (
    <div className={styles.container} id='editor-container'>
      <div>
        <div className={styles.titlebar}>
          <strong>Editor</strong>
          <button className={styles.close_btn} onClick={onClose}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
        <textarea
          id='editor'
          value={text}
          onChange={(e) => onChange(e)}
          spellCheck='false'
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
