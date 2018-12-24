// app/state/actions.spec.js
import * as actions from './actions';
import * as ActionTypes from './action-types';

describe('Test the Increment action', () => {
    it("increment action", () => {
        expect(actions.increment(5)).toEqual({
            type: ActionTypes.INCREMENT,
            payload: {value: 5}
        })
    })
})