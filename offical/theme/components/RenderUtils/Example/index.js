import React, {Component, Fragment} from 'react';
import Code from "siteSrc/components/Common/Code";
import jQuery from 'jquery';
import {Modal} from 'shineDev';
import './style.less';

export default class extends Component {
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

  onTriggerLive = () => {
    console.log('onTriggerLive');
  };


  render() {
    const {code, display, components, className = []} = this.props;
    console.log(components);

    /*
    *<div className="tab-content full-width">
            <LiveProvider scope={components} code={'<div>' + code.code + '</div>'}>
              <div className="tab-flex">
                <div className="tab-split"><LiveEditor/><LiveError/></div>
                <div className="tab-split"><LivePreview/></div>
              </div>
            </LiveProvider>
          </div>
    * */

    return (
      <Fragment>
        <div
          ref='example'
          className={'tabs js-tabs code-highlight-tabs code-highlight-tabs-center ' + className.join(' ')}
        >
          <h4 className="tab-title">
            <i className="fa fa-cube"/>示例
          </h4>
          <div className="tab-content full-width">
            {display}
            <div className="tab-live">
              <a href="javascript:;" onClick={this.onTriggerLive}>在线运行</a>
            </div>
          </div>
          <h4 className="tab-title">
            <i className="fa fa-code"/>代码
          </h4>
          <div className="tab-content full-width tab-code">
            <Code  {...code} />
            <div className="tab-live">
              <a href="javascript:;" onClick={this.onTriggerLive}>在线运行</a>
            </div>
          </div>
        </div>
        <Modal
          isOpen={true}
          customSize="80%"
          title="实时预览"
        >
          哈哈
        </Modal>
      </Fragment>
    );
  }
}
