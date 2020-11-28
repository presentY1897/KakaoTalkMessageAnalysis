import { ListGroup } from 'react-bootstrap';
import React, { Component } from 'react';

class TalkerList extends Component {
    render() {
        return (
            <ListGroup horizontal>{
                this.props.people !== undefined ? this.props.people.map(person => <ListGroup.Item active>{person.name}</ListGroup.Item>) : ''
            }</ListGroup>
        );
    };
};

export default TalkerList;