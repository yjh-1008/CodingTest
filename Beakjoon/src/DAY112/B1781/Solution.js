class MinHeap {
  constructor() {
    this.heap = []
  }

  getLeftChildIndex = parentIndex => parentIndex * 2 + 1
  getRightChildIndex = parentIndex => parentIndex * 2 + 2
  getParentIndex = childIndex => Math.floor((childIndex - 1) / 2)

  peek = () => this.heap[0]

  insert = (key, value) => {
    const node = { key, value }
    this.heap.push(node)
    this.heapifyUp()
  }

  heapifyUp = () => {
    let index = this.heap.length - 1
    const lastInsertedNode = this.heap[index]

    while (index > 0) {
      const parentIndex = this.getParentIndex(index)

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex]
        index = parentIndex
      } else break
    }

    this.heap[index] = lastInsertedNode
  }

  remove = () => {
    const count = this.heap.length
    const rootNode = this.heap[0]

    if (count <= 0) return undefined
    if (count === 1) this.heap = []
    else {
      this.heap[0] = this.heap.pop()
      this.heapifyDown()
    }
    return rootNode
  }

  heapifyDown = () => {
    let index = 0
    const count = this.heap.length
    const rootNode = this.heap[index]

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex

      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex]
        index = smallerChildIndex
      } else break
    }

    this.heap[index] = rootNode
  }
}
class PriorityQueue extends MinHeap {
  constructor() {
    super();
  }


  enqueue = (priority, value) => this.insert(priority, value)
  dequeue = () => this.remove()
  isEmpty = () => this.heap.length <= 0
}

const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const arr = input.slice(1).map(v => v.split(' ').map(Number))
function Solution() {
  let pq = new PriorityQueue()
  arr.sort((a,b)=> {
    if(a[0] === b[0]) return b[1]-a[1];
    else return a[0]-b[0];
  })

  for(let i=0;i<N;i++) {
    pq.enqueue(arr[i][1], arr[i][0]);
    const deadLine = arr[i][0];
    if(pq.heap.length > deadLine) {
      pq.dequeue();
    }
  }
  console.log(pq.heap.reduce((acc, cur) => acc + cur.key, 0))
}

Solution();