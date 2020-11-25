import { Container } from 'react-bootstrap';
import React, { Component } from 'react';

class TalkDataViewer extends Component {
    render() {
        return (
            <Container>
                <h1>{this.props.name}</h1>
            </Container>
        )
    }
}

export default TalkDataViewer;