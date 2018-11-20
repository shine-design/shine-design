import React, {Component, Fragment} from 'react';
import {Row, Col} from '../libs';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={6} offset={3}>
                        <p>欢迎使用 Shine Design ！</p>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;