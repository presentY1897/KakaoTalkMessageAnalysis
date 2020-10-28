import React, { Component } from 'react';
import Analyzer from './Analyzer';
import FileNameBlock from './FileNameBlock';

class TalkFile extends Component {
  talkData = null;

  getFileName = function () {
    let result = '';
    const analyzer = new Analyzer();

    if (this.props.rawFile !== null) {
      result = this.props.rawFile.name;
      this.talkData = this.props.rawFile.text().then(result => analyzer.analyzingRawText(result));
    } else {
      result = '';
    }
    return result;
  }
  render() {
    return (
      <div>
        <FileNameBlock text={this.getFileName()}></FileNameBlock>
      </div>
    );
  }
}

export default TalkFile;