import React, {Component, Fragment} from 'react';
import {Row, Col, Tooltip, Button, Form, Input, DatePicker} from '../libs';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={6} offset={3}>
                        <p>欢迎使用 Shine Design ！</p>
                        <Form>
                            <DatePicker {...{
                                orientation: 'bottom left',
                                todayHighlight: true,
                                todayBtn: true,
                                clearBtn: true

                            }}>
                                <Input {...{
                                    label: '普通文本',
                                    type: 'text',
                                    placeholder: '请输入内容',
                                    defaultValue: '欢迎使用Shine'
                                }}/>
                            </DatePicker>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;