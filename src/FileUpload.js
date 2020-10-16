import React, { Component } from 'react';

class FileUpload extends Component {
  state = {
    file: null
  };

  inputChange = e => {
      const file = e.target.files[0];
      this.setState({file: file}, () => {console.log(this);console.log(this.state.file);});
  }
  render(){
    return (
      <div className="FileUpload">
        <input type='file' placeholder='파일을 올려주세요' className="FileInputBox" onChange={this.inputChange}/>
        <button type="submit" className="FileUploadButton">확인</button>
      </div>
    );
  }
}

export default FileUpload;
