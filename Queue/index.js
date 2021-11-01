/**
 * Queue
 * enqueue: O(1)
 * dequeue: O(1)
 * LIFO(Last In First Out) 특징
 */
class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }

  /**
   * @description O(1)의 시간 복잡도
   * @param {number} data - 삽입할 데이터
   */
  enqueue(data) {
    this.data[this.rear++] = data;
  }

  /**
   * @description O(1)의 시간 복잡도
   */
  dequeue() {
    if (this.rear <= this.front) {
      throw new Error("Queue Underflow");
    }

    return this.data[this.front++];
  }

  printAll() {
    const result = [];

    for (let i = this.front; i < this.rear; i += 1) {
      result.push(this.data[i]);
    }

    console.log(result);
  }
}

const queue = new Queue();
queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]
queue.enqueue(4); // [1, 2, 3, 4]
queue.dequeue(); // [2, 3, 4]
queue.printAll();
