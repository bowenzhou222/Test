const defaultState = {};

const customerFeedbackReducer = (state = defaultState, action) => {
    const {type} = action;

    Object.freeze(state)
    const newState = Object.assign({}, state);

    switch(type) {
        default:
            return newState;
    }
};

export default customerFeedbackReducer;