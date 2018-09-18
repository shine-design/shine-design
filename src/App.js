import React, {Component, Fragment} from 'react';
import {Row, Col, Button, Group} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div style={{width: '300px'}}>
                    <Group {...{
                        size: 'lg',
                        direction: 'ver'
                    }}>
                        <Button {...{
                            color: 'secondary',
                            value: 'button'
                        }}/>
                        <Button {...{
                            color: 'secondary',
                            value: 'button'
                        }}/>
                        <Button {...{
                            color: 'secondary',
                            value: 'button'
                        }}/>
                    </Group>
                </div>
            </Fragment>
        );
    }
}

export default App;
