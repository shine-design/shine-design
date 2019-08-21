import React from 'react';

export default {
    id: 'v022',
    header: {
        version: '0.2.2',
        updateData: '2018 - 10 -02'
    },
    description: [{
        value: <p>发布 <code>Modal</code>组件。</p>,
        type: 0
    }, {
        value: <p>
            <code>Row</code>、<code>Col</code>、<code>Progress</code>、<code>SymbolInput</code>、<code>Divider</code> 组件增加 <code>attributes</code> 属性支持。
        </p>,
        type: 0
    }, {
        value: <p><code>Badge</code>、<code>Divider</code> 组件增加 <code>className</code> 属性支持。</p>,
        type: 0
    }, {
        value: <p><code>Badge</code> 组件增加 <code>callbacks</code> 属性支持。</p>,
        type: 0
    }, {
        value: <p>修复 <code>close</code> 修饰符无法透明对样式问题。</p>,
        type: 1
    }, {
        value: <p>修复部分组件属性字段无法校验通过问题。</p>,
        type: 1
    }]
}