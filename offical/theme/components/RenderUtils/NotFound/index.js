/**
 * 404 组件
 * 用于在当前路由未被定义时显示。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 12:20
 */
import React from 'react';
import './style.less';

export default () => (
  <div className="col-lg-10 col-xxl-10 doc-content not-found">
    <p className="not-found-title font-weight-light">Ops! 404 Not Found</p>
    <p className="not-found-desp font-weight-light">你似乎来到了没有知识的荒原...</p>
    <p className="not-found-back font-weight-light">
      <a href="/">返回首页</a>
    </p>
  </div>
);
