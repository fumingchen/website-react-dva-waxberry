import React, { PureComponent } from 'react'
import { Route, Switch } from 'dva/router';
import styles from './index.less'
import Home from '../../routes/Home'

export default class GlobalMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const routes = [{
      path: '/home',
      component: Home
    }];
    return(
      <div className={styles.content}>
        <Switch>
          {routes.map(item=>(
            <Route path={item.path}
                   component={item.component}
            />
          ))}
        </Switch>
      </div>
    )
  }
}
