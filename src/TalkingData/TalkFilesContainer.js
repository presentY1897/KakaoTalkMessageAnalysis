import { GridList, GridListTile } from '@material-ui/core';
import React, { Component } from 'react';
import TalkFile from './TalkFile';

class TalkFileContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  componentDidUpdate(preProps) {
    if (preProps !== this.props && this.props.addFile !== undefined) {
      console.log('check');
      const addedFiles = this.state.files;
      addedFiles.push(this.props.addFile);
      this.setState({ files: addedFiles });
      console.log(this.state.files);
    }
  }

  render() {
    return (
      <div>
        <GridList>
          {this.state.files.map((file, idx) => 
          <GridListTile key={idx} >
            <TalkFile rawFile={file}></TalkFile>
          </GridListTile>
          )}
        </GridList>
      </div>
    );
  }
}

export default TalkFileContainers;