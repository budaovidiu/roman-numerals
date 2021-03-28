import RomanNumerals from './romanNumerals';

describe('toRoman of RomanNumerals', () => {
  test('with 0 should return empty string', () => {
    expect(RomanNumerals.toRoman(0)).toBe('')
  })

  test('with wrong string should throw error', () => {
    expect(() => RomanNumerals.toRoman('a1')).toThrow('Invalid input (should contain numbers from 0-9')
  })

  test('with 4 should return correct value', () => {
    expect(RomanNumerals.toRoman('4')).toBe('IV')
  })

  test('with 9 should return correct value', () => {
    expect(RomanNumerals.toRoman('9')).toBe('IX')
  })

  test('with 20 should return correct value', () => {
    expect(RomanNumerals.toRoman(20)).toBe('XX')
  })

  test('with 449 as string should return correct value', () => {
    expect(RomanNumerals.toRoman('449')).toBe('CDXLIX')
  })

  test('with 999 as Int should return correct value', () => {
    expect(RomanNumerals.toRoman(999)).toBe('CMXCIX')
  })

  test('with 1000 as Int should return correct value', () => {
    expect(RomanNumerals.toRoman(1000)).toBe('M')
  })
})

describe('fromRoman of RomanNumerals', () => {
  test('with wrong string should throw error', () => {
    expect(() => RomanNumerals.fromRoman('AAAA')).toThrow('Invalid input (should contain roman characters ex: XVI)')
  })

  test('with M should return correct value', () => {
    expect(RomanNumerals.fromRoman('M')).toBe(1000)
  })

  test('with XXXVIII(38) should return correct value', () => {
    expect(RomanNumerals.fromRoman('XXXVIII')).toBe(38)
  })

  test('with CMXCIX(999) should return correct value', () => {
    expect(RomanNumerals.fromRoman('CMXCIX')).toBe(999)
  })

  test('with CDXLIX(449) should return correct value', () => {
    expect(RomanNumerals.fromRoman('CDXLIX')).toBe(449)
  })

  test('with VIII(8) should return correct value', () => {
    expect(RomanNumerals.fromRoman('VIII')).toBe(8)
  })
})
