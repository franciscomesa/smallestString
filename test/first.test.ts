function findSmallestSubstring(inputString: string, characters: string): string | void {
  return undefined
}

describe('Smallest string function should', () => {
  const firstInputString = 'TDD development rocks'
  it('return empty string if characters is empty', () => {
    expect(findSmallestSubstring(firstInputString, '')).toBe('')
  })
})
