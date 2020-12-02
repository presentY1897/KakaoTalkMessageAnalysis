import { ListGroup, Pagination } from 'react-bootstrap';
import React, { Component } from 'react';

class TalkerList extends Component {
    render() {
        const list = this.props.people !== undefined ? this.props.people.map(person => <ListGroup.Item active>{person.name}</ListGroup.Item>) : [];
        // TODO: Pagination
        return (
            <Pagination size='lg'>{list}</Pagination>
        );
    };
};

export default TalkerList;