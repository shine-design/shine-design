/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Button, Modal} from 'shineDev';
import basic from '!!raw-loader!./Basic';
import size from '!!raw-loader!./Size';
import center from '!!raw-loader!./Center';


const components = {Modal, Button};
export default {
  basic: {
    components,
    jsx: basic,
  },
  size: {
    components,
    jsx: size,
  },
  center: {
    components,
    jsx: center,
  },
};
