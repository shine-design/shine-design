import React, {Component, Fragment} from 'react';
import {Row, Col, Button, Group} from '../libs';

// import '../dist/index.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div style={{width: '300px'}}>
                    <Group {...{
                        size:'lg'
                    }}>
                        <Button {...{
                            color: 'primary',
                            value: 'left'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'middle'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'right'
                        }}/>
                    </Group>
                    <Group {...{
                        size:'lg'
                    }}>
                        <Button {...{
                            color: 'primary',
                            value: 'left'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'middle'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'right'
                        }}/>
                    </Group>
                    <Group {...{
                        size:'sm'
                    }}>
                        <Button {...{
                            color: 'primary',
                            value: 'left'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'middle'
                        }}/>
                        <Button {...{
                            color: 'primary',
                            value: 'right'
                        }}/>
                    </Group>
                </div>

            </Fragment>
        );
    }
}

export default App;
