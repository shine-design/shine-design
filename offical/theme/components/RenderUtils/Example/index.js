import React, {Component, Fragment} from 'react';
import Code from "siteSrc/components/Common/Code";
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import jQuery from 'jquery';
import {Col, Modal, Row} from 'shineDev';
import './style.less';

export default class extends Component {

  state = {
    isOpen: false,
  };

  componentDidMount() {
    this._initTabs();
  }

  _initTabs() {
    const tab = jQuery(this.refs.example);
    const config = {
      headerTag: "h4",
      bodyTag: "div",
      titleTemplate: '#title#',
      transitionEffect: "fade",
      enableFinishButton: false,
      enablePagination: false,
      enableAllSteps: true,
      labels: {
        current: '',
      },
    };
    jQuery.extend(true, config, tab.data('config'));
    tab.steps(config);
  };

  onTriggerLive = () => this.setState({isOpen: true});


  render() {
    const {code, display, components, isDisabledLive, className = []} = this.props;
    const {isOpen} = this.state;

    return (
      <Fragment>
        <div
          ref='example'
          className={'tabs js-tabs code-highlight-tabs code-highlight-tabs-center ' + className.join(' ')}
        >
          <h4 className="tab-title">
            <i className="fa fa-cube" />示例
          </h4>
          <div className="tab-content full-width">
            {display}
            <div className="tab-live">
              {isDisabledLive ? <span>暂不提供在线运行</span> : <a href="javascript:;" onClick={this.onTriggerLive}>在线运行</a>}
            </div>
          </div>
          <h4 className="tab-title">
            <i className="fa fa-code" />代码
          </h4>
          <div className="tab-content full-width tab-code">
            <Code {...code} />
            <div className="tab-live">
              {isDisabledLive ? <span>暂不提供在线运行</span> : <a href="javascript:;" onClick={this.onTriggerLive}>在线运行</a>}
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          className="code-live-modal"
          customSize="80%"
          title="Shine Design 在线运行"
        >
          <div className="tab-content full-width">
            <LiveProvider scope={components} code={'<div>' + code.code + '</div>'}>
              <Row className="tab-live-code-row">
                <Col col={12} className="tab-live-code-col">
                  <LiveEditor />
                  <LiveError />
                </Col>
                <Col col={12} className="tab-live-code-col">
                  <LivePreview />
                </Col>
              </Row>
            </LiveProvider>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
