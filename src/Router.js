import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { routes } from 'routerConfig';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const Router = () => (
  <BrowserRouter>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </BrowserRouter>
);

export default Router;