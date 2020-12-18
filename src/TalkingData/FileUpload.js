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
    message: '파일을 업로드 해주세요.',
  };

  changeFile = file => {
    if (file !== undefined) this.setState({
      file: file,
      message: file.name
    });
  }

  inputChange = e => {
    const file = e.target.files[0];
    this.changeFile(file);
  };

  uploadFile = () => {
    this.props.fileUploadEvent(this.state.file);
    this.setState({ message: '파일을 업로드 해주세요.' });
  };

  render() {
    const areaClick = (e) => {
      if (e.target.nodeName !== 'BUTTON') this.fileUploadInput.current.click();
    };
    const dragStart = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ style: { backgroundColor: '#2e2e2e' } });
    };
    const dragOver = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    const drop = e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files) {
        const file = e.dataTransfer.files[0];
        this.changeFile(file);
      };
      this.setState({ style: {} });
    }
    const dragEnd = e => {
      e.preventDefault();
      this.setState({ style: {} });
    };

    return (
      <div>
        <Jumbotron style={this.state.style} onClick={areaClick} onDragEnter={dragStart} onDragOver={dragOver} onDrop={drop} onDragLeave={dragEnd}>
          <h1>{this.state.message}</h1>
          <input type='file' ref={this.fileUploadInput} placeholder='파일을 올려주세요' className="FileInputBox" onChange={this.inputChange} style={{ display: 'none' }} />
          <Button variant='secondary' type="submit" onClick={this.uploadFile}>확인</Button>
        </Jumbotron>
      </div>
    );
  };
}

export default FileUpload;