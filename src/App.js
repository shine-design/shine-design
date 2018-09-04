import React, {Component, Fragment} from 'react';
import {Alert} from '../libs';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Alert {...{
                    color: 'success',
                    title: 'titleTest',
                    message: 'test'
                }}/>
            </Fragment>
        );
    }
}

export default App;
