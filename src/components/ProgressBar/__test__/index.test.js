import React from 'react';
import {mount} from 'enzyme';
import _ from 'lodash';
import Mock from 'mockjs';
import {classPrefix} from 'variables';
import {Bar, Progress} from 'shineDev';

describe('Progress', () => {

  it('快照测试', () => {
    const wrapper = mount(<Progress><Bar/></Progress>);
    expect(wrapper).toMatchSnapshot();
  });

  it('渲染组件', () => {
    const wrapper = mount(<Progress><Bar/></Progress>);
    expect(wrapper.exists(`.${classPrefix}-progress`));
    expect(wrapper.children().hasClass(`${classPrefix}-progress-bar`));
    expect(wrapper.getDOMNode().classList.length).toEqual(1);
    expect(wrapper.children().getDOMNode().classList.length).toEqual(1);
    wrapper.unmount();
  });

  it('默认属性', () => {
    const components = [Progress, Bar];
    _.forEach(components, Component => {
      const wrapper = mount(<Component/>);
      expect(wrapper.props()).toEqual(Component.defaultProps);
      wrapper.unmount();
    });
  });

  it('组件属性 height', () => {
    const defaultHeight = [_.noop(), '', 'small', 'large', '100px'];
    _.forEach(defaultHeight, height => {
      const wrapper = mount(<Progress height={height}/>);
      switch (height) {
        case _.noop():
        case '':
          expect(!(wrapper.find(`.${classPrefix}-progress`).hasClass(`${classPrefix}-progress-${height}`)));
          break;
        case 'small':
        case 'large':
          expect(wrapper.find(`.${classPrefix}-progress`).hasClass(`${classPrefix}-progress-${height}`));
          break;
        case '100px':
          expect(wrapper.getDOMNode().style.height).toEqual('100px');
          break;
        default:
          expect(false);
      }
      wrapper.unmount();
    });
  });

  it('组件属性 percent', () => {
    const checkCount = Mock.mock('@integer(20, 50)');

    for (let i = 0; i < checkCount; i += 1) {
      const percent = Mock.mock('@integer(-50, 150)');
      let realPercent = percent;
      if (percent < 0) realPercent = 0;
      if (percent > 100) realPercent = 100;
      const wrapper = mount(<Bar percent={percent}/>);
      expect(wrapper.getDOMNode().style.width).toEqual(realPercent + '%');
      wrapper.unmount();
    }
  });

  it('组件属性 format', () => {
    const formatted = Mock.mock('@string("lower",1,10)');
    const mockFunc = percent => (percent + formatted);
    const percent = Mock.mock('@integer(0, 100)');
    const wrapper = mount(<Bar percent={percent} format={mockFunc}/>);
    expect(wrapper.getDOMNode().innerHTML).toEqual(percent + formatted);
    wrapper.unmount();
  });

  it('组件属性 showInfo', () => {
    const percent = Mock.mock('@integer(0, 100)');
    const wrapper = mount(<Bar percent={percent} showInfo={false}/>);
    expect(wrapper.getDOMNode().innerHTML).toEqual("");
    wrapper.unmount();
  });

  it('组件属性 isStriped', () => {
    const wrapper = mount(<Bar isStriped={true}/>);
    expect(wrapper.hasClass(`${classPrefix}-progress-bar-striped`));
    wrapper.unmount();
  });

  it('组件属性 isAnimated', () => {
    const wrapper = mount(<Bar isAnimated={true}/>);
    expect(wrapper.hasClass(`${classPrefix}-progress-bar-striped`));
    expect(wrapper.hasClass(`${classPrefix}-progress-bar-animated`));
    wrapper.unmount();
  });

  it('通用属性 className', () => {
    const components = [Progress, Bar];
    _.forEach(components, Component => {
      const className = Mock.mock('@string("lower",1,100)');
      const wrapper = mount(<Component className={className}/>);
      expect(wrapper.hasClass(`${className}`));
      wrapper.unmount();
    });
  });

  it('通用属性 attributes', () => {
    const components = [Progress, Bar];
    _.forEach(components, Component => {
      const attributes = Mock.mock({
        "string|1-10": Mock.mock('@string("lower")'),
        "number|+1": Mock.mock('@integer()'),
        "boolean|1": Mock.mock('@boolean').toString(),
      });
      const wrapper = mount(<Component attributes={attributes}/>);
      const domNodes = wrapper.getDOMNode();
      _.forOwn(attributes, (value, key) => {
        expect(_.isEqual(domNodes[key], value));
      });
      wrapper.unmount();
    });
  });


});
