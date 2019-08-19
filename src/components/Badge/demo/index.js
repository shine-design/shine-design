/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Badge} from "shineDev";

const components = {Badge};

export default {
  basic: {
    components,
    jsx:
`<div class="shine-badge-helper">
    <Badge bgColor="brand">1</Badge>
    <Badge bgColor="grace">2</Badge>
    <Badge bgColor="metal">3</Badge>
    <Badge bgColor="focus">4</Badge>
    <Badge bgColor="primary">5</Badge>
    <Badge bgColor="success">6</Badge>
    <Badge bgColor="info">7</Badge>
    <Badge bgColor="warning">8</Badge>
    <Badge bgColor="danger">9</Badge>
</div>
 <div class="shine-badge-helper">
    <Badge bgColor="brand" isInverse={true}>1</Badge>
    <Badge bgColor="grace" isInverse={true}>2</Badge>
    <Badge bgColor="metal" isInverse={true}>3</Badge>
    <Badge bgColor="focus" isInverse={true}>4</Badge>
    <Badge bgColor="primary" isInverse={true}>5</Badge>
    <Badge bgColor="success" isInverse={true}>6</Badge>
    <Badge bgColor="info" isInverse={true}>7</Badge>
    <Badge bgColor="warning" isInverse={true}>8</Badge>
    <Badge bgColor="danger" isInverse={true}>9</Badge>
</div>
`,
  },
  dot : {
    components,
    jsx:
 `<div class="shine-badge-helper">
    <Badge bgColor="brand" isDot={true} dotSize="small">1</Badge>
    <Badge bgColor="grace" isDot={true} dotSize="small">2</Badge>
    <Badge bgColor="metal" isDot={true} dotSize="small">3</Badge>
    <Badge bgColor="focus" isDot={true} dotSize="small">4</Badge>
    <Badge bgColor="primary" isDot={true} dotSize="small">5</Badge>
    <Badge bgColor="success" isDot={true} dotSize="small">6</Badge>
    <Badge bgColor="info" isDot={true} dotSize="small">7</Badge>
    <Badge bgColor="warning" isDot={true} dotSize="small">8</Badge>
    <Badge bgColor="danger" isDot={true} dotSize="small">9</Badge>
</div>
<div class="shine-badge-helper">
    <Badge bgColor="brand" isDot={true}>1</Badge>
    <Badge bgColor="grace" isDot={true}>2</Badge>
    <Badge bgColor="metal" isDot={true}>3</Badge>
    <Badge bgColor="focus" isDot={true}>4</Badge>
    <Badge bgColor="primary" isDot={true}>5</Badge>
    <Badge bgColor="success" isDot={true}>6</Badge>
    <Badge bgColor="info" isDot={true}>7</Badge>
    <Badge bgColor="warning" isDot={true}>8</Badge>
    <Badge bgColor="danger" isDot={true}>9</Badge>
</div>
<div class="shine-badge-helper">
    <Badge bgColor="brand" isDot={true} dotSize="large">1</Badge>
    <Badge bgColor="grace" isDot={true} dotSize="large">2</Badge>
    <Badge bgColor="metal" isDot={true} dotSize="large">3</Badge>
    <Badge bgColor="focus" isDot={true} dotSize="large">4</Badge>
    <Badge bgColor="primary" isDot={true} dotSize="large">5</Badge>
    <Badge bgColor="success" isDot={true} dotSize="large">6</Badge>
    <Badge bgColor="info" isDot={true} dotSize="large">7</Badge>
    <Badge bgColor="warning" isDot={true} dotSize="large">8</Badge>
    <Badge bgColor="danger" isDot={true} dotSize="large">9</Badge>
</div>

`,
  },
  border : {
    components,
    jsx:
`<div class="shine-badge-helper">
    <Badge bgColor="brand" borderType="square">1</Badge>
    <Badge bgColor="grace" borderType="square">2</Badge>
    <Badge bgColor="metal" borderType="square">3</Badge>
    <Badge bgColor="focus" borderType="square">4</Badge>
    <Badge bgColor="primary" borderType="square">5</Badge>
    <Badge bgColor="success" borderType="square">6</Badge>
    <Badge bgColor="info" borderType="square">7</Badge>
    <Badge bgColor="warning" borderType="square">8</Badge>
    <Badge bgColor="danger" borderType="square">9</Badge>
</div>
<div class="shine-badge-helper">
    <Badge bgColor="brand" borderType="rounded">1</Badge>
    <Badge bgColor="grace" borderType="rounded">2</Badge>
    <Badge bgColor="metal" borderType="rounded">3</Badge>
    <Badge bgColor="focus" borderType="rounded">4</Badge>
    <Badge bgColor="primary" borderType="rounded">5</Badge>
    <Badge bgColor="success" borderType="rounded">6</Badge>
    <Badge bgColor="info" borderType="rounded">7</Badge>
    <Badge bgColor="warning" borderType="rounded">8</Badge>
    <Badge bgColor="danger" borderType="rounded">9</Badge>
</div>
<div class="shine-badge-helper">
    <Badge bgColor="brand" borderType="square" isWide={true}>1</Badge>
    <Badge bgColor="grace" borderType="square" isWide={true}>2</Badge>
    <Badge bgColor="metal" borderType="square" isWide={true}>3</Badge>
    <Badge bgColor="focus" borderType="square" isWide={true}>4</Badge>
    <Badge bgColor="primary" borderType="square" isWide={true}>5</Badge>
    <Badge bgColor="success" borderType="square" isWide={true}>6</Badge>
    <Badge bgColor="info" borderType="square" isWide={true}>7</Badge>
    <Badge bgColor="warning" borderType="square" isWide={true}>8</Badge>
    <Badge bgColor="danger" borderType="square" isWide={true}>9</Badge>
</div>
<div class="shine-badge-helper">
    <Badge bgColor="brand" borderType="rounded" isWide={true}>1</Badge>
    <Badge bgColor="grace" borderType="rounded" isWide={true}>2</Badge>
    <Badge bgColor="metal" borderType="rounded" isWide={true}>3</Badge>
    <Badge bgColor="focus" borderType="rounded" isWide={true}>4</Badge>
    <Badge bgColor="primary" borderType="rounded" isWide={true}>5</Badge>
    <Badge bgColor="success" borderType="rounded" isWide={true}>6</Badge>
    <Badge bgColor="info" borderType="rounded" isWide={true}>7</Badge>
    <Badge bgColor="warning" borderType="rounded" isWide={true}>8</Badge>
    <Badge bgColor="danger" borderType="rounded" isWide={true}>9</Badge>
</div>
`,
  },
};

