import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './App';

export const history = createBrowserHistory();

const Index = ({ store }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Index;
