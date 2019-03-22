/**
 * MDX 封装组件入口
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 22:32
 */
import {Playground, PropsTable} from 'docz';

/** 模块组件 */
export {default as Section} from './Section';
/** 代码展示组件 */
export {default as Code} from './Code';
/** 代码效果组件 */
export {default as Preview} from './Preview';
/** 表格组件 */
export {default as Table} from './Table';
/** 一级标题组件 */
export {default as H1} from './H1';
/** 二级标题组件 */
export {default as H2} from './H2';
/** 无序列表 */
export {default as Ul} from './Ul';
/** 第三方组件 */
export {
  /** 容器组件：用于覆盖在 代码效果组件 外层 */
    Playground,
  /** 参数组件：用于根据组件 Props 属性自动生成表格 */
    PropsTable,
};

