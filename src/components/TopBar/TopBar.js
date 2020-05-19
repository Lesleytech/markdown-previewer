import React from 'react';
import styles from './TopBar.module.css';

const TopBar = ({ handleOnClick, isEditor, isPreviewer }) => {
  return (
    <div className={styles.container}>
      <strong>Markdown Previewer</strong>
      <div>
        <a
          href="https://www.github.com/lesleytech/markdown-previewer"
          target="_blank"
          rel="noreferrer noopener"
          title="View code on github"
        >
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <button onClick={(e) => handleOnClick(e)} id="hide-editor">
          {isEditor ? 'Hide' : 'Show'} editor
        </button>
        <button onClick={(e) => handleOnClick(e)} id="hide-previewer">
          {isPreviewer ? 'Hide' : 'Show'} previewer
        </button>
      </div>
    </div>
  );
};

export default TopBar;
