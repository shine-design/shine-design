/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Alert} from 'shineDev';

const components = {Alert};

export default {
  basic: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="success" title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
    <Alert bgColor="primary" title="Heads up!" isOpen={true}>This alert needs your attention, but it's not super important.</Alert>
    <Alert bgColor="warning" title="Warning!" isOpen={true}>Better check yourself, you're not looking too good.</Alert>
    <Alert bgColor="danger" title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
    <Alert outlineColor="success"  title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
    <Alert outlineColor="primary" title="Heads up!" isOpen={true}>This alert needs your attention, but it's not super important.</Alert>
    <Alert outlineColor="warning"  title="Warning!" isOpen={true}>Better check yourself, you're not looking too good.</Alert>
    <Alert outlineColor="danger" title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
</div>`,
  },
  alertStyle: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="success" alertStyle="square" title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
    <Alert bgColor="primary" alertStyle="square" title="Heads up!" isOpen={true}>This alert needs your attention, but it's not super important.</Alert>
    <Alert outlineColor="warning" alertStyle="square" title="Warning!" isOpen={true}>Better check yourself, you're not looking too good.</Alert>
    <Alert outlineColor="danger" alertStyle="square" title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
</div>`,
  },
  air: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="success" isAir={true} title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
    <Alert bgColor="primary" isAir={true} title="Heads up!" isOpen={true}>This alert needs your attention, but it's not super important.</Alert>
    <Alert outlineColor="warning" isAir={true} title="Warning!" isOpen={true}>Better check yourself, you're not looking too good.</Alert>
    <Alert outlineColor="danger" isAir={true} title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
</div>`,
  },
  double: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert outlineColor="danger" title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
    <Alert outlineColor="danger" isDoubleOutline={true} isAir={true} title="Oh snap!" isOpen={true}>Change a few things up and try submitting again.</Alert>
    <Alert outlineColor="success" title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
    <Alert outlineColor="success" isDoubleOutline={true} title="Well done!" isOpen={true}>You successfully read this important alert message.</Alert>
</div>`,
  },
  icon: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="danger" title="Oh snap!" isOpen={true} iconProps={{iconName:"warning"}}>Change a few things up and try submitting again.</Alert>
    <Alert outlineColor="danger" title="Oh snap!" isOpen={true} iconProps={{iconName:"warning"}}>Change a few things up and try submitting again.</Alert>
</div>`,
  },
};
