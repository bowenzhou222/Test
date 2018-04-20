import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customerFeedbackReducer from './components/customer_feedback/customer_feedback_reducer';


const appReducer = combineReducers({
    customerFeedbackReducer,
});

export default appReducer;
