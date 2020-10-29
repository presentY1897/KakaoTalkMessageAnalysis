import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null,};
    };
    getBarData = function () {
        let dataset = {
            label: '#사람별 대화량',
            data: [],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
        };
        let data = {
            dataset: [dataset]
        };

        if (this.props.data !== null && this.props.data !== this.state.data) {
            this.setState({
                data: this.props.data,
            });
            dataset.data = this.props.data.reduce((acc, cur) => {
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
            }, []).map(item => item.count);
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