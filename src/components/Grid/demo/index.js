/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Col, Row} from 'shineDev';

export default {
  basic: {
    components: {Row, Col},
    jsx: `
      <Row className="shine-grid-helper">
        <Col col={24}>col-24</Col>
      </Row>

      <Row className="shine-grid-helper">
        <Col col={12}>col-12</Col>
        <Col col={12}>col-12</Col>
      </Row>

      <Row className="shine-grid-helper">
        <Col col={6}>col-6</Col>
        <Col col={6}>col-6</Col>
        <Col col={6}>col-6</Col>
        <Col col={6}>col-6</Col>
      </Row>

      <Row className="shine-grid-helper">
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
      </Row>
`,
  },
  responsive: {
    components: {Row, Col},
    jsx: `
      <Row className="shine-grid-helper">
        <Col col={{md:24,lg:12,xxl:6,xxxl:3}}>col-24</Col>
      </Row>
`,
  },
};
