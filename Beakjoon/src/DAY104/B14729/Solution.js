const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
class Heap {
  constructor() {
    this.heap=[]
  }

  getLeftChildIndex = (parentIndex) => parentIndex *2 +1;
  getRightChildIndex = (parentIndex) => parentIndex *2 +2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2)

  peek = () => this.heap[0]

  insert = (key, value) => { // 우선순위를 비교하기 위해서 key, value 로 받는다.
    const node = { key, value } // 객체로 node 를 만들고
    this.heap.push(node) // push 한다.
    this.heapifyUp() // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  }

  heapifyUp = () => {
    let index = this.heap.length -1;
    const lastInsertNode = this.heap[index];

    while(index > 0) {
      const parentIndex = this.getParentIndex(index);

      if(this.heap[parentIndex].key > lastInsertNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      }else break;

      
    }
    this.heap[index] = lastInsertNode;
  }

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if(count <= 0) return undefined;
    if(count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode= this.heap[index];


    while(this.getLeftChildIndex(index) < count ){
      const leftChildIdx = this.getLeftChildIndex(index);
      const rightChildIdx = this.getRightChildIndex(index);

      const smallerChildIndex = 
      rightChildIdx < count && this.heap[rightChildIdx].key < this.heap[leftChildIdx].key
      ? rightChildIdx
      :leftChildIdx


      if(this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex]
        index = smallerChildIndex
      }else break;

      this.heap[index] = rootNode
    }
  }
}

class PriorityQueue extends Heap {
  constructor() {
    super()
  }

  enqueue = (priority, value) => this.insert(priority, value)
  dequeue = () => this.remove()
  isEmpty = () => this.heap.length <= 0
}

let pq = new PriorityQueue()
let i = false

rl.on('line', function (line) {
  if (i === false) {
    i = true
  } else {
    let score = parseFloat(line)
    if (pq.heap.length >= 7) {
      pq.enqueue(-score, score)
      pq.dequeue()
    } else {
      pq.enqueue(-score, score)
    }
  }
}).on('close', function () {
  let res = pq.heap.map((obj) => obj.value)
  res = res.sort((a, b) => a - b)
  res = res.map((v) => v.toFixed(3))
  console.log(res.join('\n'))

  process.exit();
})