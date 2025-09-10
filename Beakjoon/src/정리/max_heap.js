class MaxHeap {
  constructor() {
      this.heap = [];
  }

  // 부모 인덱스 구하기
  getParentIndex(index) {
      return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 인덱스 구하기
  getLeftChildIndex(index) {
      return 2 * index + 1;
  }

  // 오른쪽 자식 인덱스 구하기
  getRightChildIndex(index) {
      return 2 * index + 2;
  }

  // 값 교환
  swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = 
      [this.heap[index2], this.heap[index1]];
  }

  // push: 새로운 값 추가
  push(value) {
      this.heap.push(value);
      this.bubbleUp();
  }

  // pop: 최대값 제거 및 반환
  pop() {
      if (this.heap.length === 0) return null;

      const max = this.heap[0];
      const last = this.heap.pop();

      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown();
      }

      return max;
  }

  // peek: 최대값 확인
  peek() {
      return this.heap.length === 0 ? null : this.heap[0];
  }

  // size: 힙의 크기 반환
  size() {
      return this.heap.length;
  }

  // bubbleUp: 아래에서 위로 올라가며 힙 속성 유지
  bubbleUp() {
      let currentIndex = this.heap.length - 1;

      while (currentIndex > 0) {
          const parentIndex = this.getParentIndex(currentIndex);

          if (this.heap[currentIndex] > this.heap[parentIndex]) {
              this.swap(currentIndex, parentIndex);
              currentIndex = parentIndex;
          } else {
              break;
          }
      }
  }

  // bubbleDown: 위에서 아래로 내려가며 힙 속성 유지
  bubbleDown() {
      let currentIndex = 0;

      while (true) {
          let largestIndex = currentIndex;
          const leftChildIndex = this.getLeftChildIndex(currentIndex);
          const rightChildIndex = this.getRightChildIndex(currentIndex);

          if (leftChildIndex < this.heap.length && 
              this.heap[leftChildIndex] > this.heap[largestIndex]) {
              largestIndex = leftChildIndex;
          }

          if (rightChildIndex < this.heap.length && 
              this.heap[rightChildIndex] > this.heap[largestIndex]) {
              largestIndex = rightChildIndex;
          }

          if (largestIndex === currentIndex) break;

          this.swap(currentIndex, largestIndex);
          currentIndex = largestIndex;
      }
  }
}

// 사용 예시
const maxHeap = new MaxHeap();


class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(index) {
    return index*2+1;
  }

  getRightChild(index) {
    return index*2+2;
  }

  getParent(index) {
    const idx = Math.floor(index-1/2);
    return idx;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapPush(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length-1;
    let parent = this.getParent(currentIndex);
    while(currentIndex > 0) {
        if(this.heap[currentIndex] > this.heap[parent]) {
            this.swap(currentIndex, parent);
            currentIndex = parent;
            parent = this.getParent(currentIndex);
        }else {
            break;
        }
    }
  }

  heapPop() {
    const removeValue = this.heap[0];
    this.heap[0] = this.heap.pop();

    let currentIndex = 0;
    while(true) {
        let largestIndex = 0;
        const leftChildIndex = this.getLeftChild(largestIndex);
        const rightChildIndex = this.getRightChild(largestIndex);

        if(leftChildIndex < this.heap.length &&
            this.heap.leftChildIndex > this.heap[largestIndex]   
        ) {
            largestIndex = leftChildIndex;
        }

        if(rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] > this.heap[largestIndex]   
        ) {
            largestIndex = rightChildIndex;
        }
        
        if(largestIndex === currentIndex) break;

        this.swap(largestIndex, currentIndex);
        currentIndex = largestIndex;
    }

    return removeValue
  }
}