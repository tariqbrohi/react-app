import {combineReducers} from 'redux';

const signUp = (state = [], action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers(
    {
        signUp: signUp
    }
);