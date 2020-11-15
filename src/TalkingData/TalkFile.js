import React, { Component } from 'react';
import BarGraph from '../DataChart/BarGraph';
import Graph from '../DataChart/Graph';
import Analyzer from './Analyzer';
import FileNameBlock from './FileNameBlock';
import Summary from './Summary';

class TalkFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
      summaryDisplay: false,
    }
  }

  componentDidUpdate(preProps){
    if (preProps.rawFile !== this.props.rawFile && this.props.rawFile !== undefined && this.props.rawFile !== null) {
      const file = this.props.rawFile;
      file.text().then(result => {this.setState({summaryDisplay: true, name: file.name, file: new Analyzer().analyzingRawText(result)})});
    } 
  }

  getFileName = function (file) {
    let result = '';

    if (file !== null && file !== undefined) {
      result = file.name;
    } else {
      result = '';
    }
    return result;
  }

  render() {
    return (
      <div>
        <Summary show={this.state.summaryDisplay} name={this.state.name}></Summary>
        <FileNameBlock text={this.getFileName(this.props.rawFile)}></FileNameBlock>
        <BarGraph data={this.state.file}></BarGraph>
        <Graph data={this.state.file}></Graph>
      </div>
    );
  }
}

export default TalkFile;