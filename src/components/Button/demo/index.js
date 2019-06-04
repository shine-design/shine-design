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
    jsx: `
<div class="shine-button-helper">
    <Button bgColor="primary" />
    <Button bgColor="danger" />
    <Button bgColor="warning" />
    <Button bgColor="success" />
    <Button bgColor="info" />
    <Button bgColor="brand" />
</div>
    `,
  },
};

