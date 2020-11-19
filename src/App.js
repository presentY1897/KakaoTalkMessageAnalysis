import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import TalkDataViewer from './DataChart/TalkDataViewer';

function App() {
  let selectedFile = null;
  const selectTalkFile = file => selectedFile = file;
  return (
    <div className="App">
      <header className="App-header">
        <FileUpload fileChanged={selectTalkFile}/>
      </header>
      <TalkDataViewer selectedFile={selectedFile}></TalkDataViewer>
    </div>
  );
}

export default App;
