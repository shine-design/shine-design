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
      `<div class="shine-button-helper">
    <div>
      <Button bgColor="primary">Primary</Button>
      <Button bgColor="danger">Danger</Button>
      <Button bgColor="warning">Warning</Button>
      <Button bgColor="success">Success</Button>
      <Button bgColor="info">Info</Button>
      <Button bgColor="brand">Brand</Button>
      <Button bgColor="grace">Grace</Button>
      <Button bgColor="metal">Metal</Button>
      <Button bgColor="focus">Focus</Button>
    </div>
    <div>
      <Button outlineColor="primary">Primary</Button>
      <Button outlineColor="danger">Danger</Button>
      <Button outlineColor="warning">Warning</Button>
      <Button outlineColor="success">Success</Button>
      <Button outlineColor="info">Info</Button>
      <Button outlineColor="brand">Brand</Button>
      <Button outlineColor="grace">Grace</Button>
      <Button outlineColor="metal">Metal</Button>
      <Button outlineColor="focus">Focus</Button>
    </div>
</div>`,
  },
  gradient: {
    components,
    jsx:
      `<div class="shine-button-helper">
    <div>
      <Button gradientStart="danger" gradientEnd="success">Danger To Success</Button>
      <Button gradientStart="primary" gradientEnd="warning">Primary To Warning</Button>
      <Button gradientStart="grace" gradientEnd="matel">Grace To Matel</Button>
    </div>
</div>`,
  },
  btnStyle: {
    components,
    jsx:
      `<div class="shine-button-helper">
    <div>
      <Button bgColor="primary" btnStyle="normal">圆角矩形</Button>
      <Button bgColor="danger" btnStyle="square">直角矩形</Button>
      <Button bgColor="success" btnStyle="pill">椭圆矩形</Button>
      <Button outlineColor="primary" btnStyle="normal">圆角矩形</Button>
      <Button outlineColor="danger" btnStyle="square">直角矩形</Button>
      <Button outlineColor="success" btnStyle="pill">椭圆矩形</Button>
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
      `<div class="shine-button-helper">
    <div>
      <Button bgColor="primary" size="lg">Large</Button>
      <Button bgColor="primary">Normal</Button>
      <Button bgColor="primary" size="sm">Small</Button>
    </div>
    <div>
      <Button outlineColor="primary" size="lg">Large</Button>
      <Button outlineColor="primary">Normal</Button>
      <Button outlineColor="primary" size="sm">Small</Button>
    </div>
</div>`,
  },
};

