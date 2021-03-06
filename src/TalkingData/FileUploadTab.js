import React, { Component } from 'react';
import FileUpload from './FileUpload';
import { Container } from 'react-bootstrap';

class FileUploadTab extends Component {
    render(){
        return(
            <Container style={{backgroundColor: '#303030'}}>
                <FileUpload fileUploadEvent={this.props.fileUploadEvent}>
                </FileUpload>
            </Container>
        );
    };
};

export default FileUploadTab;