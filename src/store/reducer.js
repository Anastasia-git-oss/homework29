import { ADD_COUNTER, SUBTRACT_COUNTER } from "./actions";


const initialState = {
    count: 0,
}

export function userReducer (state = initialState, action) {
    let newStore;
    switch (action.type) {
        case ADD_COUNTER:
            newStore = {
                ...state,
                count: state.count + action.recalculate
            };
            return newStore;
    
        case SUBTRACT_COUNTER:
            newStore = {
                ...state,
                count: state.count - action.recalculate
            };
            return newStore;
    }
    return state;
}