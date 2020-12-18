import React, { Component } from 'react';
import { HorizontalBar } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                datasets: [{
                    label: '# 테스트',
                    data: [10, 20],
                    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                },],
                labels: ['테스트', '테스트2'],
            },
        }
    };
    componentDidUpdate = function (preProps) {
        // if (preProps.data !== this.props.data) {
        //     const sum = this.props.data.reduce((acc, cur) => {
        //         let person = acc.find(item => item.key === cur.person);
        //         if (person !== undefined) {
        //             person.count++;
        //         } else {
        //             person = {
        //                 key: cur.person,
        //                 count: 1,
        //             };
        //             acc.push(person);
        //         }
        //         return acc;
        //     }, []);
        //     this.setState({
        //         data: {
        //             labels: sum.map((item, idx) => {
        //                 const _name = item.key.name;
        //                 if (_name === undefined) return `${idx}`;
        //                 else return `${_name}`;
        //             }).sort((a, b) => a.count > b.count),
        //             datasets: [{
        //                 data: sum.map(item => item.count).sort((a, b) => a.count > b.count),
        //                 backgroundColor: ["#11b288", "#207ac7", "#207ac7", "#207ac7", "#d6d6d6", "#d6d6d6", "#d6d6d6", "#d6d6d6"],
        //             }]
        //         }
        //     });
        // };
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
            }
        };

        const containerCss = {
            margin: '0 auto'
        }
        return (
            <div style={containerCss}>
                <HorizontalBar data={this.props.data} options={options}></HorizontalBar>
            </div>
        );
    };
}

export default BarGraph;