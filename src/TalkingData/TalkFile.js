import React, { Component } from 'react';
import Summary from './Summary';
import { Card } from 'react-bootstrap'

class TalkFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.rawFile,
      name: this.getFileName(this.props.rawFile),
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

  cardClickEvent = () => {
    this.props.clickEvent(this.state.file);
  }

  render() {
    return (
      <Card onClick={this.cardClickEvent}>
        <div>
          <Summary name={this.props.rawFile.name} duration={this.props.rawFile.duration} people={this.props.rawFile.people}></Summary>
        </div>
      </Card>
    );
  }
}

export default TalkFile;