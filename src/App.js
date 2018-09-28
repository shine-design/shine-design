import React, {Component, Fragment} from 'react';
import {Row, Col, Input, SymbolInput, Icon} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={12}>
                        <Input {...{
                            type:'text'
                        }}/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;
