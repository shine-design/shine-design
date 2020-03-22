import React from 'react';
import {mount} from 'enzyme';
import _ from 'lodash';
import Mock from 'mockjs';
import {classPrefix} from 'variables';
import {Col, Row} from 'shineDev';

describe('Progress', () => {

  it('快照测试', () => {
    const wrapper = mount(<Row><Col /></Row>);
    expect(wrapper).toMatchSnapshot();
  });

  it('渲染组件 Row', () => {
    const wrapper = mount(<Row />);
    const {justify, align} = wrapper.props;
    expect(wrapper.hasClass(`${classPrefix}-row`));
    expect(wrapper.hasClass(`${classPrefix}-row--root`));
    if (!_.isUndefined(justify)) expect(wrapper.hasClass(`${classPrefix}-row--justify-${justify}`));
    if (_.isUndefined(align)) expect(wrapper.hasClass(`${classPrefix}-row--align-${align}`));
    expect(wrapper.getDOMNode().classList.length).toEqual(2 + _.isUndefined(justify) + _.isUndefined(align));
    wrapper.unmount();
  });

  it('渲染组件 Col', () => {
    const wrapper = mount(<Col />);
    expect(wrapper.hasClass(`${classPrefix}-col-auto`));
    expect(wrapper.getDOMNode().classList.length).toEqual(1);
    wrapper.unmount();
  });

  it('默认属性', () => {
    const components = [Row, Col];
    _.forEach(components, Component => {
      const wrapper = mount(<Component />);
      expect(wrapper.props()).toEqual(Component.defaultProps);
      wrapper.unmount();
    });
  });

  it('组件属性 justify', () => {
    const justify = [_.noop(), 'start', 'end', 'center', 'space-around', 'space-between'];
    _.forEach(justify, item => {
      const wrapper = mount(<Row justify={item} />);
      if (_.isUndefined(item)) {
        expect(!(wrapper.hasClass(`${classPrefix}-row--justify-${item}`)));
      } else {
        expect(wrapper.hasClass(`${classPrefix}-row--justify-${item}`));
      }
      wrapper.unmount();
    });
  });

  it('组件属性 align', () => {
    const align = [_.noop(), 'top', 'middle', 'bottom'];
    _.forEach(align, item => {
      const wrapper = mount(<Row align={item} />);
      if (_.isUndefined(item)) {
        expect(!(wrapper.hasClass(`${classPrefix}-row--justify-${item}`)));
      } else {
        expect(wrapper.hasClass(`${classPrefix}-row--justify-${item}`));
      }
      wrapper.unmount();
    });
  });


  it('组件属性 col、offset、order', () => {
    const checkType = ['col', 'offset', 'order'];
    _.forEach(checkType, type => {
      const waitCheckList = [Mock.mock('@integer(1, 24)'), {
        default: Mock.mock('@integer(1, 24)'),
        sm: Mock.mock('@integer(1, 24)'),
        md: Mock.mock('@integer(1, 24)'),
        lg: Mock.mock('@integer(1, 24)'),
        xxl: Mock.mock('@integer(1, 24)'),
        xxxl: Mock.mock('@integer(1, 24)'),
      }];

      _.forEach(waitCheckList, check => {
        const props = {[type]: check};
        const wrapper = mount(<Col {...props} />);
        if (_.isString(check) || _.isNumber(check)) {
          expect(wrapper.hasClass(`${classPrefix}-${type}-${check}`));
        } else {
          _.forOwn(check, (value, key) => {
            expect(wrapper.hasClass(_.isEqual(key, 'default') ? `${classPrefix}-${type}-${value}` : `${classPrefix}-${type}-${key}-${value}`));
          });
        }
        wrapper.unmount();
      });
    });
  });

  it('通用属性 className', () => {
    const components = [Row, Col];
    _.forEach(components, Component => {
      const className = Mock.mock('@string("lower",1,100)');
      const wrapper = mount(<Component className={className} />);
      expect(wrapper.hasClass(`${className}`));
      wrapper.unmount();
    });
  });

  it('通用属性 attributes', () => {
    const components = [Row, Col];
    _.forEach(components, Component => {
      const attributes = Mock.mock({
        "string|1-10": Mock.mock('@string("lower")'),
        "number|+1": Mock.mock('@integer()'),
        "boolean|1": Mock.mock('@boolean').toString(),
      });
      const wrapper = mount(<Component attributes={attributes} />);
      const domNodes = wrapper.getDOMNode();
      _.forOwn(attributes, (value, key) => {
        expect(_.isEqual(domNodes[key], value));
      });
      wrapper.unmount();
    });
  });


});
