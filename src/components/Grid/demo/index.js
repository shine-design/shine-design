/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Col, Row} from 'shineDev';

const components = {Row, Col};

export default {
  basic: {
    components,
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
  offset: {
    components,
    jsx: `
      <Row className="shine-grid-helper">
        <Col col={12} offset={12}>col-12 | offset-12 </Col>
      </Row>
      <Row className="shine-grid-helper">
        <Col col={6} offset={6}>col-6 | offset-6 </Col>
        <Col col={6}>col-6</Col>
        <Col col={6}>col-6</Col>
      </Row>
      <Row className="shine-grid-helper">
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
        <Col col={6} offset={6}>col-6 | offset-6 </Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-3</Col>
      </Row>
`,
  },
  order: {
    components,
    jsx: `
      <Row className="shine-grid-helper">
        <Col col={3} order={1}>order-1</Col>
        <Col col={3} order={4}>order-4</Col>
        <Col col={3} order={3}>order-3</Col>
        <Col col={3} order={2}>order-2</Col>
        <Col col={3} order={8}>order-8</Col>
        <Col col={3} order={6}>order-6</Col>
        <Col col={3} order={7}>order-7</Col>
        <Col col={3} order={5}>order-5</Col>
      </Row>
`,
  },
  responsive: {
    components,
    jsx: `
      <Row className="shine-grid-helper">
        <Col col={{xxxl:6,xxl:8,xl:10,lg:12,md:14}}>Col</Col>
      </Row>
      <Row className="shine-grid-helper">
        <Col col="6" order={{xxxl:1,xl:2,lg:3,md:4,sm:1}}>A</Col>
        <Col col="6" order={{xxxl:2,xl:3,lg:4,md:1,sm:2}}>B</Col>
        <Col col="6" order={{xxxl:3,xl:4,lg:1,md:2,sm:3}}>C</Col>
        <Col col="6" order={{xxxl:4,xl:1,lg:2,md:3,sm:4}}>D</Col>
      </Row>
      <Row className="shine-grid-helper">
        <Col col={6} offset={{xxxl:2,xxl:4,xl:6,lg:7,md:10,sm:12}}>Offset</Col>
      </Row>
`,
  },
  justify: {
    components,
    jsx: `
      <Row className="shine-grid-helper" justify="start">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper" justify="center">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper" justify="end">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper" justify="space-around">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper" justify="space-between">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
`,
  },
  align: {
    components,
    jsx: `
      <Row className="shine-grid-helper shine-grid-height" align="top">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper shine-grid-height" align="middle">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
      <Row className="shine-grid-helper shine-grid-height" align="bottom">
        <Col col={3}>col-1</Col>
        <Col col={3}>col-2</Col>
        <Col col={3}>col-3</Col>
        <Col col={3}>col-4</Col>
      </Row>
`,
  },
};
