import React, { useEffect, useReducer } from 'react'
import RomanNumerals from '../../utils/romanNumerals'
import styles from './CommandCenter.module.css'
import { actions, initialState, numeralsReducer } from './numeralsReducer'

const CommandCenter = ({ convert }) => {
  const [state, dispatch] = useReducer(numeralsReducer, initialState)

  useEffect(() => {
    const { error, transformed } = state
    convert({ error, transformed })
  }, [state])

  const transform = (input, isRoman) => {
    const conversion = {
      transformed: undefined,
      error: undefined
    }

    try {
      const transformed = isRoman ? RomanNumerals.fromRoman(input) : RomanNumerals.toRoman(input)
      conversion.transformed = transformed
    } catch (e) {
      conversion.error = e.message
    }
    return conversion
  }

  const handleInputChange = (e) => {
    const { error, transformed } = transform(e.target.value, state.isRoman)
    dispatch(
      {
        type: actions.CHANGED_NUMERAL_INPUT,
        payload: {
          toTransform: e.target.value,
          transformed,
          error
        }
      })
  }

  const handleNumeralToggle = (e) => {
    const toTransform = state.transformed ? state.transformed : state.toTransform
    const { error, transformed } = transform(state.transformed ? state.transformed : state.toTransform, e.target.checked)
    dispatch(
      {
        type: actions.TOGGLE,
        payload: {
          toTransform,
          transformed,
          error
        }
      })
  }

  const currentTransformation = state.isRoman ? "roman to numerals." : "numerals to roman numbers."

  return (
    <>
      <h3>You're now converting {currentTransformation}</h3>
      <div className={styles.CommandCenter}>
        <input className={styles.NumeralInput} type="text" placeholder='Please enter a value' value={state.toTransform} onChange={(e) => handleInputChange(e)}></input>
        <div className="onoffswitch">
          <input type="checkbox" value={state.isRoman} onChange={(e) => handleNumeralToggle(e)} name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0" />
          <label className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label>
        </div>
      </div>
    </>
  )
}

export default React.memo(CommandCenter)
