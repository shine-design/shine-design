/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Button} from "shineDev";

const components = {Button};

export default {
  basic: {
    components,
    jsx:
      `<div className="shine-button-helper need">
    <div>
      <Button bgColor="primary">Primary</Button>
      <Button bgColor="danger">Danger</Button>
      <Button bgColor="warning">Warning</Button>
      <Button bgColor="success">Success</Button>
      <Button bgColor="brand">Brand</Button>
      <Button bgColor="grace">Grace</Button>
      <Button bgColor="metal">Metal</Button>
      <Button bgColor="focus">Focus</Button>
    </div>
    <div>
      <Button bgColor="primary" disabled>Disabled</Button>
      <Button bgColor="danger" disabled>Disabled</Button>
      <Button bgColor="warning" disabled>Disabled</Button>
      <Button bgColor="success" disabled>Disabled</Button>
      <Button bgColor="brand" disabled>Disabled</Button>
      <Button bgColor="grace" disabled>Disabled</Button>
      <Button bgColor="metal" disabled>Disabled</Button>
      <Button bgColor="focus" disabled>Disabled</Button>
    </div>
    <div>
      <Button bgColor="primary" active>Active</Button>
      <Button bgColor="danger" active>Active</Button>
      <Button bgColor="warning" active>Active</Button>
      <Button bgColor="success" active>Active</Button>
      <Button bgColor="brand" active>Active</Button>
      <Button bgColor="grace" active>Active</Button>
      <Button bgColor="metal" active>Active</Button>
      <Button bgColor="focus" active>Active</Button>
    </div>
    <div>
      <Button outlineColor="primary">Primary</Button>
      <Button outlineColor="danger">Danger</Button>
      <Button outlineColor="warning">Warning</Button>
      <Button outlineColor="success">Success</Button>
      <Button outlineColor="brand">Brand</Button>
      <Button outlineColor="grace">Grace</Button>
      <Button outlineColor="metal">Metal</Button>
      <Button outlineColor="focus">Focus</Button>
    </div>
        <div>
      <Button outlineHoverColor="primary">Primary</Button>
      <Button outlineHoverColor="danger">Danger</Button>
      <Button outlineHoverColor="warning">Warning</Button>
      <Button outlineHoverColor="success">Success</Button>
      <Button outlineHoverColor="brand">Brand</Button>
      <Button outlineHoverColor="grace">Grace</Button>
      <Button outlineHoverColor="metal">Metal</Button>
      <Button outlineHoverColor="focus">Focus</Button>
    </div>
</div>`,
  },
  shake: {
    components,
    jsx:
      `<div className="shine-button-helper">
    <div>
      <Button bgColor="primary" shake>Primary</Button>
      <Button bgColor="danger" shake>Danger</Button>
      <Button bgColor="warning" shake>Warning</Button>
      <Button bgColor="success" shake>Success</Button>
      <Button bgColor="brand" shake>Brand</Button>
      <Button bgColor="grace" shake>Grace</Button>
      <Button bgColor="metal" shake>Metal</Button>
      <Button bgColor="focus" shake>Focus</Button>
    </div>
</div>`,
  },
  btnStyle: {
    components,
    jsx:
      `<div className="shine-button-helper">
    <div>
      <Button bgColor="primary" btnStyle="normal">圆角矩形</Button>
      <Button bgColor="danger" btnStyle="square">直角矩形</Button>
      <Button bgColor="success" btnStyle="pill">椭圆矩形</Button>
    </div>
    <div>
      <Button outlineColor="primary" btnStyle="normal">圆角矩形</Button>
      <Button outlineColor="danger" btnStyle="square">直角矩形</Button>
      <Button outlineColor="success" btnStyle="pill">椭圆矩形</Button>
    </div>
</div>`,
  },
  btnSize: {
    components,
    jsx:
      `<div className="shine-button-helper">
    <div>
      <Button bgColor="primary" size="lg">大尺寸</Button>
      <Button bgColor="primary">中尺寸</Button>
      <Button bgColor="primary" size="sm">小尺寸</Button>
    </div>
    <div>
      <Button outlineColor="primary" size="lg">大尺寸</Button>
      <Button outlineColor="primary">中尺寸</Button>
      <Button outlineColor="primary" size="sm">小尺寸</Button>
    </div>
    <div>
      <Button bgColor="primary" size="lg" wide>更宽尺寸</Button>
      <Button bgColor="primary" wide>更宽尺寸</Button>
      <Button bgColor="primary" size="sm" wide>更宽尺寸</Button>  
    </div>
    <div>
      <Button bgColor="primary">中尺寸</Button>
      <Button bgColor="primary" tall>更高尺寸</Button>
      <Button bgColor="primary" size="sm">小尺寸</Button>
      <Button bgColor="primary" size="sm" tall>更高尺寸</Button>  
    </div>
</div>`,
  },
  btnIcon: {
    components,
    jsx:
      `<div className="shine-button-helper">
          <Button bgColor="primary" icon="apple">Apple</Button>
          <Button outlineColor="success" icon="bank">Solid</Button>
          <Button outlineHoverColor="danger" icon="ambulance">Danger</Button>
</div>`,
  },
  isOnlyIcon: {
    components,
    jsx:
      `<div className="shine-button-helper">
          <Button bgColor="primary" icon="apple" isOnlyIcon />
          <Button outlineColor="success" icon="bank" isOnlyIcon />
          <Button outlineHoverColor="danger" icon="ambulance" isOnlyIcon />
</div>`,
  },
};

