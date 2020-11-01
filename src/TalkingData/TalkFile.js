import { computeHeadingLevel } from '@testing-library/dom';
import React, { Component } from 'react';
import BarGraph from '../DataChart/BarGraph';
import Analyzer from './Analyzer';
import FileNameBlock from './FileNameBlock';

class TalkFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
    }
  }

  componentDidUpdate(preProps){
    console.log('check');
    if (preProps.file !== this.props.file) {
      const file = this.props.rawFile;
      const analyzer = new Analyzer();
      file.text().then(result => {this.setState({file: analyzer.analyzingRawText(result)})});
    } 
  }

  getFileName = function (file) {
    console.log('name load');
    let result = '';

    if (file !== null) {
      result = file.name;
      //this.setState({file: file.name});
      //file.text().then(result => {this.setState({file: analyzer.analyzingRawText(result)})});
    } else {
      result = '';
    }
    return result;
  }
  render() {
    return (
      <div>
        <FileNameBlock text={this.getFileName(this.props.rawFile)}></FileNameBlock>
        <BarGraph data={this.state.file}></BarGraph>
      </div>
    );
  }
}

export default TalkFile;