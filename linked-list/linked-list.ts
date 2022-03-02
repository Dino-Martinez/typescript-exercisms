
class Node {
  _data: any
  _prev: Node | null
  _next?: Node | null
  constructor(data: any, prev: Node | null, next: Node | null) {
    this._data = data
    this._prev = prev 
  }
}

export class LinkedList<TElement> {
  _head?: Node | null
  _tail?: Node | null
  _count: number = 0

  public push(element: TElement) {
    if (this._head && this._tail) {
      const next = new Node(element, this._tail, null)
      this._tail._next = next 
      this._tail = next
    } else {
      const next = new Node(element, null, null)
      this._head = next 
      this._tail = next
    }

    this._count++
  }

  public pop(): TElement {
    const data = this._tail!._data 
    if (this._tail?._prev)
      this._tail._prev._next = null
    this._tail = this._tail!._prev
    this._count--
    return data
  }

  public shift(): TElement {
    const data = this._head!._data 
    if (this._head?._next)
      this._head._next._prev = null
    this._head = this._head!._next
    this._count--
    return data
  }

  public unshift(element: TElement) {
    if (this._head && this._tail) {
      const prev = new Node(element, null, this._head)
      this._head._prev = prev 
      this._head = prev
    } else {
      const prev = new Node(element, null, null)
      this._head = prev 
      this._tail = prev
    }

    this._count++
  }

  public delete(element: unknown) {
    throw new Error('Remove this statement and implement this function')
  }

  public count(): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}
