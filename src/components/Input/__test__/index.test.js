import _ from 'lodash';
import React from 'react';
import {mount} from 'enzyme';
import {classPrefix} from 'variables';
import {Input} from 'shineDev';
import Mock from 'mockjs';

const checkProps = (propName, enumList) => {
  const propsValue = enumList || Mock.mock('@string("lower")');
  const props = {[propName]: propsValue};
  const wrapper = mount(<Input {...props} />);
  const domNodes = wrapper.getDOMNode();
  expect(domNodes[propName]).toEqual(propsValue);
  wrapper.unmount();
};

describe('Input', () => {

  it('快照测试', () => {
    const wrapper = mount(<Input/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('渲染组件', () => {
    const wrapper = mount(<Input/>);
    expect(wrapper.exists(`.${classPrefix}-form-control`));
    wrapper.unmount();
  });

  it('默认属性', () => {
    const wrapper = mount(<Input/>);
    expect(wrapper.props()).toEqual(Input.defaultProps);
    wrapper.unmount();
  });

  it('原始 input 字符串属性', () => {
    const propNames = ['defaultValue', 'value', 'placeholder', 'id', 'name'];
    _.forEach(propNames, names => checkProps(names));
  });

  it('组件属性 isDisabled,isReadOnly', () => {
    const wrapper = mount(<Input isDisabled={true} isReadOnly={true}/>);
    const domNodes = wrapper.getDOMNode();
    expect(domNodes.disabled).toEqual(true);
    expect(domNodes.readOnly).toEqual(true);
    wrapper.unmount();
  });

  it('组件属性 type', () => {
    const typeList = ['text', 'number', 'password', 'email', 'url'];
    _.forEach(typeList, type => checkProps('type', type));
  });

  it('组件属性 size', () => {
    const sizeList = ['default', 'small', 'large'];
    _.forEach(sizeList, size => {
      const wrapper = mount(<Input size={size}/>);
      expect(wrapper.hasClass(`${classPrefix}-form-control-${size}`));
      wrapper.unmount();
    });
  });

  it('组件属性 inputStyle', () => {
    const styleList = ['default', 'pill', 'square'];
    _.forEach(styleList, style => {
      const wrapper = mount(<Input inputStyle={style}/>);
      expect(wrapper.hasClass(`${classPrefix}-form-control--${style}`));
      wrapper.unmount();
    });
  });

  it('通用属性 className', () => {
    const className = Mock.mock('@string("lower",1,100)');
    const wrapper = mount(<Input className={className}/>);
    expect(wrapper.hasClass(`${className}`));
    wrapper.unmount();
  });

  it('通用属性 attributes', () => {
    const attributes = Mock.mock({
      "string|1-10": Mock.mock('@string("lower")'),
      "number|+1": Mock.mock('@integer()'),
      "boolean|1": Mock.mock('@boolean').toString(),
    });
    const wrapper = mount(<Input attributes={attributes}/>);
    const domNodes = wrapper.getDOMNode();
    _.forOwn(attributes, (value, key) => {
      expect(_.isEqual(domNodes[key], value));
    });
    wrapper.unmount();
  });

});
