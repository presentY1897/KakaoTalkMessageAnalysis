import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.fileUploadInput = React.createRef();
  }
  state = {
    file: null,
    style: {},
  };

  inputChange = e => {
    const file = e.target.files[0];
    this.setState({ file: file });
  };

  render() {
    const areaClick = (e) => {
      this.fileUploadInput.current.click();
    };
    const dragStart = (e) => {
      console.log(e);
      this.setState({style: {backgroundColor: '#2e2e2e'}});
    };
    const dragEnd = e => {
      this.setState({style: {}});
    };
    return (
      <div>
        <Jumbotron onClick={areaClick} onDragEnter={dragStart} onDragLeave={dragEnd} style={this.state.style}>
          <h1>파일을 업로드 해주세요.</h1>
          <input type='file' ref={this.fileUploadInput} placeholder='파일을 올려주세요' className="FileInputBox" onChange={this.inputChange} style={{ display: 'none' }} />
          <Button variant='secondary' type="submit">확인</Button>
        </Jumbotron>
      </div>
    );
  };
}

export default FileUpload;