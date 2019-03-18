import React from 'react';
import {theme} from 'docz'
import RouterConfig from "./config/router";
import './plugins';
import './styles/index.less';

const Theme = () => RouterConfig;

const themeConfig = {};

export default theme(themeConfig)(Theme)
