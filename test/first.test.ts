function findSmallestSubstring(inputString: string, characters: string): string | void {
  if (characters === '')
    return ''
  if (characters.length === 1 && inputString.indexOf(characters) !== -1)
    return inputString.charAt(inputString.indexOf(characters))

  const charactersPositions = Array.from(characters).map(character => inputString.indexOf(character))
  if (charactersPositions.find(position => position === -1))
    return undefined

  const firstCharacter = inputString.indexOf(characters[0])
  const secondCharacter = inputString.indexOf(characters[1], firstCharacter)

  const temporalResult = inputString.substring(firstCharacter, secondCharacter + 1)
  const lastApparitionOfFirstCharacter = temporalResult.lastIndexOf(characters[0])
  return lastApparitionOfFirstCharacter === -1
    ? inputString.substring(firstCharacter, secondCharacter + 1)
    : temporalResult.substring(lastApparitionOfFirstCharacter)

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

  it('detect the shortest substring with two characters', () => {
    expect(findSmallestSubstring(firstInputString, 'eo')).toBe('elo')
  })

  it('detect the shortest substring with two characters if it is at the end of the string', () => {
    expect(findSmallestSubstring(firstInputString, 'es')).toBe('ent rocks')
  })

  it('detect the shortest substring with three characters', () => {
    expect(findSmallestSubstring(firstInputString, 'eto')).toBe('opment')
  })

})
