import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                datasets: [{
                    label: '# 테스트',
                    data: [10, 20],
                    borderWidth: 1,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                },],
                labels: ['테스트', '테스트2'],
            },
        }
    };
    componentDidUpdate = function (preProps) {
        if (preProps.data !== this.props.data) {
            console.log('change data');
            const sum = this.props.data.reduce((acc, cur) => {
                let person = acc.find(item => item.key === cur.person);
                if (person !== undefined) {
                    person.count++;
                } else {
                    person = {
                        key: cur.person,
                        count: 1,
                    };
                    acc.push(person);
                }
                return acc;
            }, []);
            this.setState({
                data: {
                    labels: sum.map((item, idx) => {
                        const _name = item.key.name;
                        if (_name === undefined) return `${idx}`;
                        else return `${_name}`;
                    }),
                    datasets: [{
                        data: sum.map(item => item.count),
                        backgroundColor: ["#11b288", "#207ac7", "#207ac7", "#207ac7", "#d6d6d6", "#d6d6d6", "#d6d6d6", "#d6d6d6"],
                        borderWidth: 1,
                    }]
                }
            });
        };
    };

    render() {
        return (
            <Bar data={this.state.data}></Bar>
        );
    };
}

export default BarGraph;