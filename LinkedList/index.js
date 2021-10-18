/**
 * LinkedList
 * - 연결된 노드들로 리스트를 형성
 * - 삽입, 삭제 시 링크만 조정하여 적용
 * - index를 통해 접근 시 순서대로 접근해야해 비효율
 */

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  #head = null;

  constructor(data = []) {
    for (let i = 0; i < data.length; i += 1) {
      const node = new Node(data[i], null);
      if (i === 0) {
        this.#head = node;
      } else {
        const tail = this.#findTail();
        tail.next = node;
      }
    }
  }

  #findTail() {
    let p = this.#head;
    while (p.next !== null) {
      p = p.next;
    }

    return p;
  }

  remove(index) {
    if (index === 0) {
      this.#head = this.#head.next;
      return;
    }

    let p = this.#head;

    for (let i = 0; i < index - 1; i += 1) {
      p = p.next;
    }

    p.next = p.next?.next ?? null;
  }

  insert(index, data) {
    const node = new Node(data, null);

    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      let p = this.#head;

      for (let i = 0; i < index - 1; i += 1) {
        p = p.next;
      }

      node.next = p.next?.next ?? null;
      p.next = node;
    }
  }

  findAll() {
    const result = [];
    let p = this.#head;
    while (p !== null) {
      result.push(p.data);
      p = p.next;
    }

    return result;
  }
}

const linkedList = new LinkedList([1, 2, 3, 4]);
linkedList.insert(0, 0);
console.log(linkedList.findAll()); // [0, 1, 2, 3, 4]
linkedList.remove(0);
console.log(linkedList.findAll()); // [1, 2, 3, 4]
