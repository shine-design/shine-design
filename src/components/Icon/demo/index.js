/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Icon} from "shineDev";

const components = {Icon};

export default {
  basic: {
    components,
    jsx: `<div className="shine-icon-helper">
  <Icon iconName="automobile" />
  <Icon iconName="balance-scale" />
  <Icon iconName="battery" />
</div>`,
  },
  size: {
    components,
    jsx: `<div className="shine-icon-helper">
  <div className="block">
  <Icon iconName="camera-retro" /> Normal
  </div>
  <div className="block">
    <Icon iconName="camera-retro" size="lg" /> Large
  </div>
  <div className="block">
    <Icon iconName="camera-retro" size="2x" /> 2X
  </div>
  <div className="block">
    <Icon iconName="camera-retro" size="3x" /> 3X
  </div>
  <div className="block">
    <Icon iconName="camera-retro" size="4x" /> 4X
  </div>
  <div className="block">
    <Icon iconName="camera-retro" size="5x" /> 5X
  </div>
</div>`,
  },
  spin: {
    components,
    jsx: `<div className="shine-icon-helper">
  <div className="block">
    <Icon iconName="spinner" isSpin={true} size="3x" />
    <Icon iconName="circle-o-notch" isSpin={true} size="3x" />
    <Icon iconName="refresh" isSpin={true} size="3x" />
  </div>
  <div className="block">
    <Icon iconName="spinner" isPulse={true} size="3x" />
    <Icon iconName="circle-o-notch" isPulse={true} size="3x" />
    <Icon iconName="refresh" isPulse={true} size="3x" />
  </div>
</div>`,
  },
  rotate: {
    components,
    jsx: `<div className="shine-icon-helper">
  <div className="block">
    <Icon iconName="shield" size="3x" />
    <Icon iconName="shield" rotate={90} size="3x" />
    <Icon iconName="shield" rotate={180} size="3x" />
    <Icon iconName="shield" rotate={270} size="3x" />
  </div>
  <div className="block">
    <Icon iconName="shield" flip="horizontal" size="3x" />    
    <Icon iconName="shield" flip="vertical" size="3x" />
  </div>
</div>`,
  },
};

