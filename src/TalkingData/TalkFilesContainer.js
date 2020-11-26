import React, { Component } from 'react';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import TalkDataViewer from '../DataChart/TalkDataViewer';
import TalkFile from './TalkFile';

class TalkFileContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      viewerOpen: false,
      viewerFile: undefined,
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
    const clickCard = (file) => {
      if(this.state.viewerOpen && this.state.viewerFile === file) this.setState({viewerOpen: false, viewerFile:file})
      else this.setState({viewerOpen: true, viewerFile:file})
    }
    return (
      <div>
        <Container>
          <Collapse in={this.state.viewerOpen}>
            <Row>
              <Col>
                <TalkDataViewer file={this.state.viewerFile}></TalkDataViewer>
              </Col>
            </Row>
          </Collapse>
          {this.props.files !== undefined ? this.props.files.reduce((acc, cur) => {
            if (count === 0) {
              acc.push([cur]);
            } else {
              acc[acc.length - 1].push(cur);
            }
            count++;
            if (count === col) count = 0;
            return acc;
          }, []).map((arr) => {
            return <Row>
              {arr.map((file) =>
                <Col>
                  <TalkFile rawFile={file} clickEvent={clickCard}></TalkFile>
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