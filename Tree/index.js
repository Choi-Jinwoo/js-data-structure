/**
 * Tree
 */
class Node {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
  }
}

const parent = new Node(1, null);
const child1 = new Node(2, parent);
const child2 = new Node(3, parent);
/**
 *     parent (1)
 *      /      \
 * child(2)  child(3)
 */
