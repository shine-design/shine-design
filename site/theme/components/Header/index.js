/**
 * 网站顶部
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 14:17
 */
import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';

export default class extends Component {

  render() {
    return (
      <header className="header header-sticky header-minimal-light">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a href="../../index.html" className="navbar-brand">
                <img src={logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"/>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="../../index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="../../index.html">Documentation</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../index.html">Help Center</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../index.html">Pages</a>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="../../documentation/index.html">Docs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../documentation/changelog.html">Changelog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
