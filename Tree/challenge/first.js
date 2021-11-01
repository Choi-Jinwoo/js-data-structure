/**
 * 주어진 트리가 Binary 트리인지 확인하는 알고리즘
 */
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  appendChild(node) {
    this.children.push(node);
  }
}

function isBinaryTree(node) {
  if (node.children.length > 2) {
    return false;
  }

  for (const child of node.children) {
    if (!isBinaryTree(child)) {
      return false;
    }
  }

  return true;
}

// Tree 자식 설정
const parent = new Node(1);

const child1 = new Node(2);
child1.appendChild(new Node(4));
child1.appendChild(new Node(5));

const child2 = new Node(3);
child2.appendChild(new Node(6));

parent.appendChild(child1);
parent.appendChild(child2);

/**
 *     1
 *    / \
 *   2   3
 *  / \ /
 * 4  5 6
 */

console.log(isBinaryTree(parent));
