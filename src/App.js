import React, { useState, useEffect } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import TopBar from './components/TopBar/TopBar';
import marked from 'marked';
import sampleText from './helpers/sampleText';
import styles from './App.module.css';

const App = () => {
  const [text, setText] = useState(sampleText);
  const [isEditor, setIsEditor] = useState(true);
  const [isPreviewer, setIsPreviewer] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClick = (e) => {
    const { id } = e.target;

    if (id === 'hide-editor') {
      setIsEditor(!isEditor);
    } else if (id === 'hide-previewer') {
      setIsPreviewer(!isPreviewer);
    }
  };

  marked.setOptions({ breaks: true });

  useEffect(() => {
    if (isPreviewer) {
      document.getElementById('preview').innerHTML = marked(text);
    }
  }, [text, isPreviewer]);

  return (
    <>
      <div className={styles.container}>
        <TopBar
          onClick={handleClick}
          isPreviewer={isPreviewer}
          isEditor={isEditor}
        />
        <div className={styles['main-wrapper']}>
          {isEditor && (
            <Editor
              text={text}
              onChange={handleChange}
              onClose={() => setIsEditor(false)}
            />
          )}
          {isPreviewer && <Previewer onClose={() => setIsPreviewer(false)} />}
        </div>
      </div>
      <div className={styles.watermark_container}>
        <strong className={styles.watermark}>Coding is fun</strong>
        <strong className={styles.watermark_sub}>i love to code ...</strong>
      </div>
    </>
  );
};

export default App;
