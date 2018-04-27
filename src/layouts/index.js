import React, { PureComponent } from 'react'
import { Route, Redirect, Switch, routerRedux } from 'dva/router';
import GlobalHeader from './GlobalHeader'
import GlobalMain from './GlobalMain'
import GlobalFooter from './GlobalFooter'

export default class GlobalLayouts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <GlobalHeader {...this.props}/>
        <GlobalMain/>
        <GlobalFooter/>
      </div>
    )
  }
}
