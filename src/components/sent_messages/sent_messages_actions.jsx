import * as API from './sent_messages_access';


export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages,
});

export function fetchMessages(email) {
    return (dispatch) => {
        API.fetchMessages(email).then(({ ok, messages, responseText }) => {
            if (ok) {
                dispatch(receiveMessages(messages));
            }
        })
    }
};