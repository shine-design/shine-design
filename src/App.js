import React, {Component, Fragment} from 'react';
import {Button} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={12}>
                        <h1>Welcome to Shine Design.</h1>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;
