/**
 * LinkedList
 * 조회: O(n)
 * 단순 삽입/삭제: O(1)
 * 조회 후 삽입/삭제: O(n)
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * @description O(n)의 시간 복잡도
   * @param {number} index
   */
  get(index) {
    if (index === 0) {
      return this.head.data;
    }

    let count = 0;
    let node = this.head;

    while (count < index) {
      count += 1;
      node = node.next;
    }

    return node.data;
  }

  /**
   * @description O(n)의 시간 복잡도
   * @param {number} index - 삽입할 인덱스 위치
   * @param {number} value - 삽입할 데이터
   */
  insert(index, value) {
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let count = 0;
    let previousNode = this.head;

    while (count < index - 1) {
      count += 1;
      previousNode = previousNode.next;
    }

    node.next = previousNode.next;
    previousNode.next = node;
  }

  /**
   * @description O(n)의 시간 복잡도
   * @param {number} index - 삭제할 인덱스 위치
   */
  remove(index) {
    let count = 0;
    let previousNode = this.head;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    while (count < index - 1) {
      count += 1;
      previousNode = previousNode.next;
    }

    previousNode.next = previousNode.next.next;
  }

  /**
   * @description O(n)의 시간 복잡도
   */
  printAll() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result);
  }
}

const linkedList = new LinkedList();
linkedList.insert(0, 1); // [1]
linkedList.insert(1, 2); // [1, 2]
linkedList.insert(2, 3); // [1, 2, 3]
linkedList.insert(1, 4); // [1, 4, 2, 3]
linkedList.remove(0); // [4, 2, 3]

linkedList.printAll();
