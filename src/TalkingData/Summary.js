import { CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class Summary extends Component {

    render() {
        if (this.props.show)
            return (
                <CardContent>
                    <Typography component='h3' varient='h3'>{this.props.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">기간 : {this.props.duration}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">참여자: {this.props.people}</Typography>
                </CardContent>
            );
        else
            return <div></div>;
    }
}

export default Summary;