/**
 * ArrayList
 * - index를 통해 접근
 * - 삽입, 삭제의 비용이 높음
 */

class ArrayList {
  #data;

  constructor(data) {
    this.#data = data ?? [];
  }

  items() {
    return this.#data;
  }

  get(i) {
    return this.#data[i];
  }

  add(data) {
    this.#data[this.#data.length] = data;
  }

  remove(index) {
    for (let i = index; i < this.#data.length - 1; i += 1) {
      this.#data[i] = this.#data[i + 1];
    }

    this.#data.length -= 1;
  }
}

const array = new ArrayList([1, 2, 3, 4]);

console.log(array.items()); // [1, 2, 3, 4]
array.add(5);
console.log(array.items()); // [1, 2, 3, 4, 5]
array.remove(2);
console.log(array.items()); // [1, 2, 4, 5]
