import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    const col = 4;
    let count = 0;
    return (
      <div>
        <Container>
          {this.props.files !== undefined ? this.props.files.reduce((acc, cur) => {
            if (count === 0) {
              acc.push([cur]);
            } else {
              acc[acc.length - 1].push(cur);
            }
            count++;
            if (count === 4) count = 0;
            return acc;
          }, []).map((arr) => {
            return <Row>
              {arr.map((file) =>
                <Col>
                  <TalkFile rawFile={file} clickEvent={this.props.selectFileEvent}></TalkFile>
                </Col>
              )}
            </Row>
          }) : ''}
        </Container>
      </div>
    );
  }
}

export default TalkFileContainers;