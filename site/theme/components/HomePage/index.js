/**
 * @Component 首页
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-15 18:12
 */
import React, {Component, Fragment} from 'react';

export default class extends Component {


  render() {
    return (
      <Fragment>
        <section
          className="bg-blue p-0"
          data-top-top="transform: translateY(0px);"
          data-top-bottom="transform: translateY(200px);"
          style={{backgroundColor: '#064CDB !important'}}
        >
          <div className="container">
            <div className="vh-100 py-10 row align-items-end justify-content-center">
              <div className="col-md-8 text-white">
                <div className="row">
                  <div className="col">
                    <h1>Shine Design</h1>
                    <p className="lead">为开发者、设计师和产品经理准备的 UI 设计语言</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a data-scroll href="#section-1" className="btn btn-outline-white btn-ico btn-lg btn-rounded mt-5">
                      <i className="icon-arrow-down2 fs-22"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
