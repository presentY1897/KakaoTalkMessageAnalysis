import { ListGroup, Pagination } from 'react-bootstrap';
import React, { Component } from 'react';

class TalkerList extends Component {
    render() {
        const clickList = (idx) => { this.props.click(idx) };
        const list = this.props.people !== undefined ? this.props.people.map((person, idx) =>
            <Pagination.Item key={idx} active={person.active} onClick={() => {clickList(idx)}}>{person.name}</Pagination.Item>) : [];
        // TODO: Pagination
        return (
            <Pagination size='lg'>{list}</Pagination>
        );
    };
};

export default TalkerList;