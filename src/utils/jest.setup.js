/**
 * @File 单元测试 - Enzyme Adapter
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 13:49:23
 */
import Enzyme, { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

export default Enzyme;