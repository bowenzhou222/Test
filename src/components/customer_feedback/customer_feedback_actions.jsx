import * as API from './customer_feedback_access';

export function sendMessage(payload, success, fail) {
    return (dispatch) => {
        API.sendMessage(payload).then(({ ok, responseText }) => {
            if (ok) {
                if (success) {
                    success();
                }
            } else {
                if (responseText && fail) {
                    responseText.then((t) => {fail(t)});
                } else if(fail){
                    fail('Error when sending message. Please try again');
                }
            }
        })
    }
};