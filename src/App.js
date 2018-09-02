import React, {Component, Fragment} from 'react';
import '../libs';
import {Row, Col} from '../libs';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row {...{
                    justify: 'center',
                    wrap: 'nowrap',
                    align: 'center',
                    alignContent: 'flex-start',
                    root: true,
                    className: ['test', 'test2']
                }}>
                    <Col order={3} part={['md-1', 'sm-2']} className='test' offset={2}>col-1</Col>
                    <Col order={3} part='md-6'>
                        <i className='sh-icon-home'/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;
