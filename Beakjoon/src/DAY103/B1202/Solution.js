const fs = require('fs');
const [[N, K], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length;
  }
  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (this.heap[parent] < value) {
      this.swap(parent, idx);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    const lastIdx = this.heap.length - 1;
    let idx = 0;
    this.swap(0, lastIdx);
    let value = this.heap.pop();

    while (idx < lastIdx) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;

      if (leftChildIdx >= lastIdx) {
        break;
      } else if (rightChildIdx >= lastIdx) {
        if (this.heap[idx] < this.heap[leftChildIdx]) {
          this.swap(idx, leftChildIdx);
          idx = leftChildIdx;
        } else {
          break;
        }
      } else {
        if (
          this.heap[leftChildIdx] > this.heap[idx] &&
          this.heap[rightChildIdx] > this.heap[idx]
        ) {
          if (this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
            this.swap(idx, leftChildIdx);
            idx = leftChildIdx;
          } else {
            this.swap(idx, rightChildIdx);
            idx = rightChildIdx;
          }
        } else if (this.heap[leftChildIdx] > this.heap[idx]) {
          this.swap(leftChildIdx, idx);
          idx = leftChildIdx;
        } else if (this.heap[rightChildIdx] > this.heap[idx]) {
          this.swap(rightChildIdx, idx);
          idx = rightChildIdx;
        } else {
          break;
        }
      }
    }
    return value;
  }

  print() {
    console.log(this.heap);
  }
}

function Solution() {

  let j = [];
  let b = [];
  for(let i=0;i<N;i++) {
    j.push(input[i]);
  }
  for(let i=N;i<N+K;i++) {
    b.push(input[i]);
  }

j.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

  b.sort((a,b)=> a-b)
  let ret =0;
  let idx=0;
  let pq = new MaxHeap();
  for(let i=0;i<K;i++) {
    while(idx < N && j[idx][0] <= b[i]) {
     
      pq.push(j[idx][1]);
      idx++;
    }
    if(pq.size()) {
      ret+=pq.pop();
    }
   
  }
  return ret
}

console.log(Solution());