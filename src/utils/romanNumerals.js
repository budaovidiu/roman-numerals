const RomanNumerals = (() => {
  const toRoman = (inputStr) => {
    let inputAsInt = parseInt(inputStr)
    let res = ''
    const numeralRegex = new RegExp('^[0-9]+$')
    if (inputStr.length > 0 && !numeralRegex.test(inputStr)) throw new Error('Invalid input (should contain numbers from 0-9)')

    if (inputAsInt === 0) return res

    for (const [key, value] of Object.entries(ROMAN_NUMBERS)) {
      if (inputAsInt >= value && inputAsInt > 0) {
        const occurances = inputAsInt / value
        res = res + key.repeat(occurances)
        inputAsInt = inputAsInt % value
      }
    }
    return res
  }

  const fromRoman = (inputStr) => {
    let res = 0
    // I've found the regex by googleing
    const romanRegex = new RegExp('^(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)$')
    if (!romanRegex.test(inputStr)) throw new Error('Invalid input (should contain roman characters ex: XVI)')

    // going to split the string into an array and then itterate and sum up everything
    for (let i = 0; i < inputStr.length; i++) {
      const prev = inputStr[i - 1]
      if (ROMAN_NUMBERS[prev] < ROMAN_NUMBERS[inputStr[i]]) {
        res = res - 2 * ROMAN_NUMBERS[prev]
      }
      res = res + ROMAN_NUMBERS[inputStr[i]]
    }

    return res
  }

  return { toRoman, fromRoman }
})()

const ROMAN_NUMBERS = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

export default RomanNumerals;
