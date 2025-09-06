
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(a,b) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b]; 
    this.heap[b] = tmp
  }


  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (
      this.heap[parentIdx] !== undefined &&
      this.heap[index] > this.heap[parentIdx]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  add(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

  bubbleDown() {
    let index = 0;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    while (
      (this.heap[left] !== undefined && this.heap[index] < this.heap[left]) ||
      (this.heap[right] !== undefined && this.heap[index] < this.heap[right])
    ) {
      let bigger = left;
      if (this.heap[right] !== undefined && this.heap[right] > this.heap[left]) {
        bigger = right;
      }
      this.swap(index, bigger);
      index = bigger;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }

  pop() {
    if(this.heap.length === 0) return 0;
    if(this.heap.length === 1) return this.heap.pop(); 
    const ret = this.heap[0];
    this.heap[0] = this.heap.pop()
    this.bubbleDown();
    return ret;
  }
}

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const N = input[0];
const minHeap = new MaxHeap();
for(let i=1;i<input.length;i++) {
  if(input[i] == 0) {
    const ret = minHeap.pop();
    console.log(ret);
  }else {
    minHeap.add(Number(input[i]));
    // console.log(minHeap.heap)
  }
}

