import React, { Component } from 'react';
import TalkFilesContainer from '../TalkingData/TalkFilesContainer';
import { Container } from 'react-bootstrap';

class DataViewerTab extends Component {
    render() {
        return (
            <Container>
                <TalkFilesContainer addFile={this.props.file} selectFileEvent={this.props.fileChanged} files={
                    [
                        {name: '테스트 1'},
                        {name: '테스트 2'},
                        {name: '누구랑 누구랑 언제부터 언제까지 한 이야기 1'},
                        {name: '누구랑 누구랑 언제부터 언제까지 한 이야기 2'},
                        {name: '테스트 3'}
                    ]
                }></TalkFilesContainer>
            </Container>
        );
    };
};

export default DataViewerTab;