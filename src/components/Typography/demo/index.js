/**
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-13 18:28
 */
import {Col, Row} from "shineDev";

const components = {Row, Col};

export default {
  title: {
    components,
    jsx: `
<Row>
  <Col col={10}>
    <h1>h1. Heading 1</h1>
    <h2>h2. Heading 2</h2>
    <h3>h3. Heading 3</h3>
    <h4>h4. Heading 4</h4>
    <h5>h5. Heading 5</h5>
    <h6>h6. Heading 6</h6>
  </Col>
  <Col col={10}>
    <h1>h1. Heading 1</h1>
    <h2>h2. Heading 2</h2>
    <h3>h3. Heading 3</h3>
    <h4>h4. Heading 4</h4>
    <h5>h5. Heading 5</h5>
    <h6>h6. Heading 6</h6>
  </Col>
</Row>
`,
  },
};

