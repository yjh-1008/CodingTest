
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] =  [this.heap[b], this.heap[a]]
  };

  bubbleUp() {
    let index = this.heap.length -1;
    let parentIdx = Math.floor((index-1)/2);
    while(this.heap[parentIdx] &&
      (
        Math.abs(this.heap[index]) < Math.abs(this.heap[parentIdx]) ||
        (Math.abs(this.heap[index]) === Math.abs(this.heap[parentIdx]) &&
         this.heap[index] < this.heap[parentIdx])
      )
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index-1)/2);
    }
  }

  add(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

 isPrior(a, b) {
  if (Math.abs(a) === Math.abs(b)) return a < b; // 절댓값 같으면 작은 수(음수 우선)
  return Math.abs(a) < Math.abs(b);
 }

  bubbleDown() {
  let index = 0;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  while (true) {
    let smaller = index;
    // console.log('here')
    if(
      this.heap[left] !== undefined&&
      Math.abs(this.heap[left]) < Math.abs(this.heap[index]) ||
      (
        Math.abs(this.heap[left]) === Math.abs(this.heap[index]) &&
         this.heap[left] < this.heap[index]
      )
    ) {
      smaller = left;
    }

    // 오른쪽 자식 비교 (왼쪽과 비교해서 더 우선순위 높은지 체크)
    if (
      (this.heap[right] !== undefined &&
        (
          Math.abs(this.heap[right]) < Math.abs(this.heap[smaller]) ||
          (Math.abs(this.heap[right]) === Math.abs(this.heap[smaller]) &&
            this.heap[right] < this.heap[smaller])
        )
      )
    ) {
      smaller = right;
    }


    if(index === smaller) break;
    this.swap(index, smaller);
    index= smaller
    left = index * 2 +1 ;
    right = index * 2 + 2;
  }
}


  pop() {
    if(this.heap.length === 0) return 0;
    if(this.heap.length === 1) return this.heap.pop();

    const ret = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.bubbleDown();

    return ret;
  }
}

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const answer = [];
const heap = new MinHeap();
for(let i=1;i<input.length;i++) {
  if(input[i] == 0) answer.push(heap.pop());
  else {
    heap.add(Number(input[i]))
      // console.log(heap.heap)
  }

}

console.log(answer.join("\n"));