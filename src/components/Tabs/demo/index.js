/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Tabs, Divider} from 'shineDev';
import React, {Component} from "react";

const components = {Tabs, Divider};
export default {
  basic: {
    components,
    jsx:
      `<div className="shine-tabs-helper">
  <Tabs
    tabConfig={[
        {label: '标签一', value: 1},
        {label: '标签二', value: 2},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            }
        },
        {label: '禁用标签', value: 3, disabled: true}
    ]}
  />
</div>`,
  },
  pill: {
    components,
    jsx:
      `<div className="shine-tabs-helper">
  <Tabs
    isPill
    tabConfig={[
        {label: '标签一', value: 1},
        {label: '标签二', value: 2},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            }
        },
        {label: '禁用标签', value: 3, disabled: true}
    ]}
  />
</div>`,
  },
  icon: {
    components,
    jsx:
      `<div className="shine-tabs-helper">
  <Divider message="基础样式"/>
  <Tabs
    tabConfig={[
        {label: '标签一', value: 1, iconName: 'exclamation-triangle', iconProps: {source: 'line-awesome'}},
        {label: '标签二', value: 2, iconName: 'puzzle-piece', iconProps: {source: 'line-awesome', className: 'shine-font-danger'}},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            },
            iconName: 'gear',
            iconProps: {source: 'line-awesome', className: 'shine-font-success'}
        },
        {label: '禁用标签', value: 3, disabled: true, iconName: 'comment', iconProps: {source: 'line-awesome', className: 'shine-font-warning'}}
    ]}
  />
  <Divider message="Pill 样式"/>
  <Tabs
    isPill
    tabConfig={[
        {label: '标签一', value: 1, iconName: 'exclamation-triangle', iconProps: {source: 'line-awesome'}},
        {label: '标签二', value: 2, iconName: 'puzzle-piece', iconProps: {source: 'line-awesome', className: 'shine-font-danger'}},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            },
            iconName: 'gear',
            iconProps: {source: 'line-awesome', className: 'shine-font-success'}
        },
        {label: '禁用标签', value: 3, disabled: true, iconName: 'comment', iconProps: {source: 'line-awesome', className: 'shine-font-warning'}}
    ]}
  />
</div>`,
  },
  adjusted: {
    components,
    jsx:
      `<div className="shine-tabs-helper">
  <Divider message="基础样式"/>
  <Tabs
    isAdjusted
    tabConfig={[
        {label: '标签一', value: 1},
        {label: '标签二', value: 2},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            }
        },
        {label: '禁用标签', value: 3, disabled: true}
    ]}
  />
  <Divider message="Pill 样式"/>
  <Tabs
    isAdjusted
    isPill
    tabConfig={[
        {label: '标签一', value: 1},
        {label: '标签二', value: 2},
        {
            label: '下拉标签',
            value: 4,
            type: 'dropdown',
            dropdownProps: {
                options: [
                  {label:'操作按钮一'},
                  {label:'操作按钮二', value:2},
                  {label:'操作按钮二', value:3}
                ]
            }
        },
        {label: '禁用标签', value: 3, disabled: true}
    ]}
  />
</div>`,
  },
  controller: {
    components,
    jsx:
      `export default class extends Component {
  state = {
    activeTab: 1
  };

  render() {
    const {activeTab} = this.state;

    return (
      <div className="helper mb20">
        <Tabs
          isControlled
          tabConfig={[
            {label: '标签一', value: 1},
            {label: '标签二', value: 2},
            {label: '标签三', value: 3}
          ]}
          activeTab={activeTab}
          onChange={tabIndex => this.setState({activeTab: tabIndex})}
        />
        <div>这是标签{activeTab}的内容。</div>
      </div>
    );
  }
}`,
  },
};
