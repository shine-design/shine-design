/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-02 22:08
 */
import {Col, Form, Row, Switch} from "shineDev";

const components = {Switch, Form, Row, Col};

export default {
  basic: {
    components,
    jsx:
      `<div className="shine-switch-helper">
  <Form>
    <Row>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="默认关闭">
          <Switch />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="默认打开">
          <Switch isChecked={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="带图标关闭">
          <Switch isShowIcon={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="带图标打开">
          <Switch isChecked={true} isShowIcon={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="禁用开启">
          <Switch isDisabled={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="禁用关闭">
          <Switch isChecked={true} isShowIcon={true} isDisabled={true} />
        </Form.Item>
      </Col>
    </Row>  
  </Form>
</div>`,
  },
  state: {
    components,
    jsx:
      `<div className="shine-switch-helper">
  <Form>
    <Row>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Default">
          <Switch isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Brand">
          <Switch bgColor="brand" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Metal">
          <Switch bgColor="metal" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Light">
          <Switch bgColor="light" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Accent">
          <Switch bgColor="accent" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Focus">
          <Switch bgColor="focus" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Primary">
          <Switch bgColor="primary" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Success">
          <Switch bgColor="success" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Info">
          <Switch bgColor="info" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Warning">
          <Switch bgColor="warning" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Danger">
          <Switch bgColor="danger" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
    </Row>  
    <hr />
    <Row>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Default">
          <Switch isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Brand">
          <Switch outlineColor="brand" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Metal">
          <Switch outlineColor="metal" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Light">
          <Switch outlineColor="light" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Accent">
          <Switch outlineColor="accent" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Focus">
          <Switch outlineColor="focus" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Primary">
          <Switch outlineColor="primary" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Success">
          <Switch outlineColor="success" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="Info">
          <Switch outlineColor="info" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Warning">
          <Switch outlineColor="warning" isShowIcon={true} isChecked={true} />
        </Form.Item>
        <Form.Item isInline={true} labelCol={8} label="Danger">
          <Switch outlineColor="danger" isShowIcon={true} isChecked={true} />
        </Form.Item>
      </Col>
    </Row>  
  </Form>
</div>`,
  },
  size: {
    components,
    jsx:
      `<div className="shine-switch-helper">
  <Form>
    <Row>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="默认打开">
          <Switch isChecked={true} size="small" isShowIcon={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="默认打开">
          <Switch isChecked={true} isShowIcon={true} />
        </Form.Item>
      </Col>
      <Col col={8}>
        <Form.Item isInline={true} labelCol={8} label="默认打开">
          <Switch isChecked={true} size="large" isShowIcon={true} />
        </Form.Item>
      </Col>
    </Row>  
  </Form>
</div>`,
  },
};

