import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import TalkFile from './TalkFile';

class TalkFileContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  componentDidUpdate(preProps) {
    if (preProps !== this.props && this.props.addFile !== undefined) {
      const addedFiles = this.state.files;
      addedFiles.push(this.props.addFile);
      this.setState({ files: addedFiles });
    }
  }

  render() {
    return (
      <div>
        <Container cellHeight={300} cols={4}>
          {this.state.files.map((file, idx) => 
            <div key={idx} >
              <TalkFile rawFile={file} clickEvent={this.props.selectFileEvent}></TalkFile>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default TalkFileContainers;