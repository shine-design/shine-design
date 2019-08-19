import React, {Component, Fragment} from 'react';
import jQuery from 'jquery';
import Clipboard from 'clipboard';
import Prism from 'siteSrc/plugins/prism/prism';
import './style.less';

export default class extends Component {
  componentDidMount() {
    Prism.highlightAll();
    this._initClipboard();
  }

  _initClipboard() {
    const getCopyMessage = action => {
      let actionMsg = '';
      const actionKey = (action === 'cut' ? 'X' : 'C');

      if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'no support :(';
      } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'press ⌘-' + actionKey + ' to ' + action;
      } else {
        actionMsg = 'press Ctrl-' + actionKey + ' to ' + action;
      }

      return actionMsg;
    };

    const clipboard = new Clipboard('.js-copy-to-clipboard', {
      target(trigger) {
        return jQuery(trigger).parent().find('.js-code')[0];
      },
    });

    // 复制成功监听
    clipboard.on('success', e => {
      e.clearSelection();
      jQuery(e.trigger).text('复制成功');
      setTimeout(() => {
        jQuery(e.trigger).text('复制');
      }, 700);
    });

    // 复制出错监听
    clipboard.on('error', e => {
      jQuery(e.trigger).text(getCopyMessage(e.action)).addClass('copy-code-error');
      setTimeout(() => {
        jQuery(e.trigger).text('copy').removeClass('copy-code-error');
      }, 1400);
    });
  }

  render() {
    const {code = '', language = 'jsx'} = this.props;
    return (
      <Fragment>
        <div className="code-highlight">
          <span className="js-copy-to-clipboard copy-code">复制</span>
          <pre><code className={'js-code language-' + language}>{code}</code></pre>
        </div>
      </Fragment>
    );
  }
}
