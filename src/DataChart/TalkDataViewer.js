import { Container, Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';

class TalkDataViewer extends Component {
    render() {
        const name = this.props.file !== undefined ? this.props.file.name : '';
        return (
            <Jumbotron>
                <h1>{name}</h1>
            </Jumbotron>
        )
    }
}

export default TalkDataViewer;