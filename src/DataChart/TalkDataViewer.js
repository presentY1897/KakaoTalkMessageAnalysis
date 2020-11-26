import { Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';
import BarGraph from './BarGraph';
import Graph from './Graph';

class TalkDataViewer extends Component {
    render() {
        const name = this.props.file !== undefined ? this.props.file.name : '';
        return (
            <Jumbotron>
                <h1>{name}</h1>
                <BarGraph></BarGraph>
                <Graph></Graph>
            </Jumbotron>
        )
    }
}

export default TalkDataViewer;