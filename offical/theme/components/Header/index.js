/**
 * 网站顶部容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 17:50
 */
import React, {Fragment} from 'react';
import Language from './components/Language';
import LOGO from './components/Logo';
import Menu from './components/Menu';
import './style.less';

export default ({location}) => (
  <Fragment>
    <div className="header header-over large">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-5">
            <LOGO />
            <Language />
          </div>
          <div className="col-md-9 col-sm-6 col-xs-7">
            <nav className="right helper">
              <Menu location={location} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
