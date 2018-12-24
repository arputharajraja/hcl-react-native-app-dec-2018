// app/state/counterReducer.spec.js

import counterReducer from './counterReducer';
import {increment, decrement, reset} from './actions';

describe("counterReducer spec ", () => {
    it("should be 0 initialized ", () => {
        expect(counterReducer(undefined, {})).toBe(0)
    })


    it("should 10 + 5 be 15", () => {
        expect(counterReducer(10, increment(5))).toBe(15)
    })

});