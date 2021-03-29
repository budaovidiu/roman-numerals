import { actions, initialState, numeralsReducer } from "./numeralsReducer";

describe('numerals reducer', () => {
  it('should return the initial/default state', () => {
    expect(numeralsReducer(initialState, {})).toEqual(initialState)
  })
  it('should handle CHANGED_NUMERAL_INPUT', () => {
    expect(numeralsReducer(initialState, {
      type: actions.CHANGED_NUMERAL_INPUT,
      payload: {
        toTransform: 4,
        transformed: 'IV',
        error: undefined
      }
    })).toEqual({ toTransform: 4, isRoman: false, error: undefined, transformed: 'IV' })
  })
  it('should handle TOGGLE', () => {
    expect(numeralsReducer(initialState, {
      type: actions.TOGGLE,
      payload: {
        toTransform: 4,
        transformed: 'IV',
        error: undefined
      }
    })).toEqual({ toTransform: 4, isRoman: true, error: undefined, transformed: 'IV' })
  })
});
