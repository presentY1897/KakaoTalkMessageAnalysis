import React, { Component } from 'react';
import TalkFilesContainer from '../TalkingData/TalkFilesContainer';
import TalkDataViewer from './TalkDataViewer'
import { Container } from 'react-bootstrap';

class DataViewerTab extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#303030'}}>
                <TalkFilesContainer addFile={this.props.file} selectFileEvent={this.props.fileChanged} files={
                    [
                        {name: '테스트 1', duration: [new Date().setFullYear(2017), new Date()], people: [{key:0, name:'테스트1'}, {key:1, name:'테스트2'}]},
                        {name: '테스트 2', duration: [new Date().setFullYear(2017), new Date()], people: [{key:0, name:'테스트1'}, {key:1, name:'테스트2'}, {key:2, name:'테스트3'}]},
                        {name: '누구랑 누구랑 언제부터 언제까지 한 이야기 1', duration: [new Date().setFullYear(2017), new Date()], people: [{key:0, name:'테스트1'}, {key:1, name:'테스트2'}, {key:2, name:'테스트3'}]},
                        {name: '누구랑 누구랑 언제부터 언제까지 한 이야기 2', duration: [new Date().setFullYear(2017), new Date()], people: [{key:0, name:'테스트1'}, {key:1, name:'테스트2'}]},
                        {name: '테스트 3', duration: [new Date().setFullYear(2017), new Date()], people: [{key:0, name:'테스트1'}, {key:1, name:'테스트2'}]}
                    ]
                }></TalkFilesContainer>
            </Container>
        );
    };
};

export default DataViewerTab;