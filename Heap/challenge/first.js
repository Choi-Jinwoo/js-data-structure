/**
 * Heapify 구현하기
 */
function heapify(array) {
  const heap = [null];

  for (const item of array) {
    if (heap.length <= 1) {
      heap.push(item);
      continue;
    }

    heap.push(item);
    let index = heap.length - 1;
    let parentIndex = Math.floor(index / 2);

    // root가 아니며 자신의 부모보다 클 경우 실행
    while (index > 1 && heap[parentIndex] < heap[index]) {
      // 부모와 자신을 swap
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];

      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  return heap;
}

console.log(heapify([1, 2, 3, 4, 5]));
