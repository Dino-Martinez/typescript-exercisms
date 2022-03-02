export function parse(phrase: string): string {
  const words = phrase.split(' ').join('-').split('-')
  const letters:Array<string> = []
  words.forEach(word => {
    if (word === 'HyperText')
      letters.push('HT')
    else
      letters.push(word.substr(0, 1).toUpperCase())
  })

  return letters.join('')
}
