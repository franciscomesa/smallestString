function findSmallestSubstring(inputString: string, characters: string): string | void {
  if (characters === '')
    return ''
  if (characters.length === 1 && inputString.indexOf(characters) !== -1)
    return inputString.charAt(inputString.indexOf(characters))

  return undefined
}

describe('Smallest string function should', () => {
  const firstInputString = 'TDD development rocks'

  it('return empty string if characters is empty', () => {
    expect(findSmallestSubstring(firstInputString, '')).toBe('')
  })

  it ('return the occurrence if characters has only one character', () => {
    expect(findSmallestSubstring(firstInputString, 'e')).toBe('e')
  })

  it ('return undefined if characters has only one character and is not present', () => {
    expect(findSmallestSubstring(firstInputString, 'a')).toBe(undefined)
  })

  it('detect a substring with two characters', () => {
    expect(findSmallestSubstring(firstInputString, 'eo')).toBe('elo')
  })
})
