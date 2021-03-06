import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Summary extends Component {
    render() {
        const getDurationString = (dur) => {
            const startDate = new Date(dur[0]);
            const endDate = new Date(dur[1]);
            return `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()} ~ ${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
        }
        const getPeopleNameString = (people) => {
            return people.map(person => person.name).join(',');
        }
        return (
            <Container>
                <h3 component='h3' varient='h3'>{this.props.name}</h3>
                <h5 variant="subtitle1" color="textSecondary">기간 : {getDurationString(this.props.duration)}</h5>
                <h5 variant="subtitle1" color="textSecondary">참여자: {getPeopleNameString(this.props.people)}</h5>
            </Container>
        );
    }
}

export default Summary;