import { Button, Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';
import BarGraph from './BarGraph';
import Graph from './Graph';
import TalkerList from './TalkerList';

class TalkDataViewer extends Component {
    render() {
        const name = this.props.file !== undefined ? this.props.file.name : '';
        const people = this.props.file !== undefined ? this.props.file.people : [];
        const getDurationString = (dur) => {
            const startDate = new Date(dur[0]);
            const endDate = new Date(dur[1]);
            return `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()} ~ ${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
        }
        const durationStr = this.props.file !== undefined ? getDurationString(this.props.file.duration) : '';
        const getColor = () => Math.random() * 255;
        const peopleColor = this.props.file !== undefined ? this.props.file.people.map(() => `rgba(${getColor()}, ${getColor()}, ${getColor()}, 0.4)`) : [];
        const createBarGraphData = () => {
            return {
                datasets: [{
                    data: this.props.file.people.map(person => person.data.total.count),
                    backgroundColor: peopleColor,
                }],
                labels: this.props.file.people.map(person => person.name)
            };
        }
        const barData = this.props.file !== undefined ? createBarGraphData() : undefined;
        const createLineGraphData = () => {
            return {
                datasets: this.props.file.people.map((person, idx) => {
                    return {
                    label: person.name,
                    data: person.data.perTime.map(talk => talk.count),
                    fill: false,
                    backgroundColor: peopleColor[idx],
                    }
                }),
                labels: this.props.file.people[0].data.perTime.map(talk => `${talk.date.getFullYear()}-${talk.date.getMonth()}-${talk.date.getDate()}` )
            };
        }
        const lineData = this.props.file !== undefined ? createLineGraphData() : '';
        return (
            <Jumbotron>
                <Button onClick={this.props.click}>닫기</Button>
                <h1>{name}</h1>
                <h3>기간 : {durationStr}</h3>
                <TalkerList people={people}></TalkerList>
                <BarGraph data={barData}></BarGraph>
                <Graph data={lineData}></Graph>
            </Jumbotron>
        );
    };
};

export default TalkDataViewer;