import { Container, Button, Jumbotron } from 'react-bootstrap';
import React from 'react';
import { Component } from 'react';
import Explanation from './Explanation';

class ExplainTab extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#303030'}}>
                <Jumbotron>
                    <h1> 카카오톡 대화 분석기 </h1>
                    <div>
                        <Button color='primary'></Button>
                        <Explanation></Explanation>
                    </div>
                </Jumbotron>
            </Container>
        );
    }
}

export default ExplainTab;