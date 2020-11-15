import React, { Component } from 'react';

class Summary extends Component {

    render() {
        if (this.props.show)
            return (
                <div>
                    <h3 className='name'>{this.props.name}</h3>
                    <h4 className='duration'>기간 : {this.props.duration}</h4>
                    <h4 className='people'>참여자: {this.props.people}</h4>
                </div>
            );
        else
            return <div></div>;
    }
}

export default Summary;