class MaxHeap {
  constructor() {
    this.heap =[];
  }

  swap(a,b) {
    let tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index-1)/2);

    while(index > 0) {
      if(this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex =  Math.floor((index-1)/2);;
      } else {
        break;
      }
    }
  }

  add(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

  bubbleDown() {
    let index = 0;

    while(true) {
      let left = index * 2 +1;
      let right = index * 2 +2;
      let tmp = index;

      if(left < this.heap.length &&
        this.heap[tmp] > this.heap[left]
      ) {
        tmp = left;
      }

      if(right < this.heap.length
        &&
        this.heap[tmp] > this.heap[right]
      )  {
        tmp = right;
      }

      if(index === tmp) break;
      this.swap(index, tmp);
      index = tmp;
    }
  }

  pop() {
    if(this.heap.length ===1) return this.heap.pop();

    const ret = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return ret;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, 

  output: process.stdout,
});
const heap = new MaxHeap()

let N = null
rl.on("line", function (line) {
  if(N === null) {
    N = Number(line)
  } else {
    line.split(" ").map(Number).forEach((v) => {
      const num = parseInt(v);
      if(heap.heap.length < N) {
        heap.add(num)
      } else if(heap.heap[0] < num ){
        heap.pop();
        heap.add(num)
      }
    }); 
  }
}).on("close", () => {
  console.log(heap.pop());
});


