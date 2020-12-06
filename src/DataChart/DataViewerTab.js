import React, { Component } from 'react';
import TalkFilesContainer from '../TalkingData/TalkFilesContainer';
import { Container } from 'react-bootstrap';

class DataViewerTab extends Component {
    state = {
        files:
            [
                { name: '테스트 1', duration: [new Date().setFullYear(2017), new Date()], people: this.randomDataCreate() },
                { name: '테스트 2', duration: [new Date().setFullYear(2017), new Date()], people: this.randomDataCreate() },
                { name: '누구랑 누구랑 언제부터 언제까지 한 이야기 1', duration: [new Date().setFullYear(2017), new Date()], people: this.randomDataCreate() },
                { name: '누구랑 누구랑 언제부터 언제까지 한 이야기 2', duration: [new Date().setFullYear(2017), new Date()], people: this.randomDataCreate() },
                { name: '테스트 3', duration: [new Date().setFullYear(2017), new Date()], people: this.randomDataCreate() }
            ]
    }
    componentDidUpdate = (preProps) => {
        if (preProps.addedFile !== this.props.addedFile && this.props.addedFile !== null) {
            console.log(this.props.addedFile);
        }
    };
    
    randomDataCreate(){
        let people = [];
        const minPeople = 2;
        const maxPeople = 20;
        const peopleCount = Math.max(Math.floor(Math.random() * maxPeople), minPeople);
        const maxTalkperDay = 1000;
        const diffDate = Math.max(Math.floor(Math.random() * 100), 1);
        const duration = [new Date(new Date() - diffDate * 24 * 60 * 60 * 1000), new Date()];
        for (let i = 0; i < peopleCount; i++) {
            const talkPerTime = (() => {
                let talks = [];
                for (let t = 0; t < diffDate; t++) {
                    talks.push({
                        date: new Date(Number(duration[0]) + (t * 24 * 60 * 60 * 1000)),
                        count: Math.floor(Math.random() * maxTalkperDay),
                        sum: Math.floor(Math.random() * maxTalkperDay * Math.max(Math.random() * 10, 1))
                    });
                }
                return talks;
            })();
            const person = {
                key: i,
                name: `대화자${i}`,
                data: {
                    total: { count: talkPerTime.reduce((acc, cur) => { acc += cur.count; return acc; }, 0), sum: talkPerTime.reduce((acc, cur) => { acc += cur.sum; return acc; }, 0) },
                    perTime: talkPerTime
                }
            };
            people.push(person);
        }
        return people;
    };

    render() {
        return (
            <Container style={{ backgroundColor: '#303030' }}>
                <TalkFilesContainer addFile={this.props.file} selectFileEvent={this.props.fileChanged} files={this.state.files}></TalkFilesContainer>
            </Container>
        );
    };
};

export default DataViewerTab;