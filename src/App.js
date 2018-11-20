import React, {Component, Fragment} from 'react';
import {Row, Col, Tooltip, Button, Form, Input, DatePicker} from '../libs';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col part={6} offset={3}>
                        <p>欢迎使用 Shine Design ！</p>
                        <Form {...{
                            validate: {
                            }
                        }}>
                            <Input {...{
                                label: '普通文本',
                                type: 'text',
                                placeholder: '请输入内容',
                                name: 'testA',
                                validate: {
                                    required: true,
                                    minlength: 5
                                }
                            }}/>
                            <Input {...{
                                label: '密码文本',
                                type: 'password',
                                placeholder: '请输入密码',
                                name: 'testB'
                            }}/>
                            <Input {...{
                                label: 'Email',
                                type: 'email',
                                placeholder: '请输入电子邮箱',
                                defaultValue: 'aaa',
                                name: 'testC',
                                validate: {
                                    email: true
                                }
                            }}/>
                            <Input {...{
                                label: '数字文本',
                                type: 'number',
                                placeholder: '请输入数字',
                                defaultValue: '1',
                                name: 'testD',
                                validate: {
                                    min: 10
                                }
                            }}/>
                            <Input {...{
                                label: '网址文本',
                                type: 'url',
                                placeholder: '请输入网址',
                                name: 'testE',
                                validate: {
                                    required: {
                                        value: true,
                                        message: '测试失败消息'
                                    },
                                    url: true
                                }
                            }}/>
                            <Input {...{
                                label: '多行文本',
                                type: 'textarea',
                                placeholder: '请输入文本内容',
                                attributes: {
                                    rows: 3
                                },
                                name: 'testF',
                                validate: {
                                    minlength: {
                                        value: 10,
                                        message: 'aaa'
                                    }
                                }
                            }}/>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default App;