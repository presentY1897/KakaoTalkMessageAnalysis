import React, { Component } from 'react';
import TalkFilesContainer from '../TalkingData/TalkFilesContainer';
import { Container } from 'react-bootstrap';

class DataViewerTab extends Component {
    render() {
        return (
            <Container>
                <TalkFilesContainer addFile={this.props.file} selectFileEvent={this.props.fileChanged}></TalkFilesContainer>
            </Container>
        );
    };
};

export default DataViewerTab;