import React from 'react';
// import {Enzyme} from 'tests/setup';
import {shallow} from 'enzyme';
import Row from '../index';


describe('Row', () => {
  it('是否正常渲染组件', () => {
    const wrapper = shallow(<Row>Follow</Row>);
    expect(wrapper).toMatchSnapshot();
  });
});
