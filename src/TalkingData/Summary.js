import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Summary extends Component {
    render() {
        return (
            <Container>
                <h3 component='h3' varient='h3'>{this.props.name}</h3>
                <h4 variant="subtitle1" color="textSecondary">기간 : {this.props.duration}</h4>
                <h4 variant="subtitle1" color="textSecondary">참여자: {this.props.people}</h4>
            </Container>
        );
    }
}

export default Summary;