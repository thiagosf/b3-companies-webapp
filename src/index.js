import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import store from './store'
import routes from './routes'

render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          {routes.routes.map(route => (
            <Route
              exact={true}
              key={route.name}
              path={route.path}
              component={route.component}
              />
          ))}
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
