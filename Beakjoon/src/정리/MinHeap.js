class Min_Heap {
    constructor() {
        this.heap = [];
    }

    getParent(cur) {
        return Math.floor(cur/2);
    }

    getLeft(cur) {
        return cur*2
    }

    getRight(cur) {
        return cur * 2 + 1;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    add(val) {
        this.heap.push(val);
        let cur = this.heap.length-1, parent = this.getParent(cur);
        
        while(parent > 0 && this.heap[cur] < this.heap[parent]) {
            this.swap(cur, parent);
            cur = parent;
            parent = this.getParent(cur);
        }
    }

    pop() {
        if(this.heap.length === 1) return this.heap.pop();
        const ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        let cur = 0;
        let left = this.getLeft(cur), right = this.getParent(cur)

        while((this.heap[left] && this.heap[cur] >  this.heap[left]) 
        ||(this.heap[right] && this.heap[cur] > this.heap[right]) 
            ) {
                let tmp = 
            }

    }
}
