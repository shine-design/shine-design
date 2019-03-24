import {theme} from 'docz';
import './plugins';
import RouterConfig from "./config/router";
import themeConfig from '../theme.config';
import './styles/index.scss';

const Theme = () => RouterConfig;

export default theme(themeConfig)(Theme)
