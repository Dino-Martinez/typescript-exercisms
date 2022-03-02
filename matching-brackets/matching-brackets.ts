export function isPaired(input: string): boolean {
  const expected = {
    '(': new Array<string>(),
    '{': new Array<string>(),
    '[': new Array<string>()
  }

  input.split('').forEach(character => {
    switch(character) {
      case '(':
        expected['('].push(')')
        break;
      case '[':
        expected['['].push(']')
        break;
      case '{':
        expected['{'].push('}')
        break;
      case ')':
        expected['('].pop()
        break;
      case ']':
        expected['['].pop()
        break;
      case '}':
        expected['{'].pop()
        break;
    }
  })

  return expected['('].length === 0 && expected['['].length === 0 && expected['{'].length === 0
}
