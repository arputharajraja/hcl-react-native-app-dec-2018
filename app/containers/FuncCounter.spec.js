// app/containers/FuncCounter.spec.js
import {mapDispatchToProps} from './FuncCounter';
import * as actions from '../state/actions';

describe('FuncCounter mapDispatchToProps  test', () => {
    it("check increment dispatch ", () => {
        const dispatch = jest.fn(); //mock function
        const props = mapDispatchToProps(dispatch)
        props.increment();

        expect(dispatch).toBeCalledTimes(1)
        expect(dispatch).toBeCalledWith(actions.increment(1))
    })
})