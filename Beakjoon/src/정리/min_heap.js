class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getParent(index){
    return Math.floor(index/2);
  }

  getLeft(index) {
    return left+1;
  }

  getRight(index) {
    return right+2;
  }

  swap(a,b) {
    // conzz
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }


  push(val) {
    this.heap.push(val);
    let cur = this.heap.length-1;
    let parent = this.getParent(cur);

    while(parent > 0 && this.heap[cur] < this.heap[parent]) {
      this.swap(cur, parent);

      cur = parent;
      parent= this.getParent(cur);
    }

  }

  pop() {
    if(this.heap.length === 2) return this.heap.pop();

    const ret = this.heap[1];
    this.heap[1] = this.heap.pop();
    let cur=  1;
    let left =this.getLeft(cur), right = this.getRight(cur);

    while(
     true
    ) {

      let tmpIdx = cur;

      if(left < this.heap.length && this.heap[left] < this.heap[cur]) {
        tmpIdx= cur;
      } 

      if(right < this.heap.length && this.heap[right] < this.heap[cur]) {
        tmpIdx= right;
      } 

      if(tmpIdx === cur) break;

      this.swap(cur, tmpIdx);
      cur = tmpIdx;
      left = this.getLeft(cur);
      right = this.getRight(cur);

    }

    return ret;
  }


}