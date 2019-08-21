import React, {Component, Fragment} from 'react';
import Code from 'siteSrc/components/Common/Code';
import './style.less';

export default class Brand extends Component {
  render() {
    const code =
      `import React from 'react';
import ReactDOM from 'react-dom';

// 导入按钮组件
import {Button} from 'shined';

class App extends React.Component {
    render(){
        return (
            <Button value="Button"/>
        )
    }
}

// 初始化 React
ReactDOM.render(<APP />,document.querySelector('#app'));`;

    return (
      <Fragment>
        <div className='container'>
          <div className="promo-title-wrapper ">
            <h3 className="promo-title"> 比你想象的更简单 </h3>
            <p className="promo-description"> 摈弃繁琐的配置过程，采用高质量的组件封装，无需二次定制开发，复杂的世界里，一个就够了。 </p>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 col-sm-12">
              <Code code={code} language="jsx" />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

