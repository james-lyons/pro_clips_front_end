import { State, Action } from './config';

function authReducer(state:State = {
    activeItem: ''

}, action: Action) {

    switch(action.type) {
        case "SET_ACTIVE_ITEM":
            return { ...state, activeItem: action.payload };
            
        default:
            return { ...state };
    };
};

export default authReducer;
