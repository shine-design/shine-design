/**
 * 卡片页脚
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:21
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import mdx from "@mdx-js/mdx";

export default class extends Component {
  render() {
    const {children} = this.props;
    console.log(children);
    // const mdxText = mdx.sync(children);
    // console.log(typeof  mdxText);
    // console.log(mdx.sync(children));
    return (
      <div className="card-footer">
        {/*{mdxText}*/}
      </div>
    );
  }
}

