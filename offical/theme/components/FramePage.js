/**
 * @Component 页面入口组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 17:12
 */
import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import jQuery from 'jquery';
import {Route, Switch} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Container/components/Home';
import Guide from './Container/components/Guide';
import Tutorial from './Container/components/Tutorial';
import ChangeLog from './Container/components/ChangeLog';
import Contribute from './Container/components/Contribute';
import Tools from './Container/components/Tools';

export default class extends Component {

  componentDidMount() {
    jQuery('.js-preloader').fadeOut('slow', jQuery(this).remove);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.location.pathname, nextProps.location.pathname)) {
      const body = jQuery('html,body');
      if (body.scrollTop() !== 0) body.animate({scrollTop: '0px'}, 800);
    }
  }

  render() {
    const {location} = this.props;

    return (
      <Fragment>
        <div className="page js-page">
          <Header location={location} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guide" component={Guide} />
            <Route path="/tools" exact component={Tools} />
            <Route path="/tutorial" exact component={Tutorial} />
            <Route path="/changelog" exact component={ChangeLog} />
            <Route path="/contribute" exact component={Contribute} />
          </Switch>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
