import _ from 'lodash';
import React, {Fragment} from 'react';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {ThemeConfig} from "docz";
import './style.less';

export default () => (
  <ThemeConfig>
    {
      ({themeConfig: {brand, slogan, screenAction}}) => (
        <Fragment>
          <div className="page-info helper center">
            <h1 className="page-title">{brand}</h1>
            <h2 className="page-description">{slogan}</h2>
          </div>
          <div className="header-back-buttons helper center">
            {
              _.map(screenAction, (act, index) => (
                  <NavLink
                    key={index}
                    to={act.link}
                    target={act.isBlank ? '_blank' : ''}
                    className={
                      classNames('button', 'rounded', 'large', 'blue-light', ...act.isStroke ? ['stroke'] : ['no-border'])
                    }
                  >
                    {act.label}
                  </NavLink>
                ),
              )
            }
          </div>
        </Fragment>
      )
    }
  </ThemeConfig>
);
