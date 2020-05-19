import React, { useState, useEffect } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import TopBar from './components/TopBar/TopBar';
import marked from 'marked';
import sampleText from './helpers/sampleText';
import styles from './App.module.css';

const App = () => {
  const [editorText, setEditorText] = useState(sampleText);
  const [isEditor, setIsEditor] = useState(true);
  const [isPreviewer, setIsPreviewer] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setEditorText(value);
  };

  const handleClick = (e) => {
    const { id } = e.target;

    if (id === 'hide-editor') {
      setIsEditor(!isEditor);
    } else if (id === 'hide-previewer') {
      setIsPreviewer(!isPreviewer);
    }
  };

  const handleClose = (e) => {
    const { id } = e.target;

    if (id === 'closeEditor') {
      setIsEditor(false);
    } else if (id === 'closePreviewer') {
      setIsPreviewer(false);
    }
  };

  marked.setOptions({ breaks: true });

  useEffect(() => {
    const editorContainer = document.getElementById('editor-container');
    const previewerContainer = document.getElementById('previewer-container');

    const isMobile = window.innerWidth < 600;

    if (isPreviewer) {
      document.getElementById('preview').innerHTML = marked(editorText);
    }

    if (isPreviewer && isEditor) {
      editorContainer.style.width = isMobile ? '100%' : '40%';
      previewerContainer.style.width = isMobile ? '100%' : '60%';
    } else if (isPreviewer && !isEditor) {
      previewerContainer.style.width = '100%';
    } else if (!isPreviewer && isEditor) {
      editorContainer.style.width = '100%';
    }
  }, [editorText, isEditor, isPreviewer]);

  return (
    <div className={styles.container}>
      <TopBar
        handleOnClick={handleClick}
        isPreviewer={isPreviewer}
        isEditor={isEditor}
      />
      <div className={styles['main-wrapper']} id="main-wrapper">
        {isEditor && (
          <Editor
            editorText={editorText}
            handleChange={handleChange}
            handleClose={handleClose}
          />
        )}
        {isPreviewer && <Previewer handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default App;
