import {Col as ColComponent, Row as RowComponent} from './components/Grid';
import {Bar as BarComponent, Progress as ProgressComponent} from './components/ProgressBar';
import './styles/style.scss';

/** 栅格行 */
export const Row = RowComponent;
/** 栅格列 */
export const Col = ColComponent;
/** 进度条容器 */
export const Progress = ProgressComponent;
/** 进度条项 */
export const Bar = BarComponent;
/** 徽章 */
export {default as Badge} from './components/Badge';
/** 按钮 */
export {default as Button} from './components/Button';
/** 表单控制 */
export {default as Form} from './components/Form';
/** 输入框 */
export {default as Input} from './components/Input';
/** 复选框 */
export {default as Checkbox} from './components/Checkbox';
/** 复选框组 */
export {default as CheckboxGroup} from './components/Checkbox/Group';
/** 单选框 */
export {default as Radio} from './components/Radio';
/** 单选框组 */
export {default as RadioGroup} from './components/Radio/Group';
/** 多行输入框 */
export {default as TextArea} from './components/TextArea';
/** 下拉选择 */
export {default as Select} from './components/Select';
/** 下拉选项 */
export {default as SelectOption} from './components/Select/Option';
/** 模态框 */
export {default as Modal} from './components/Modal';
/** 图标 */
export {default as Icon} from './components/Icon';
/** 警告提示 */
export {default as Alert} from './components/Alert';
/** 分隔线 */
export {default as Divider} from './components/Divider';
/** 开关 */
export {default as Switch} from './components/Switch';
/** 下拉菜单 */
export {default as Dropdown} from './components/Dropdown';
/** 分页 */
export {default as Pagination} from './components/Pagination';

/** 内部组件 */
export {default as Options} from './components/Option/Options';
export {default as OptionsGroup} from './components/Option/OptionsGroup';
export {default as DropdownOptions} from './components/Dropdown/Options';
