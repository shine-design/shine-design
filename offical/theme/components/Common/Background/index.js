/**
 * 通用组件 - 背景组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 19:12
 */
import React, {Fragment} from 'react';
import './style.less';

export default ({title, description}) => (
  <Fragment>
    <div className="header-back header-back-simple header-back-small">
      <div className="header-back-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-info page-info-simple">
                <h1 className="page-title">{title}</h1>
                <h2 className="page-description">{description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
