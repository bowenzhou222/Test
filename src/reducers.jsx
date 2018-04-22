import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customerFeedbackReducer from './components/customer_feedback/customer_feedback_reducer';
import loginReducer from './components/login/login_reducer';
import messagesReducer from './components/sent_messages/sent_messages_reducer';

const appReducer = combineReducers({
    customerFeedbackReducer,
    loginReducer,
    messagesReducer,
});

export default appReducer;
