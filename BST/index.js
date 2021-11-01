/**
 * BST
 * 이진 탐색 트리, 이진 트리의 일종
 * 탐색 연산: O(log n)
 * 편향 트리 탐색 연산: O(n)
 */
class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (current.leftChild === null && current.rightChild === null) {
        return null;
      }

      if (data < current.data) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }

    return current;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current !== null) {
      if (data < current.data && current.leftChild === null) {
        current.leftChild = newNode;
        return;
      } else if (data > current.data && current.rightChild === null) {
        current.rightChild = newNode;
        return;
      }

      if (data < current.data) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(1);
bst.insert(35);
bst.insert(60);
bst.insert(80);
/**
 *       50
 *    /     \
 *   30     70
 *  /  \   /  \
 * 1   35 60  80
 */
console.log(bst.find(70));
