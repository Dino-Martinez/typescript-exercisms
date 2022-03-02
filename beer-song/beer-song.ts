function nextSubject(index: number): string {
  if (index === 2)
    return '1 bottle of beer on the wall'
  if (index === 1)
    return 'no more bottles of beer on the wall'
  
  return `${index-1} bottles of beer on the wall`
}

export function verse(index: number): string {
  let conjunction = 'one'
  let suffix = 's'
  if (index === 1) {
    conjunction = 'it'
    suffix = ''
  }

  if (index === 0) {
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
  }

  return `${index} bottle${suffix} of beer on the wall, ${index} bottle${suffix} of beer.
Take ${conjunction} down and pass it around, ${nextSubject(index)}.
`
}

export function sing(
  initialBottlesCount: number = 99,
  finalBottlesCount: number = 0
): string {
  let song = ''
  for (let i = initialBottlesCount; i >= finalBottlesCount; i--) {
    song += verse(i) + '\n'
  }
  // slicing to remove final carriage return
  return song.slice(0, -1)
}
