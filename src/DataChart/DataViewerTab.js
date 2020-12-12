import React, { Component } from 'react';
import TalkFilesContainer from '../TalkingData/TalkFilesContainer';
import { Container } from 'react-bootstrap';
import Analyzer from '../TalkingData/Analyzer';

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
    componentDidUpdate = async (preProps) => {
        if (preProps.addedFile !== this.props.addedFile && this.props.addedFile !== null) {
            const file = this.props.addedFile;
            const analyzer = new Analyzer();
            if (file.name.split('.').pop().toLowerCase() === 'csv') {
                const chunks = await file.text().then(result => analyzer.analyzingRawCsv(result));
                const files = this.state.files;
                files.push(this.dataCreate(chunks, file.name));
                this.setState({
                    files: files
                });
            }
        }
    };
    dataCreate(chunks, name) {
        const personSum = chunks.filter(cur => cur.person.name !== undefined).reduce((acc, cur) => {
            let person = acc.find(item => item.key === cur.person);
            if (person !== undefined) {
                person.chat.push({
                    text: cur.text,
                    time: cur.time
                });
            } else {
                person = {
                    key: cur.person,
                    chat: [{
                        text: cur.text,
                        time: cur.time
                    }],
                };
                acc.push(person);
            }
            return acc;
        }, []);

        const minDate = new Date(Math.min.apply(0, personSum.map(person => Math.min.apply(0, person.chat.map(chat => new Date(chat.time)))).filter(d => isNaN(d) === false)));
        const maxDate = new Date(Math.max.apply(0, personSum.map(person => Math.max.apply(0, person.chat.map(chat => new Date(chat.time)))).filter(d => isNaN(d) === false)));
        const dateDivideIterator = (start, end, step) => {
            let arr = [];
            const startDate = new Date(start);
            const endDate = new Date(end);
            for (let i = startDate; i < endDate; i = new Date(Number(i) + step)) {
                arr.push({ time: [i, new Date(Number(i) + step)], count: 0, sum: 0 });
            }
            return arr;
        }
        const divideCount = 100;
        const timeStep = (maxDate - minDate) / divideCount;//1 * 24 * 60 * 60000;
        const sum = personSum.map(person => {
            person.data = person.chat.reduce((acc, cur) => {
                const curTime = new Date(cur.time);
                const findedTime = acc.find(diff => diff.time[0] <= curTime && diff.time[1] >= curTime);
                if (findedTime !== undefined) {
                    findedTime.count++;
                    findedTime.sum += cur.text.length;
                }
                return acc;
            }, dateDivideIterator(minDate, maxDate, timeStep));
            return person;
        });

        return {
            name: name,
            duration: [minDate, maxDate],
            people: sum.map((person, idx) => {
                return {
                    key: idx,
                    name: person.key.name,
                    data: {
                        total: {
                            count: person.chat.reduce((acc, cur) => { acc += 1; return acc; }, 0),
                            sum: person.chat.reduce((acc, cur) => { acc += cur.length; return acc; }, 0)
                        },
                        perTime: person.data.map(timeTalking => { return { date: timeTalking.time[0], count: timeTalking.count, sum: timeTalking.sum } }),
                    }
                };
            })
        };
    }
    randomDataCreate() {
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