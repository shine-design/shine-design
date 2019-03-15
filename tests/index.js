import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// 配置 Enzyme 解析器
Enzyme.configure({
    adapter: new Adapter(),
});

export default Enzyme;