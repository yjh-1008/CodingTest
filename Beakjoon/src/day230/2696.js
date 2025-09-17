class MaxHeap {
  constructor() {
    this.arr = [];
  }
  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
  add(x) {
    this.arr.push(x);
    let i = this.arr.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.arr[p] >= this.arr[i]) break;
      this.swap(i, p);
      i = p;
    }
  }
  remove() {
    if (this.arr.length === 1) return this.arr.pop();
    const ret = this.arr[0];
    this.arr[0] = this.arr.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
        r = i * 2 + 2,
        tmp = i;
      if (l < this.arr.length && this.arr[l] > this.arr[tmp]) tmp = l;
      if (r < this.arr.length && this.arr[r] > this.arr[tmp]) tmp = r;
      if (tmp === i) break;
      this.swap(i, tmp);
      i = tmp;
    }
    return ret;
  }
  top() {
    return this.arr[0];
  }
  size() {
    return this.arr.length;
  }
}

class MinHeap {
  constructor() {
    this.arr = [];
  }
  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
  add(x) {
    this.arr.push(x);
    let i = this.arr.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.arr[p] <= this.arr[i]) break;
      this.swap(i, p);
      i = p;
    }
  }
  remove() {
    if (this.arr.length === 1) return this.arr.pop();
    const ret = this.arr[0];
    this.arr[0] = this.arr.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
        r = i * 2 + 2,
        tmp = i;
      if (l < this.arr.length && this.arr[l] < this.arr[tmp]) tmp = l;
      if (r < this.arr.length && this.arr[r] < this.arr[tmp]) tmp = r;
      if (tmp === i) break;
      this.swap(i, tmp);
      i = tmp;
    }
    return ret;
  }
  top() {
    return this.arr[0];
  }
  size() {
    return this.arr.length;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let M = null;
let nums = [];
let results = [];
let caseCount = 0;

rl.on("line", function (line) {
  if (T === null) {
    T = Number(line);
  } else {
    if (M === null) {
      M = Number(line);
      nums = [];
    } else {
      nums.push(...line.split(" ").map(Number));
      if (nums.length === M) {
        // 중앙값 구하기
        const left = new MaxHeap();
        const right = new MinHeap();
        const medians = [];

        for (let i = 0; i < M; i++) {
          const x = nums[i];

          if (left.size() === 0 || x <= left.top()) left.add(x);
          else right.add(x);

          // balance
          if (left.size() > right.size() + 1) {
            right.add(left.remove());
          } else if (right.size() > left.size()) {
            left.add(right.remove());
          }

          if ((i + 1) % 2 === 1) {
            medians.push(left.top());
          }
        }

        results.push(medians.length.toString());
        let lineBuf = [];
        for (let i = 0; i < medians.length; i++) {
          lineBuf.push(medians[i]);
          if ((i + 1) % 10 === 0 || i === medians.length - 1) {
            results.push(lineBuf.join(" "));
            lineBuf = [];
          }
        }

        caseCount++;
        M = null;
        if (caseCount === T) rl.close();
      }
    }
  }
}).on("close", () => {
  console.log(results.join("\n"));
  process.exit(0);
});
