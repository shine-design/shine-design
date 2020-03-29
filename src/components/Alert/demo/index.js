/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Alert,Divider} from 'shineDev';

const components = {Alert,Divider};

export default {
  basic: {
    components,
    jsx:
      `<Divider message="基础类型" /><br />
<div className="shine-alert-helper">
    <Alert bgColor="success" isOpen>A simple success alert—check it out!</Alert>
    <Alert bgColor="primary" isOpen>A simple primary alert—check it out!</Alert>
    <Alert bgColor="warning" isOpen>A simple warning alert—check it out!</Alert>
    <Alert bgColor="danger" isOpen>A simple danger alert—check it out!</Alert>
    <Alert bgColor="secondary" isOpen isElevate>A simple secondary alert—check it out!</Alert>
    <Alert bgColor="info" isOpen>A simple info alert—check it out!</Alert>
    <Alert bgColor="dark" isOpen>A simple dark alert—check it out!</Alert>
</div>
<Divider message="轮廓类型" /><br />
<div className="shine-alert-helper">
    <Alert bgColor="success" isOutline isOpen>A simple success alert—check it out!</Alert>
    <Alert bgColor="primary" isOutline isOpen>A simple primary alert—check it out!</Alert>
    <Alert bgColor="warning" isOutline isOpen>A simple warning alert—check it out!</Alert>
    <Alert bgColor="danger" isOutline isOpen>A simple danger alert—check it out!</Alert>
    <Alert bgColor="info" isOutline isOpen>A simple info alert—check it out!</Alert>
    <Alert bgColor="dark" isOutline isOpen>A simple dark alert—check it out!</Alert>
</div>
<Divider message="实心类型" /><br />
<div className="shine-alert-helper">
    <Alert bgColor="success" isSolid isOpen>A simple success alert—check it out!</Alert>
    <Alert bgColor="primary" isSolid isOpen>A simple primary alert—check it out!</Alert>
    <Alert bgColor="warning" isSolid isOpen>A simple warning alert—check it out!</Alert>
    <Alert bgColor="danger" isSolid isOpen>A simple danger alert—check it out!</Alert>
    <Alert bgColor="info" isSolid isOpen>A simple info alert—check it out!</Alert>
    <Alert bgColor="dark" isSolid isOpen>A simple dark alert—check it out!</Alert>
</div>
`,
  },
  air: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="secondary" isOpen>You successfully read this important alert message.</Alert>
    <Alert bgColor="secondary" isElevate isOpen>You successfully read this important alert message.</Alert>
</div>`,
  },
  icon: {
    components,
    jsx:
      `<div className="shine-alert-helper">
    <Alert bgColor="success" iconName="flaticon-warning" isOpen>A simple success alert—check it out!</Alert>
    <Alert bgColor="primary" iconName="flaticon-questions-circular-button" isOpen>A simple primary alert—check it out!</Alert>
    <Alert bgColor="warning" iconName="flaticon-warning" isOpen>A simple warning alert—check it out!</Alert>
    <Alert bgColor="danger" iconName="flaticon-questions-circular-button" isOpen>A simple danger alert—check it out!</Alert>
    <Alert bgColor="secondary" iconName="flaticon-warning" isOpen>A simple secondary alert—check it out!</Alert>
    <Alert bgColor="info" iconName="flaticon-questions-circular-button" isOpen>A simple info alert—check it out!</Alert>
    <Alert bgColor="dark" iconName="flaticon-warning" isOpen>A simple dark alert—check it out!</Alert>
</div>`,
  },
  custom: {
    components,
    jsx:
      `
<div className="shine-alert-helper">
  <Alert bgColor="success" isOpen title="Well done!">
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer 
    so that you can see how spacing within an alert works with this kind of content.</p>
    <hr />
    <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>  
  </Alert>
</div>
`,
  },
};
