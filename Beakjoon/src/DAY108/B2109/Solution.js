const fs = require('fs');
const [N,...input] = fs.readFileSync('./index.txt').toString().trim().split('\n').map((v)=>v.split(' ').map(Number));

class Heap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }
  insert(val) {
    this.heap.push(val); 
    this.upheap(this.heap.length - 1); 
  }
  upheap(pos) {
    let tmp = this.heap[pos]; 
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2); 
    }
    this.heap[pos] = tmp; 
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop(); 
    this.downheap(1, this.heap.length - 1);
    return res; 
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child]; 
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}

  


function Solution(){
  console.log(N)
  let ret = 0;
  if (N[0] === 0) {
    console.log(0);
    return 0;
  }
  input.sort((a,b)=>  a[1] - b[1])
  let tmp  = 1;
  let pq = new Heap();
  pq.insert(input[0][0]);
  for (let i = 1; i < input.length; i++) {
    if (time < input[i][1]) {
      pq.insert(input[i][0]);
      tmp++;
    } else {
      if (pq.front() < input[i][0]) {
        pq.get();
        pq.insert(input[i][0]);
      }
    }
  }
  let pq_size = pq.size();
  for (let i = 0; i < pq_size; i++) {
    ret += pq.get();
  }
  console.log(ret);
}

Solution();