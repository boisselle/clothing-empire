// A reducer is a function that receives two properties:
// (1) A state object which represents current/initial state.
// (2) An action with a type and payload, which updates state
import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;