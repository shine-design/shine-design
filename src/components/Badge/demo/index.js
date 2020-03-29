/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Badge, Divider} from "shineDev";

const components = {Badge, Divider};

export default {
  basic: {
    components,
    jsx:
      `<div className="shine-badge-helper">
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
`,
  },
  dot: {
    components,
    jsx:
      `<div className="shine-badge-helper">
    <Badge bgColor="brand" size="sm" />
    <Badge bgColor="grace" size="sm" />
    <Badge bgColor="metal" size="sm" />
    <Badge bgColor="focus" size="sm" />
    <Badge bgColor="primary" size="sm" />
    <Badge bgColor="success" size="sm" />
    <Badge bgColor="info" size="sm" />
    <Badge bgColor="warning" size="sm" />
    <Badge bgColor="danger" size="sm" />
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" />
    <Badge bgColor="grace" />
    <Badge bgColor="metal" />
    <Badge bgColor="focus" />
    <Badge bgColor="primary" />
    <Badge bgColor="success" />
    <Badge bgColor="info" />
    <Badge bgColor="warning" />
    <Badge bgColor="danger" />
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" size="lg" />
    <Badge bgColor="grace" size="lg" />
    <Badge bgColor="metal" size="lg" />
    <Badge bgColor="focus" size="lg" />
    <Badge bgColor="primary" size="lg" />
    <Badge bgColor="success" size="lg" />
    <Badge bgColor="info" size="lg" />
    <Badge bgColor="warning" size="lg" />
    <Badge bgColor="danger" size="lg" />
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" size="xl" />
    <Badge bgColor="grace" size="xl" />
    <Badge bgColor="metal" size="xl" />
    <Badge bgColor="focus" size="xl" />
    <Badge bgColor="primary" size="xl" />
    <Badge bgColor="success" size="xl" />
    <Badge bgColor="info" size="xl" />
    <Badge bgColor="warning" size="xl" />
    <Badge bgColor="danger" size="xl" />
</div>
`,
  },
  border: {
    components,
    jsx:
      `
<Divider message="默认尺寸" />
<div className="shine-badge-helper">
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
<div className="shine-badge-helper">
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
<div className="shine-badge-helper">
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
<Divider message="大尺寸" />
<div className="shine-badge-helper">
    <Badge bgColor="brand" size="lg">1</Badge>
    <Badge bgColor="grace" size="lg">2</Badge>
    <Badge bgColor="metal" size="lg">3</Badge>
    <Badge bgColor="focus" size="lg">4</Badge>
    <Badge bgColor="primary" size="lg">5</Badge>
    <Badge bgColor="success" size="lg">6</Badge>
    <Badge bgColor="info" size="lg">7</Badge>
    <Badge bgColor="warning" size="lg">8</Badge>
    <Badge bgColor="danger" size="lg">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="square" size="lg">1</Badge>
    <Badge bgColor="grace" borderType="square" size="lg">2</Badge>
    <Badge bgColor="metal" borderType="square" size="lg">3</Badge>
    <Badge bgColor="focus" borderType="square" size="lg">4</Badge>
    <Badge bgColor="primary" borderType="square" size="lg">5</Badge>
    <Badge bgColor="success" borderType="square" size="lg">6</Badge>
    <Badge bgColor="info" borderType="square" size="lg">7</Badge>
    <Badge bgColor="warning" borderType="square" size="lg">8</Badge>
    <Badge bgColor="danger" borderType="square" size="lg">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="rounded" size="lg">1</Badge>
    <Badge bgColor="grace" borderType="rounded" size="lg">2</Badge>
    <Badge bgColor="metal" borderType="rounded" size="lg">3</Badge>
    <Badge bgColor="focus" borderType="rounded" size="lg">4</Badge>
    <Badge bgColor="primary" borderType="rounded" size="lg">5</Badge>
    <Badge bgColor="success" borderType="rounded" size="lg">6</Badge>
    <Badge bgColor="info" borderType="rounded" size="lg">7</Badge>
    <Badge bgColor="warning" borderType="rounded" size="lg">8</Badge>
    <Badge bgColor="danger" borderType="rounded" size="lg">9</Badge>
</div>
<Divider message="更大尺寸" />
<div className="shine-badge-helper">
    <Badge bgColor="brand" size="xl">1</Badge>
    <Badge bgColor="grace" size="xl">2</Badge>
    <Badge bgColor="metal" size="xl">3</Badge>
    <Badge bgColor="focus" size="xl">4</Badge>
    <Badge bgColor="primary" size="xl">5</Badge>
    <Badge bgColor="success" size="xl">6</Badge>
    <Badge bgColor="info" size="xl">7</Badge>
    <Badge bgColor="warning" size="xl">8</Badge>
    <Badge bgColor="danger" size="xl">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="square" size="xl">1</Badge>
    <Badge bgColor="grace" borderType="square" size="xl">2</Badge>
    <Badge bgColor="metal" borderType="square" size="xl">3</Badge>
    <Badge bgColor="focus" borderType="square" size="xl">4</Badge>
    <Badge bgColor="primary" borderType="square" size="xl">5</Badge>
    <Badge bgColor="success" borderType="square" size="xl">6</Badge>
    <Badge bgColor="info" borderType="square" size="xl">7</Badge>
    <Badge bgColor="warning" borderType="square" size="xl">8</Badge>
    <Badge bgColor="danger" borderType="square" size="xl">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="rounded" size="xl">1</Badge>
    <Badge bgColor="grace" borderType="rounded" size="xl">2</Badge>
    <Badge bgColor="metal" borderType="rounded" size="xl">3</Badge>
    <Badge bgColor="focus" borderType="rounded" size="xl">4</Badge>
    <Badge bgColor="primary" borderType="rounded" size="xl">5</Badge>
    <Badge bgColor="success" borderType="rounded" size="xl">6</Badge>
    <Badge bgColor="info" borderType="rounded" size="xl">7</Badge>
    <Badge bgColor="warning" borderType="rounded" size="xl">8</Badge>
    <Badge bgColor="danger" borderType="rounded" size="xl">9</Badge>
</div>
`,
  },
  inline: {
    components,
    jsx:
      `<div className="shine-badge-helper">
    <Badge bgColor="brand" isInline>Shine</Badge>
    <Badge bgColor="success" isInline>Design</Badge>
    <Badge bgColor="primary" isInline>new</Badge>
</div>
`,
  },
  unified: {
    components,
    jsx:
      `<div className="shine-badge-helper">
    <Badge bgColor="brand" isUnify size="lg">1</Badge>
    <Badge bgColor="grace" isUnify size="lg">2</Badge>
    <Badge bgColor="metal" isUnify size="lg">3</Badge>
    <Badge bgColor="focus" isUnify size="lg">4</Badge>
    <Badge bgColor="primary" isUnify size="lg">5</Badge>
    <Badge bgColor="success" isUnify size="lg">6</Badge>
    <Badge bgColor="info" isUnify size="lg">7</Badge>
    <Badge bgColor="warning" isUnify size="lg">8</Badge>
    <Badge bgColor="danger" isUnify size="lg">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="square" isUnify size="lg">1</Badge>
    <Badge bgColor="grace" borderType="square" isUnify size="lg">2</Badge>
    <Badge bgColor="metal" borderType="square" isUnify size="lg">3</Badge>
    <Badge bgColor="focus" borderType="square" isUnify size="lg">4</Badge>
    <Badge bgColor="primary" borderType="square" isUnify size="lg">5</Badge>
    <Badge bgColor="success" borderType="square" isUnify size="lg">6</Badge>
    <Badge bgColor="info" borderType="square" isUnify size="lg">7</Badge>
    <Badge bgColor="warning" borderType="square" isUnify size="lg">8</Badge>
    <Badge bgColor="danger" borderType="square" isUnify size="lg">9</Badge>
</div>
<div className="shine-badge-helper">
    <Badge bgColor="brand" borderType="rounded" isUnify size="lg">1</Badge>
    <Badge bgColor="grace" borderType="rounded" isUnify size="lg">2</Badge>
    <Badge bgColor="metal" borderType="rounded" isUnify size="lg">3</Badge>
    <Badge bgColor="focus" borderType="rounded" isUnify size="lg">4</Badge>
    <Badge bgColor="primary" borderType="rounded" isUnify size="lg">5</Badge>
    <Badge bgColor="success" borderType="rounded" isUnify size="lg">6</Badge>
    <Badge bgColor="info" borderType="rounded" isUnify size="lg">7</Badge>
    <Badge bgColor="warning" borderType="rounded" isUnify size="lg">8</Badge>
    <Badge bgColor="danger" borderType="rounded" isUnify size="lg">9</Badge>
</div>
`,
  },
};

