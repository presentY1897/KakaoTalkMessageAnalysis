import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null,};
    };
    getBarData = function () {
        let dataset = {
            data: [],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
        };
        let labels = [];
        let data = {
            labels: labels,
            dataset: [dataset],
        };

        if (this.props.data !== null && this.props.data !== this.state.data) {
            this.setState({
                data: this.props.data,
            });
            const sum =this.props.data.reduce((acc, cur) => {
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
            dataset.data = sum.map(item => item.count);
            data.labels = sum.map((item, idx) => {
                const _name = item.key.name;
                if(_name === undefined) return `#${idx}`;
                else return `#${_name}`;
            });
        };
        return data;
    };

    render() {
        return (
            <div>
                <Bar data={this.getBarData()}></Bar>
            </div>
        );
    };
}

export default BarGraph;