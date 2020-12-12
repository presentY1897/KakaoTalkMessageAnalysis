import React from 'react';
import './App.css';
import ExplainTab from './Explain/ExplainTab';
import FileUploadTab from './TalkingData/FileUploadTab';
import DataViewerTab from './DataChart/DataViewerTab';
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [uploadFile, setUploadFile] = React.useState(null);
  const fileUploadEvent = (file) => {
    setUploadFile(file);
  };
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
            <FileUploadTab fileUploadEvent={fileUploadEvent}></FileUploadTab>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataViewerTab addedFile={uploadFile}></DataViewerTab>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
