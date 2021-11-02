/**
 * Heap
 * 우선순위 큐를 위한 자료구조
 * 삽입: O(log n)
 * 삭제: O(log n)
 */
class Heap {
  constructor() {
    this.heap = [null];
  }

  /**
   * @description O(log n)의 시간 복잡도
   * @param {number} data - 삽입할 데이터
   */
  insert(data) {
    if (this.heap.length <= 1) {
      return void this.heap.push(data);
    }

    this.heap.push(data);
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index / 2);

    // root가 아니며 자신의 부모보다 클 경우 실행
    while (index > 1 && this.heap[parentIndex] < this.heap[index]) {
      // 부모와 자신을 swap
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  /**
   * @description O(log n)의 시간 복잡도
   */
  delete() {
    if (this.heap.length < 2) {
      this.heap = [null];
      return;
    }

    let index = 1;
    this.heap[index] = this.heap.pop();

    while (this.heap[index * 2] < this.heap.length) {
      const leftChildIndex = index * 2;
      const rightChildIndex = index * 2 + 1;

      // 오른쪽 자식이 있을 경우
      if (rightChildIndex < this.heap.length - 1) {
        // 왼쪽, 오른쪽 자식이 모두 자신보다 작을 경우 break
        if (
          this.heap[index] > this.heap[leftChildIndex] &&
          this.heap[index] > this.heap[rightChildIndex]
        ) {
          break;
        }

        // 오른쪽 자식이 왼쪽 자식보다 큰 경우 오른쪽 자식과 swap
        if (this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
          [this.heap[rightChildIndex], this.heap[index]] = [
            this.heap[index],
            this.heap[rightChildIndex],
          ];
          index = rightChildIndex;
        }
        // 왼쪽 자식이 오른쪽 자식보다 큰 경우 왼쪽 자식과 swap
        else {
          [this.heap[leftChildIndex], this.heap[index]] = [
            this.heap[index],
            this.heap[leftChildIndex],
          ];
          index = leftChildIndex;
        }
      }
      // 오른쪽 자식이 없을 경우
      else {
        // 왼쪽 자식이 자신보다 작을 경우
        if (this.heap[index] > this.heap[leftChildIndex]) {
          break;
        }

        [this.heap[leftChildIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[leftChildIndex],
        ];
        index = leftChildIndex;
      }
    }
  }
}

const heap = new Heap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
/**
 *     5
 *    / \
 *   4   2
 *  / \
 * 1   3
 */
heap.delete();
heap.delete();
/**
 *   3
 *  / \
 * 1   2
 */

console.log(JSON.stringify(heap.heap));
