import { Button, Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';
import BarGraph from './BarGraph';
import Graph from './Graph';
import TalkerList from './TalkerList';

class TalkDataViewer extends Component {
    render() {
        const name = this.props.file !== undefined ? this.props.file.name : '';
        const people = this.props.file !== undefined ? this.props.file.people : [];
        return (
            <Jumbotron>
                <Button>닫기</Button>
                <h1>{name}</h1>
                <TalkerList people={people}></TalkerList>
                <BarGraph></BarGraph>
                <Graph></Graph>
            </Jumbotron>
        );
    };
};

export default TalkDataViewer;