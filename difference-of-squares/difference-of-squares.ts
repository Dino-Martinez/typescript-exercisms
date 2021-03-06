
export class Squares {
  count: number
  constructor(count: number) {
    this.count = count
  }

  get sumOfSquares(): number {
    let sum = 0
    for (let i = 1; i < this.count + 1; i++) {
      sum += Math.pow(i, 2)
    }

    return sum
  }

  get squareOfSum(): number {
    let sum = 0
    for (let i = 1; i < this.count + 1; i++) {
      sum += i
    }

    return Math.pow(sum, 2)
  }

  get difference(): number {
    return Math.abs(this.squareOfSum - this.sumOfSquares)
  }
}
