export function isPangram(sentence:string):boolean {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const target = sentence.toUpperCase().replace(/\s/g,'').split('')
  return alphabet.every(v => target.includes(v))
}
