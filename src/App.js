import React, {Component, Fragment} from 'react';
import {Row, Col, Input, SymbolInput, Icon} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={12}>
                        <h1>Hello World</h1>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;