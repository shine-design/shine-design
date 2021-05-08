/**
 * @File Demo Test
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 14:26:08
 */
import React from 'react'
import Button from '../index';
import Enzyme from '../../../utils/jest.setup';
import toJson from 'enzyme-to-json';

const { render } = Enzyme;

describe('Button测试', () => {
    it('Example组件中按钮的名字为text的值', () => {
        const button = render(<Button>button</Button>);
        expect(toJson(button)).toMatchSnapshot();
    })
});