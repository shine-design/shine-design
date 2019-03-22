/**
 * 侧边栏导航
 * 基于 MDX 解析的菜单渲染展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 11:52
 */
import React, {Component} from 'react';
import Menu from './components/Menu';

export default class extends Component {

  render() {
    const {location} = this.props;
    return (
      <aside className="col-lg-2 col-xxl-2 p-3 doc-sidebar">
        <div className="sticky">
          <nav className="navbar navbar-vertical navbar-expand-lg navbar-light">
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#asideMenu"
                aria-controls="asideMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="asideMenu">
              <Menu location={location} />
            </div>
          </nav>
        </div>
      </aside>
    );
  }
}
