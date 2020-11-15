import React, { Component } from 'react';
import TalkFilesContainer from './TalkingData/TalkFilesContainer';

class FileUpload extends Component {
  state = {
    file: null
  };

  inputChange = e => {
      const file = e.target.files[0];
      this.setState({file: file});
  };
  render(){
    return (
      <div>
        <input type='file' placeholder='파일을 올려주세요' className="FileInputBox" onChange={this.inputChange}/>
        <button type="submit" className="FileUploadButton">확인</button>
        <TalkFilesContainer addFile = {this.state.file}></TalkFilesContainer>
      </div>
    );
  };
}

export default FileUpload;