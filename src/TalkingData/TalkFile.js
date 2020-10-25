import React, { Component } from 'react';

class TalkFile extends Component {
  render(){
    return (
      <div>
        <p>{this.props.rawFile === null ? '없음' : this.props.rawFile.name}</p>
      </div>
    );
  }
}

export default TalkFile;