import React, { Component } from 'react';
import Summary from './Summary';
import Card from '@material-ui/core/Card'

class TalkFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.rawFile,
      name: this.props.rawFile.name,
    };
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
      <Card>
        <div>
          <Summary name={this.props.rawFile.name}></Summary>
        </div>
      </Card>
    );
  }
}

export default TalkFile;