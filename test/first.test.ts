function findSmallestSubstring(inputString: string, characters: string): string | void {
  if (characters === '')
    return ''
  if (characters.length === 1)
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

})
