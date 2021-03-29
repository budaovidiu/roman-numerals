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
  switch (action.type) {
    case actions.CHANGED_NUMERAL_INPUT:
      return {
        ...state,
        toTransform: action.payload.toTransform,
        transformed: action.payload.transformed,
        error: action.payload.error,
      }
    case actions.TOGGLE:
      const newState = {
        toTransform: action.payload.toTransform,
        transformed: action.payload.transformed,
        error: action.payload.error,
        isRoman: !state.isRoman
      }
      return newState
    default:
      return state
  }
}
