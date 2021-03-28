export const initialState = {
  toTransform: '',
  isRoman: false,
  transformed: '',
  error: undefined
}

export const actions = {
  'CHANGED_NUMERAL_INPUT': 'CHANGED_NUMERAL_INPUT',
  'TOGGLE': 'TOGGLE',
}

export const numeralsReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actions.CHANGED_NUMERAL_INPUT:
      return {
        ...state,
        toTransform: action.payload.input,
        transformed: action.payload.transformed,
        error: action.payload.error,
      }
    case actions.TOGGLE:
      // just swap to transform value to already transformed one
      const newState = {
        ...state,
        toTransform: state.transformed,
        isRoman: !state.isRoman,
        transformed: state.toTransform,
      }
      return newState
    default:
      return state
  }
}
