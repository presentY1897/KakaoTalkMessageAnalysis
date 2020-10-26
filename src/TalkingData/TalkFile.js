import React, { Component } from 'react';
import FileNameBlock from './FileNameBlock';

class TalkFile extends Component {
  getFileName = function(){
    let result = '';
    if(this.props.rawFile !== null){
      result = this.props.rawFile.name;
    } else {
      // file is loaded
      result = ''
    }
    return result;
  }
  render(){
    return (
      <div>
        <FileNameBlock text={this.getFileName()}></FileNameBlock>
      </div>
    );
  }
}

export default TalkFile;