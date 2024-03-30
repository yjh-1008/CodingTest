const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let ret = Number.MAX_VALUE;

class Deque extends Array {
  first() {
    return this[0];
  }

  last() {
    return this[this.values.length-1];
  }

  // remove() {
  //   // if(this.values.length === 0) return;
  //   // const result = this[0];
  //   return this.shift();
  // }

  // pop() {
  //   // if(this.length === 0) return;
  //   return this.pop();
  // }

  rotate(val) {
    if(val > 0) {
      while(val--) {
        this.unshift(this.pop());
        // val--;
      };
    }
    else {
      while(val++) {
        this.push(this.shift());
        // val++;
      }
    }
  }
}


function Solution() {
  const deque = new Deque();
  for(let i=1;i<=N;i++) {
    deque.push(i);
  }
  let count = 0;
  arr.forEach((item) => {

    // console.log(item);
    const idx = deque.indexOf(item);
    // console.log(idx);
    if(idx == 0) deque.shift();
    else {
      if(idx <= Math.floor(deque.length /2)) {
        deque.rotate(-idx);
        deque.shift();
        count += idx;
      } else {
        deque.rotate(deque.length- idx);
        count+= deque.length- idx;
        deque.shift();
   
      }
    }
  });
  console.log(count);
}

Solution();