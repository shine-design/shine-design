import React from 'react';

export default {
    id: 'v011',
    header: {
        version: '0.1.1',
        updateData: '2018 - 08 -18'
    },
    description: [{
        value: <p>发布 <code>Group</code>组件。</p>,
        type: 0
    }, {
        value: '变更组件默认加载方式，更新后默认加载方式为按需加载。',
        type: 1
    }, {
        value: '统一组件配置项，通用配置项使用唯一命名。',
        type: 1
    }, {
        value: '移除部分第三方冗余样式和字体，统一使用 Webpack 打包至样式文件中。',
        type: 2
    }]
}