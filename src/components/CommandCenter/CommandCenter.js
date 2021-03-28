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

  const handleInputChange = (e) => {
    try {
      const transformed = state.isRoman ? RomanNumerals.fromRoman(e.target.value) : RomanNumerals.toRoman(e.target.value)
      dispatch(
        {
          type: actions.CHANGED_NUMERAL_INPUT,
          payload: {
            input: e.target.value,
            transformed,
            error: undefined
          }
        })
    } catch (error) {
      console.log('still with error')
      dispatch(
        {
          type: actions.CHANGED_NUMERAL_INPUT,
          payload: {
            input: e.target.value,
            error: error.message
          }
        })
    }
  }

  const handleNumeralToggle = (e) => {
    dispatch({ type: actions.TOGGLE })
  }

  const currentTransformation = state.isRoman ? "roman to numerals." : "numerals to roman numbers."

  return (
    <>
      <h3>You're now converting {currentTransformation}</h3>
      <div className={styles.CommandCenter}>
        <input className={styles.NumeralInput} type="text" placeholder='Please enter a value' value={state.toTransform} onChange={(e) => handleInputChange(e)}></input>
        <div className="onoffswitch">
          <input type="checkbox" disabled={state.error} value={state.isRoman} onChange={(e) => handleNumeralToggle(e)} name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0" />
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
