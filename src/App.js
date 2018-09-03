import React, {Component, Fragment} from 'react';
import {Icon} from '../dist';
import '../dist/index.css'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Icon className={['sh-icon-home', 'sh-icon-2x']}/>
            </Fragment>
        );
    }
}

export default App;
