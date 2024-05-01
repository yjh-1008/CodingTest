class MinHeap {
  constructor() {
      this.heap = [ null ];
  }
  
  size() {
      return this.heap.length - 1;
  }
  
  getMin() {
      return this.heap[1] ? this.heap[1] : null;
  }
  
  swap(a, b) {
      [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
  }
  
  heappush(value) {
      this.heap.push(value);
      let curIdx = this.heap.length - 1;
      let parIdx = Math.floor(childIdx/2);
      
      while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
          this.swap(parIdx, curIdx)
          curIdx = parIdx;
          parIdx = Math.floor(childIdx/2);
      }
  }
  
  heappop() {
      const min = this.heap[1];	
      if(this.heap.length <= 2) this.heap = [ null ];
      else this.heap[1] = this.heap.pop();   
      
      let curIdx = 1;
      let leftIdx = curIdx * 2;
      let rightIdx = curIdx * 2 + 1; 
      
      if(!this.heap[leftIdx]) return min;
      if(!this.heap[rightIdx]) {
          if(this.heap[leftIdx] < this.heap[curIdx]) {
              this.swap(leftIdx, curIdx);
          }
          return min;
      }

      while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
          const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
          this.swap(minIdx, curIdx);
          curIdx = minIdx;
          leftIdx = curIdx * 2;
          rightIdx = curIdx * 2 + 1;
      }

      return min;
  }
}

class Heap {
    constructor() {
        this.heap = [];
    }

    swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

    add(item) {
       this.heap.push(item);

       let nodeIdx = this.heap.length-1;
       let parentIdx = Math.floor(nodeIdx/2);
       
       while(this.heap[nodeIdx] && this.heap[nodeIdx] > item) {
        parentIdx = Math.floor((nodeIdx-1)/2);
        this.swap(nodeIdx, parentIdx) 
        }
    }

    heafify() {
        let idx = 0, left = 1, right=2;
        while(this.heap[left]) {
            let smallIdx = idx === 0 ? 1: idx*2;
            if(this.heap[right] && this.heap[smallIdx] > this.heap[right]) {
                smallIdx = right;
            }

            if(this.heap[idx] < this.heap[smallIdx]) break;

            this.swap(smallIdx, idx);
            idx = smallIdx;
        }
    }

    remove() {
        const ret = this.heap[this.heap.length-1];
        this.heap[0] = this.heap.pop();
        this.heafify();
        return ret;
    }
}