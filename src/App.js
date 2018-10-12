import React, {Component, Fragment} from 'react';
import {Row, Col, Tooltip, Button} from '../libs';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={6} offset={3}>
                        <p>欢迎使用 Shine Design ！</p>
                        <Tooltip {...{
                            title: 'This is a title <b>aaa</b>',
                            isHtml: true,
                            placement: "top",
                            onBeforeOpen:()=>{
                                alert('aaa')
                            },
                            onOpened:()=>{
                                alert('bb')
                            },
                            onBeforeClose:()=>{
                                alert('cc')
                            },
                            onClosed:()=>{
                                alert('dd')
                            }
                        }}>
                            <Button {...{
                                value: 'Tooltip',
                                color: 'brand'
                            }}/>
                        </Tooltip>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;