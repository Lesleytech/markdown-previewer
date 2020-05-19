import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../Toolbar/Toolbar';

const Editor = ({ editorText, handleChange, handleClose }) => {
  return (
    <div className={styles.container} id="editor-container">
      <Toolbar title="Editor" handleClose={handleClose} />
      <textarea
        id="editor"
        value={editorText}
        onChange={(e) => handleChange(e)}
        spellCheck="false"
      ></textarea>
    </div>
  );
};

export default Editor;
