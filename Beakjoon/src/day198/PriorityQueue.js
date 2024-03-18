//최소힙

class PriorityQueue {
  constructor() {
    this.values=[];
  }

  enqueue(val) {
    this.values.push(val);
    this.bubleUp();
  }

  bubleUp() {
    let idx = this.values.length-1;
    let el = this.values[idx];

    while(true) {
      const parentIdx = parseInt(idx/2);
      const parent = this.values[parentIdx];
      if(el >= parent) break;
      this.values[parentIdx] = el;
      this.values[idx] = parentIdx;
      idx = parentIdx;
    }
  }

  dequeue() {
    if(this.values.length === 1) return this.values.pop();
    let res = this.values[0];
    this.values[0] = this.values.pop();
    this.bubleDown(0, this.values.length-1);
    return res;
  }

  bubleDown(pos, len) {
    let tmp = this.values[pos], child;
    while(pos<= parseInt(len/2)) {
      child = pos *2;
      if(child < len && this.values[child] > this.values[child+1]) child+=1;
      if(tmp <=this.values[child]) break;
      this.values[pos] = this.values[child];
      pos = child;
    }
    this.values[pos] = tmp;
  }
}