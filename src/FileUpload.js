import React, { Component } from 'react';
import { Figure, Button } from 'react-bootstrap';

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
        <Figure>
          파일을 업로드 해주세요.
        </Figure>
        <Button type="submit">확인</Button>
      </div>
    );
  };
}

export default FileUpload;