import { Button, Jumbotron } from 'react-bootstrap';
import React, { Component } from 'react';
import BarGraph from './BarGraph';
import Graph from './Graph';
import TalkerList from './TalkerList';

class TalkDataViewer extends Component {
    state = {
        barData: { datasets: [], labels: [] },
        lineData: { datasets: [], labels: [] },
        people: [],
        peopleColor: [],
    };
    createBarGraphData() {
        return {
            datasets: [{
                data: this.props.file.people.filter(person => person.active).map(person => person.data.total.count),
                backgroundColor: this.state.peopleColor,
            }],
            labels: this.props.file.people.filter(person => person.active).map(person => person.name)
        };
    };
    createLineGraphData() {
        return {
            datasets: this.props.file.people.filter(person => person.active).map((person, idx) => {
                return {
                    label: person.name,
                    data: person.data.perTime.map(talk => talk.count),
                    fill: false,
                    backgroundColor: this.state.peopleColor[idx],
                }
            }),
            labels: this.props.file.people[0].data.perTime.map(talk => `${talk.date.getFullYear()}-${talk.date.getMonth()}-${talk.date.getDate()}`)
        };
    };
    togglePerson(key) {
        const people = this.state.people;
        this.setState({ people: people.map((person, idx) => { if (idx === key) person.active = !person.active; return person }) });
        const refreshDataChangedPerson = () => {
            this.setState({
                barData: this.props.file !== undefined ? this.createBarGraphData() : { datasets: [], labels: [] },
                lineData: this.props.file !== undefined ? this.createLineGraphData() : { datasets: [], labels: [] }
            });
        }
        refreshDataChangedPerson();
    };
    componentDidUpdate(preProps) {
        if (preProps.file !== this.props.file) {
            this.setState({ people: this.props.file !== undefined ? this.props.file.people.map(person => { person.active = true; return person }) : [] });
            const getColor = () => Math.random() * 255;
            this.setState({ peopleColor: this.props.file !== undefined ? this.props.file.people.map(() => `rgba(${getColor()}, ${getColor()}, ${getColor()}, 0.4)`) : [] });
            this.setState({ barData: this.props.file !== undefined ? this.createBarGraphData() : { datasets: [], labels: [] } });
            this.setState({ lineData: this.props.file !== undefined ? this.createLineGraphData() : { datasets: [], labels: [] } });
        }
    }

    render() {
        const name = this.props.file !== undefined ? this.props.file.name : '';
        const getDurationString = (dur) => {
            const startDate = new Date(dur[0]);
            const endDate = new Date(dur[1]);
            return `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()} ~ ${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
        };
        const durationStr = this.props.file !== undefined ? getDurationString(this.props.file.duration) : '';
        return (
            <Jumbotron>
                <Button onClick={this.props.click}>닫기</Button>
                <h1>{name}</h1>
                <h3>기간 : {durationStr}</h3>
                <TalkerList people={this.state.people} click={this.togglePerson.bind(this)}></TalkerList>
                <BarGraph data={this.state.barData}></BarGraph>
                <Graph data={this.state.lineData}></Graph>
            </Jumbotron>
        );
    };
};

export default TalkDataViewer;