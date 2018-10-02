import React, {Component, Fragment} from 'react';
import {Row, Col, Alert, Button} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={6} offset={3}>
                        <Alert {...{
                            title: 'Brand!',
                            message: 'You successfully read this important alert message.',
                            color: "success",
                            isCloseable: true,
                            iconName: 'sh-icon-home',
                            alertStyle: "pill",
                            isAir: true,
                            actions: [<Button {...{
                                color: 'brand',
                                value: 'Fix',
                                btnStyle: 'pill',
                                isWide: true
                            }}/>, <Button {...{
                                color: 'danger',
                                value: 'Dismiss',
                                btnStyle: 'pill',
                                isWide: true,
                                attributes: {
                                    'data-dismiss': 'alert',
                                    'aria-label': 'Close'
                                }
                            }}/>]
                        }}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;