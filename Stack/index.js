/**
 * Stack
 * - FILO (Fist In Last Out)
 */

class Stack {
  #top = 0;

  constructor() {
    this.data = [];
  }

  push(data) {
    this.data[this.#top++] = data;
  }

  pop() {
    if (this.#top === 0) {
      return null;
    }

    return this.data[--this.#top];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // null
