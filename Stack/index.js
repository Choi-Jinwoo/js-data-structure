/**
 * Stack
 * push: O(1)
 * pop: O(1)
 * LIFO(Last In First Out) 특징
 */
class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  /**
   * @description O(1)의 시간 복잡도
   * @param {number} data - 삽입할 데이터
   */
  push(data) {
    this.data[this.top++] = data;
  }

  /**
   * @description O(1)의 시간 복잡도
   */
  pop() {
    if (this.top === 0) {
      throw new Error("Stack Underflow");
    }

    this.data.length -= 1;
    return this.data[--this.top];
  }
}

const stack = new Stack();
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
stack.pop(); // [1, 2, 3]
stack.pop(); // [1, 2]

console.log(stack.data);
