class Node {
  constructor() {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  pushFront(item) {
    const node = new Node(item);

    if(this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.count += 1;
  }
  pushBack(item) {
    const node = new Node(item);

    if(this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next= node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.count += 1;
  }

  popFront() {
    const node = this.head;

    
    if(this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
    }

    return node;
  }
}