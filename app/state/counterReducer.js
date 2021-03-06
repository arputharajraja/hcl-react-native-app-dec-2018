// app/state/counterReducer.js
import * as ActionTypes from './action-types';

const INITIAL_STATE = 0;

export default function counterReducer(state = INITIAL_STATE, 
                       action) {
    console.log('counterReducer called current state', state, action);

    switch(action.type){
        case ActionTypes.INCREMENT:
            return state + action.payload.value
        case ActionTypes.DECREMENT:
            return state - action.payload.value
        case ActionTypes.RESET:
            return INITIAL_STATE

        default: 
            return state;
    }
}