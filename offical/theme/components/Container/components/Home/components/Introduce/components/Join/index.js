import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

import './style.less';

export default class Header extends Component {

  render() {
    return (
      <Fragment>
        <div className="call-to-action helper mt60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="call-to-action-title"> 加入 Shine 团队 </h3>
                <p className="call-to-action-description" style={{marginBottom: '10px'}}> 哪有什么天生如此，只是我们天天坚持</p>
                <div className="call-to-action-buttons">
                  <NavLink to='/contribute' className="button stroke rounded large blue">贡献指南</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
