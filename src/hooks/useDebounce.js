import { useState, useEffect } from 'react'

const useDebounce = (input, delay) => {
  const [value, setValue] = useState()

  useEffect(() => {
    const wait = setTimeout(() => {
      setValue(input)
    }, delay)
    return () => {
      clearTimeout(wait)
    }
  }, [input, delay])

  return value
}

export default useDebounce
