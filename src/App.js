import React from 'react';
import './App.css';
import ExplainTab from './Explain/ExplainTab';
import FileUploadTab from './FileUpload/FileUploadTab';
import DataViewerTab from './TalkingData/DataViewerTab';
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#d5d5d5' }}>
        <Row>
          <Col>
            <ExplainTab></ExplainTab>
          </Col>
        </Row>
        <Row>
          <Col>
            <FileUploadTab></FileUploadTab>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataViewerTab></DataViewerTab>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
