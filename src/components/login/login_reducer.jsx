import { LOGIN_SUCCESSFUL, REGISTER_SUCCESSFUL, FETCH_SUCCESSFUL } from './login_actions';

const defaultState = {
    user: {},
};

const loginReducer = (state = defaultState, action) => {
    const {
        type,
        user,
    } = action;

    Object.freeze(state)
    const newState = Object.assign({}, state);
    switch(type) {
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, newState, { user });
        case REGISTER_SUCCESSFUL: 
            return Object.assign({}, newState, { user });   
        case FETCH_SUCCESSFUL:
            return Object.assign({}, newState, { user });               
        default:
            return newState;
    }
};

export default loginReducer;