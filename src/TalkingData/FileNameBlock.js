import React, { Component } from 'react';

class FileNameBlock extends Component {
    getOnleyFileName = (name) => {
        return name.split('.').concat('.');
    }
    showFileName = () => {
        var text = ''
        if(this.props.text === undefined){
            text = '';
        } else {
            text = this.props.text;
        }
        return text;
    }
    render(){
        return (<p>{this.showFileName()}</p>);
    }
};

export default FileNameBlock;