import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import GlobalLayouts from './layouts'

const { ConnectedRouter } = routerRedux;
function RouterConfig({ history, app }) {
  debugger
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/"
               render={props =>
                 <GlobalLayouts {...props} />
               } />
      </Switch>
    </ConnectedRouter>
  );
}
export default RouterConfig;
