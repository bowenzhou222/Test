import { RECEIVE_MESSAGES } from './sent_messages_actions';

const defaultState = {
    messages: [],
};

const messagesReducer = (state = defaultState, action) => {
    const {
        type,
        messages,
    } = action;

    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(type) {
        case RECEIVE_MESSAGES:
            return Object.assign({}, newState, { messages: messages.messages });
        default:
            return newState;
    }
}

export default messagesReducer;