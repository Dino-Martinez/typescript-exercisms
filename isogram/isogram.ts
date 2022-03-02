export function isIsogram(phrase:string): boolean {
  const characters = phrase.replaceAll('-','').replaceAll(' ','').toLowerCase().split('')
  let isogramity = true
  characters.forEach((left, index) => {
    characters.slice(index + 1).forEach(right => {
      if (left === right)
        isogramity = false
    })
  })

  return isogramity
}
