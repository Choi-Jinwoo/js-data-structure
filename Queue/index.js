/**
 * Queue
 * - FIFO (First In First Out)
 */

class Queue {
  #front = null;
  #back = null;

  constructor() {
    this.data = [];
  }

  enqueue(data) {
    this.data[this.#back++] = data;
  }

  dequeue() {
    if (this.#back === this.#front) {
      return null;
    }

    return this.data[this.#front++];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // null
