import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                datasets: [{
                    label: '# 테스트',
                    data: [10, 20],
                    fill: false,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                }, {
                    label: '테스트2',
                    data: [20, 120],
                    fill: false,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                }],
                labels: ['0', '1'],
            },
        }
    };
    componentDidUpdate = function (preProps) {
        if (preProps.data !== this.props.data) {
            const personSum = this.props.data.reduce((acc, cur) => {
                let person = acc.find(item => item.key === cur.person);
                if (person !== undefined) {
                    person.chat.push({
                        text: cur.text,
                        time: cur.time
                    });
                } else {
                    person = {
                        key: cur.person,
                        chat: [{
                            text: cur.text,
                            time: cur.time
                        }],
                    };
                    acc.push(person);
                }
                return acc;
            }, []);
            const minDate = new Date(Math.min.apply(0, personSum.map(person => Math.min.apply(0, person.chat.map(chat => new Date(chat.time)))).filter(d => isNaN(d) === false)));
            const maxDate = new Date(Math.max.apply(0, personSum.map(person => Math.max.apply(0, person.chat.map(chat => new Date(chat.time)))).filter(d => isNaN(d) === false)));
            const dateDivideIterator = (start, end, step) => {
                let arr = [];
                const startDate = new Date(start);
                const endDate = new Date(end);
                for (let i = startDate; i < endDate; i = new Date(Number(i) + step)) {
                    arr.push({ time: [i, new Date(Number(i) + step)], count: 0 });
                }
                return arr;
            }
            const timeStep = 1 * 24 * 60 * 60000;
            const sum = personSum.map(person => {
                person.data = person.chat.reduce((acc, cur) => {
                    const curTime = new Date(cur.time);
                    const findedTime = acc.find(diff => diff.time[0] <= curTime && diff.time[1] >= curTime);
                    if (findedTime !== undefined) findedTime.count++;
                    return acc;
                }, dateDivideIterator(minDate, maxDate, timeStep));

                return person;
            });
            this.setState({
                data: {
                    labels: dateDivideIterator(minDate, maxDate, timeStep).map((d, idx) => { const time = d.time[0]; return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}` }),
                    datasets:
                        sum.map((person, idx) => {
                            const _name = person.key.name;
                            let name = `${_name}`;
                            if (_name === undefined) name = `${idx}`;
                            return {
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                data: person.data.map(p => p.count),
                                fill: false,
                                label: name,
                            }
                        })

                }
            });
        };
    };

    render() {
        const options = {
            legend: {
                display: false, // label 숨기기
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                        stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
                    }
                }]
            },
            maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        };

        const containerCss = {
            margin: '0 auto'
        }
        return (
            <div style={containerCss} >
                <Line data={this.state.data} options={options} > </Line>
            </div>
        );
    };
}

export default BarGraph;