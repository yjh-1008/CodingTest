class PQ {
    constructor() {
        this.heap = [null];
    }
    getParent(val) {
        return Math.floor(val/2);
    }
    getLeft(val) {
        return val*2;
    }
    getRight(val) {
        return val*2+1;
    }
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    push(val) {
        this.heap.push(val);
        let cur = this.heap.length-1;
        let parent = this.getParent(cur);

        while(parent > 0 && this.heap[cur] <this.heap[parent]) {
            this.swap(parent, cur);
            cur = parent;
            parent = this.getParent(cur);
        }

    }
    pop() {
        if(this.heap.length ===1) return this.heap.pop();
        const ret = this.heap[0];
        this.heap[0] = this.heap.pop();
        let cur = 1, left = this.getLeft(cur), right = this.getRight(cur);

        while(true) {
            let tmp = cur;
            if(left < this.heap.length && this.heap[cur] > this.heap[left]) tmp = left;
            if(right < this.heap.length && this.heap[cur] > this.heap[right]) tmp= right;

            if(tmp === cur) break;
            this.swap(cur, tmp);
            cur = tmp;
            left = this.getLeft(cur);
            right = this.getRight(cur);
        }
        return ret;
    }
}

class Queue {
    constuctor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    push(val) {
        this.arr[this.head++] = val;
    }

    pop() {
        const ret = this.heap[this.tail++];
        if(this.tail === this.head) {
            this.head = this.tail = 0;
        }
        return ret;
    }

    length() {
        return this.head - this.tail;
    }

    isEmpty() {
        return this.head === this.tail;
    }
}


const dj = (arr, start, len) => {
    const pq = new PQ();
    const visited = Array(len).fill(Infinity);
    visited[start] = 0;

    pq.push([start, 0]);

    while(pq.heap.length) {
        const [cur, curWeight] = pq.pop();

        if(visited[cur] < curWeight) continue;

        for(let i=0;i<arr.length;i++) {
            const nextVal = arr[cur][i];
            if(visited[i] > curWeight+nextVal) {
                visited[i] = curWeight+nextVal;
                pq.push([i, curWeight+nextVal])
            }
        }
    }
}

const floyd = (arr) =>{
    const ret = Array.from({length:arr.length},() => Array(arr.length).fill(Infinity));
    for(let i=0;i<N;i++) {
        for(let j=0;j<N;j++) {  
            if(i===j) ret[i][j] = 0;
        }
    }

    arr.forEach((item) => {
        const [r, c, val] = item;
        ret[r][c] = val;
    })

    const N = arr.length;
    for(let k=0;k<N;k++) {
        for(let i=0;i<N;i++) {
            for(let j=0;j<N;j++) {  
                if(ret[i][j] > ret[i][k] + ret[k][j]) {
                    ret[i][j] = ret[i][k] + ret[k][j];
                }
            }
        }
    }
}
