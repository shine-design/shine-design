import React, {Component, Fragment} from 'react';

import './style.less';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="promo-title-wrapper helper pt60">
                        <h3 className="promo-title"> 设计理念 </h3>
                        <p className="promo-description"> 服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-plug box-icon-large" />
                                <h4 className="box-title">Components</h4>
                                <p className="box-description">开箱即用的高质量组件，配套详尽的设计文档和使用示例，为开发者、设计师和产品经理提供丰富的创意和思路。</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-chrome box-icon-large" />
                                <h4 className="box-title">Cross-Platform</h4>
                                <p className="box-description">支持 Windows 和 Mac 等操作系统，兼容 IE, Chrome 和 Firefox 等绝大部分主流浏览器，为使用者带来统一的视觉体验。</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box helper center">
                                <i className="fa fa-code box-icon-large" />
                                <h4 className="box-title">Open Source</h4>
                                <p className="box-description">Shine Design 是一个由众多贡献者自发参与、共同维护的开源项目，拥有全链路开发和设计工具体系，社区活跃，且永久免费。</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
