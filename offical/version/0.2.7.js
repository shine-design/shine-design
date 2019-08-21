import React from 'react';

export default {
    id: 'v027',
    header: {
        version: '0.2.7',
        updateData: '2018 - 11 -20'
    },
    description: [
        {
            value: <p>发布 <code>Form</code>组件。</p>,
            type: 0
        },
        {
            value: <p>表单组件现在支持表单校验了。</p>,
            type: 0
        },
        {
            value:
                <p>修复 <code>Input</code> 组件在 <code>type</code> 类型为 <code>checkbox</code> 或 <code>radio</code> 时 <code>id</code> 、 <code>name</code> 属性重复问题。
                </p>,
            type: 1
        },
        {
            value: <p>修复 <code>inline</code> 模式下表单组件排版问题。</p>,
            type: 1
        },
        {
            value: <p>修复表单文字显示异常问题。</p>,
            type: 1
        }]
}