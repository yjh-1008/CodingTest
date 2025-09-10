class MinHeap {
  constructor() {
    this.arr = [];
  }

  swap(a,b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]]
  }


  bubbleUp() {
    let index = this.arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.arr[index] < this.arr[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }


  add(x) {
    this.arr.push(x);
    this.bubbleUp();
  }

  bubbleDown() {
    let index = 0;

    while(true) {
      let tmp = index;
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      if(this.arr[left] < this.arr.length &&
        this.arr[index] > this.arr[left]
      ) {
        tmp = left;
      }

      if(this.arr[right] < this.arr.length
        &&
        this.arr[tmp] > this.arr[right]
      ) tmp = right;

      if(index === tmp) break;
      this.swap(index, tmp)
      index = tmp;

    }
  }

  pop() {
    if(this.arr.length === 0) return 0;
    else if(this.arr.length === 1) return this.arr.pop();
    const ret = this.arr[0];
    this.arr[0] = this.arr.pop();

    this.bubbleDown();
    return ret;
  }
}

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const heap = new MinHeap();
const answer = [];
for(let i=1;i<input.length;i++) {
  const N = Number(input[i]);
  if(N == 0) {
    answer.push(heap.pop());
  } else {
    heap.add(N);
  }
}

console.log(answer.join("\n").trim())