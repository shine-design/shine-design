/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Button, Divider, Tooltip} from 'shineDev';

const components = {Tooltip, Button, Divider};
export default {
  basic: {
    components,
    jsx:
      `<div className="shine-tooltip-helper">
    <Divider message="纯文本提示" />
    <Tooltip title="这是一个文字提示">基础文字提示</Tooltip>
    <Divider message="嵌套 DOM 元素" />    
    <Tooltip title="这是一个按钮提示"><a href="javascript:;">DOM 元素</a></Tooltip>
    <Divider message="嵌套 React 组件" />    
    <Tooltip title="这是一个按钮提示"><Button label="React 组件" bgColor="brand" /></Tooltip>
</div>`,
  },
  direction: {
    components,
    jsx:
      `<div className="shine-tooltip-helper need-more-padding">
    <Tooltip title="右侧显示" placement="right"><Button label="右侧显示" bgColor="brand" /></Tooltip>
    <Tooltip title="左侧显示" placement="left"><Button  label="左侧显示" bgColor="danger" /></Tooltip>
    <Tooltip title="顶部显示" placement="top"><Button label="顶部显示" bgColor="warning" /></Tooltip>
    <Tooltip title="底部显示" placement="bottom"><Button label="底部显示" bgColor="metal" /></Tooltip>
</div>`,
  },
  html: {
    components,
    jsx:
      `<div className="shine-tooltip-helper">
    <Tooltip title="Tooltip <b>with</b> <code>HTML</code>" isHtmlRender><Button label="HTML 代码" bgColor="success" /></Tooltip>
</div>`,
  },
  bgColor: {
    components,
    jsx:
      `<div className="shine-tooltip-helper need-more-padding">
    <Tooltip title="brand 文字提示" bgColor="brand"><Button label="Brand 样式" bgColor="brand" /></Tooltip>
    <Tooltip title="dark 文字提示" bgColor="dark"><Button label="Dark 样式" bgColor="dark" /></Tooltip>
    <Tooltip title="light 文字提示"><Button label="Light 样式" bgColor="light" /></Tooltip>
</div>`,
  }
};
