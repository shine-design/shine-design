import React, {Component, Fragment} from 'react';
import {Row, Col, Button} from '../libs';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Button {...{
                    color: 'danger',
                    gradient: {
                        from: 'brand',
                        to: 'danger'
                    },
                    isWide: true,
                    isBlock: true,
                    value: 'aa',
                    disabled:true
                }}/>
            </Fragment>
        );
    }
}

export default App;
