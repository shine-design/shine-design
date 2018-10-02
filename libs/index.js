import './sass/base.scss';

const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
    console.warn(
        'You are using a whole package of shine, ' +
        'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
    );
}

export {default as Row} from './components/Row/Row';
export {default as Col} from './components/Col/Col';
export {default as Icon} from './components/Icon/Icon';
export {default as Button}  from './components/Button/Button';
export {default as Group} from './components/Group/Group';
export {default as Alert} from './components/Alert/Alert';

// Form
export {default as Form} from './components/Form/Form';
export {default as Input} from './components/Input/Input';
export {default as SymbolInput} from './components/SymbolInput/SymbolInput';

// Data
export {default as Progress} from './components/Progress/Progress';
export {default as Badge} from './components/Badge/Badge';
export {default as Table} from './components/Table/Table';

// Other
export {default as Divider} from './components/Divider/Divider';
export {default as Modal} from './components/Modal/Modal';
