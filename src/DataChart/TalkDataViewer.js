import { Container, Typography, Fade } from '@material-ui/core';
import React, { Component } from 'react';

class TalkDataViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false
        }
    }
    componentDidUpdate = (preProps) =>  {
        if (preProps.selectedFile !== this.props.selectedFile) {
            this.setState({fadeIn: true})
        }
    }
    render() {
        return (
            <Fade in={this.state.fadeIn}>
            <Container maxWidth='xl'>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
            </Fade>
        )
    }
}

export default TalkDataViewer;