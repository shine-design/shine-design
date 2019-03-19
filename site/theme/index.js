import React from 'react';
import {theme, ThemeConfig} from 'docz';
// import {ThemeProvider} from 'emotion-theming';
import RouterConfig from "./config/router";
import themeConfig from '../theme.config';
import './plugins';
import './styles/index.less';

const Theme = () => RouterConfig;

export default theme(themeConfig)(Theme)
