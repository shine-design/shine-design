import React, {Component, Fragment} from 'react';
import {Row, Col, Form, Input} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={12}>
                        <Form>
                            <Input {...{
                                label:'Email address',
                                type:'email',
                                placeholder:'Email address',
                                helper:'We\'ll never share your email with anyone else.'
                            }}/>
                        </Form>
                    </Col>
                </Row>

            </Fragment>
        );
    }
}

export default App;
