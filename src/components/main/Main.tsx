/* #region  imports */
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../header/Header';
import { Container } from 'react-bootstrap';

import { rootPath, routes } from '../routing';
/* #endregion */

interface MainProps {}

const Main: React.FC<MainProps> = () => {
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
            path={route.path}
            // exact={route.exact}
            children={<route.page />}
          />
        ))}
      </Switch>
    </Container>
  );
};

export default Main;
