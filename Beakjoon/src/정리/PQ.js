export class MIN_HEAP {
  constructor() {
    this.arr = [null];
  }

  getParent(cur) {
    return Math.floor(cur/2);
  }

  getLeft(cur) {
    return cur * 2 +1;
  }

  getRight(cur) {
    return cur* 2 + 2;
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  add(val) {
    this.arr.push(val);
    let cur = this.arr.length-1;
    let parent = this.getParent(cur);
    
    while(cur > 0 && this.arr[cur] < this.arr[parent]) {
      this.swap(cur, parent);
      cur = parent;
      parent = this.getParent(cur);
    }
  }



  pop() {
    const ret = this.arr[1];
    if(this.arr.length === 1) return ret;
    this.arr[1] = this.arr.pop();
    let cur = 1;
    let left = this.getLeft(cur), right = this.getRight(cur);

    while((this.arr[left] && this.arr[cur] > this.arr[left])
      || (this.arr[right]  && this.arr[cur] > this.arr[right])
    ) {
      let tmp = cur
      if(left && this.arr[cur] > this.arr[left]) {
        tmp = left;
      }

      if( right  && this.arr[cur] > this.arr[right]) {
        tmp = right;
      }

      if(tmp === cur) break;
      this.swap(cur, tmp);
      left = this.getLeft(cur), right = this.getRight(cur);
    }
    
    return ret;
  }
}