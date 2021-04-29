/* #region  imports */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import Header from '../header/Header';
import { Container } from 'react-bootstrap';

import { rootPath, routes } from '../routing';
/* #endregion */

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    console.info('location ==> ', location);
  }, [location]);

  return (
    <Container>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={`${rootPath}${route.path}`}
            exact={route.exact}
            children={<route.page />}
          />
        ))}
      </Switch>
    </Container>
  );
};

export default Main;
