const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));
let ret = 0;

class PriortyQueue {
  constructor() {
    this.values = [];
    this.values.push(-Infinity);
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (true) {
      const parentIdx = parseInt(idx / 2);
      const parent = this.values[parentIdx];
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    if (this.values.length === 2) return this.values.pop();
    let res = this.values[1];
    this.values[1] = this.values.pop();
    this.bubbleDown(1, this.values.length - 1);
    return res;
  }

  bubbleDown(pos, len) {
    let tmp = this.values[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.values[child] > this.values[child + 1]) child++;
      if (tmp <= this.values[child]) break;
      this.values[pos] = this.values[child];
      pos = child;
    }
    this.values[pos] = tmp;
  }
  size() {
    return this.values.length - 1;
  }
  front() {
    return this.values[1];
  }
}

function Solution() {
  if(N === 0) {
    console.log(0);
    return;
  }
  arr.sort((a,b) => a[1] - b[1]);
  const pq = new PriortyQueue();
  pq.enqueue(arr[0][0]);
  let tmp = 1, ret = 0;
  for(let i=1;i<N;i++) {
    if(tmp < arr[i][1]) {
      pq.enqueue(arr[i][0]);
      tmp += 1;
    } else {
      if(pq.front() <arr[i][0]) {
        pq.dequeue();
        pq.enqueue(arr[i][0]);
      }
    }
  }
  const retArr = pq.values.slice(1);
  ret = retArr.reduce((ac, cv) => ac+cv, 0);
  console.log(ret);
}

Solution();