/**
 * Stack 자료구조 2개로 Queue 자료구조 구현
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Queue {
  constructor() {
    this.inBox = new Stack();
    this.outBox = new Stack();
  }

  enqueue(data) {
    this.inBox.push(data);
  }

  dequeue() {
    if (this.outBox.isEmpty()) {
      while (!this.inBox.isEmpty()) {
        this.outBox.push(this.inBox.pop());
      }
    }

    return this.outBox.pop();
  }
}

const queue = new Queue();

queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]
queue.enqueue(4); // [1, 2, 3, 4]
queue.dequeue(); // 1, [2, 3, 4]
queue.dequeue(); // 2, [3, 4]
