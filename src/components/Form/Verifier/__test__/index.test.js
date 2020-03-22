import React from 'react';
import {mount} from 'enzyme';
import {classPrefix} from 'variables';
import {Form} from 'shineDev';

const {Verifier} = Form;

describe('Verifier', () => {

  it('快照测试', () => {
    const wrapper = mount(<Verifier />);
    expect(wrapper).toMatchSnapshot();
  });

  it('渲染组件', () => {
    const wrapper = mount(<Verifier />);
    expect(wrapper.exists(`.${classPrefix}-form-control`));
    wrapper.unmount();
  });

});
