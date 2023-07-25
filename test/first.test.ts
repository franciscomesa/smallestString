function findSmallestSubstring(inputString: string, characters: string): string | void {
  if (characters === '')
    return ''
  if (characters.length === 1 && inputString.indexOf(characters) !== -1)
    return inputString.charAt(inputString.indexOf(characters))

  const charactersPositions = Array.from(characters).map(character => inputString.indexOf(character))
  if (charactersPositions.find(position => position === -1))
    return undefined

  const sortPositions = (a: number, b: number) => a - b
  const firstCharacter = charactersPositions.sort(sortPositions)[0]
  const secondCharacter = charactersPositions.sort(sortPositions).reverse()[0]
  const longestSubstring = inputString.substring(firstCharacter, secondCharacter + 1)

  let trimmedLeftInputString = longestSubstring
  for (let currentIndex = 1; currentIndex < longestSubstring.length; currentIndex++) {
    const tryWithRightSubString = findSmallestSubstring(longestSubstring.substring(currentIndex), characters);
    if (tryWithRightSubString !== undefined && tryWithRightSubString !== '') {
      trimmedLeftInputString = tryWithRightSubString;
      break;
    }
  }
  let fullTrimmedInputString = trimmedLeftInputString
  for (let currentIndex = longestSubstring.length - 1; currentIndex > 0; currentIndex--) {
    const tryWithLeftSubString = findSmallestSubstring(trimmedLeftInputString.substring(currentIndex), characters);
    if (tryWithLeftSubString !== undefined && tryWithLeftSubString !== '') {
      fullTrimmedInputString = tryWithLeftSubString;
      break;
    }
  }

  return fullTrimmedInputString
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

  it('detect the shortest substring with three characters and ', () => {
    expect(findSmallestSubstring(firstInputString, 'elo')).toBe('elo')
  })

})
