/**
 * 浏览器支持
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-17 11:55
 */
import React from 'react';
import Chrome from 'siteSrc/assets/support/chrome.svg';
import Firefox from 'siteSrc/assets/support/firefox.svg';
import IE from 'siteSrc/assets/support/ie.svg';
import Opera from 'siteSrc/assets/support/opera.svg';
import Safari from 'siteSrc/assets/support/safari.svg';
import './style.less';

export default () => (
  <ul className="browsers ">
    <li className="browser-recommended">
      <div className="browser-icon">
        <img src={Chrome} />
      </div>
      <h4 className="browser-title"> Chrome </h4>
    </li>
    <li>
      <div className="browser-icon">
        <img src={Safari} />
      </div>
      <h4 className="browser-title"> Safari </h4>
    </li>
    <li>
      <div className="browser-icon">
        <img src={Opera} />
      </div>
      <h4 className="browser-title"> Opera </h4>
    </li>
    <li>
      <div className="browser-icon">
        <img src={Firefox} />
      </div>
      <h4 className="browser-title"> FireFox </h4>
    </li>
    <li className="browser-partial">
      <div className="browser-icon">
        <img src={IE} />
      </div>
      <h4 className="browser-title"> IE 9+ </h4>
    </li>
  </ul>
);
