import * as API from './login_access';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const loginSuccessful = (user) => ({
    type: LOGIN_SUCCESSFUL,
    user,
});

export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';

export const registerSuccessful = (user) => ({
    type: REGISTER_SUCCESSFUL,
    user,
});

export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

export const fetchSuccessful = (user) => ({
    type: FETCH_SUCCESSFUL,
    user,
});

export function login(payload, success, fail) {
    return (dispatch) => {
        API.login(payload).then(({ ok, user, responseText }) => {
            if (ok) {
                dispatch(loginSuccessful(user));
                if (success) {
                    success();
                }
            } else {
                if (responseText && fail) {
                    responseText.then((t) => {fail(t)});
                } else if(fail) {
                    fail('Error when log in. please try again later');
                }
            }
        })
    }
};

export function register(payload, success, fail) {
    return (dispatch) => {
        API.register(payload).then(({ ok, user, responseText }) => {
            if (ok) {
                dispatch(registerSuccessful(user));
                if (success) {
                    success();
                }
            } else {
                if (responseText && fail) {
                    responseText.then((t) => {fail(t)});
                } else if(fail){
                    fail('Error when register. please try again later');
                }
            }
        })
    }
};

export function fetchUser() {
    return (dispatch) => {
        API.fetchUser().then(({ ok, user, responseText }) => {
            if (ok) {
                dispatch(fetchSuccessful(user));
            }
        })
    }
};