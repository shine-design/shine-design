/**
 * 三级标题组件
 * 用于在 MDX 中定义一个三级标题
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 16:47
 */
import React from 'react';

export default ({id, children}) => (<div id={id} className="doc-title typo-h3">{children}</div>);
