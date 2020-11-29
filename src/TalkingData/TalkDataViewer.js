import { Button, Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';
import BarGraph from '../DataChart/BarGraph';
import Graph from '../DataChart/Graph';
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
        return (
            <Jumbotron>
                <Button onClick={this.props.click}>닫기</Button>
                <h1>{name}</h1>
                <h3>기간 : {durationStr}</h3>
                <TalkerList people={people}></TalkerList>
                <BarGraph></BarGraph>
                <Graph></Graph>
            </Jumbotron>
        );
    };
};

export default TalkDataViewer;