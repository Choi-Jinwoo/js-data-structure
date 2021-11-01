/**
 * ArrayList
 * 조회: O(1)
 * 삽입/삭제: O(n)
 */
class ArrayList {
  constructor() {
    this.data = [];
  }

  /**
   * @description O(1)의 시간 복잡도
   * @param {number} index - 조회할 인덱스
   */
  get(index) {
    return this.data[index];
  }

  /**
   * @description O(n)의 시간 복잡도
   * @param {number} index - 삽입할 인덱스 위치
   * @param {number} value - 삽입할 데이터
   */
  add(index, value) {
    this.data.length += 1;
    for (let i = this.data.length - 1; i > index; i -= 1) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = value;
  }

  /**
   * @description O(n)의 시간 복잡도
   * @param {number} index - 삭제할 데이터 인덱스
   */
  remove(index) {
    for (let i = index; i < this.data.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }
    this.data.length -= 1;
  }
}

const arrayList = new ArrayList();
arrayList.add(0, 1); // [1]
arrayList.add(1, 2); // [1, 2]
arrayList.add(2, 3); // [1, 2, 3]
arrayList.add(1, 4); // [1, 4, 2, 3]
arrayList.remove(1); // [1, 2, 3]

console.log(arrayList);
