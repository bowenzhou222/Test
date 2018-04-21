import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import App from './App';
import { fetchUser } from './components/login/login_actions';

export const history = createBrowserHistory();

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser()),
});

class Index extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.props.fetchUser();
    }
    

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route component={App} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
};

export default connect(null, mapDispatchToProps)(Index);
