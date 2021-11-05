/**
 * Hash
 * 탐색: O(1)
 * 삽입: O(1)
 * 삭제: O(1)
 */
class Hash {
  constructor() {
    this.hash = [];
  }

  /**
   * @description Digit Folding 방식의 Hash 함수
   * @param {string} key
   */
  hashing(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i += 1) {
      sum += key.charCodeAt(i);
    }
    return sum;
  }

  /**
   * @description Chaining 방식을 이용한 Hash 충돌 해결
   * @param {string} key
   * @param {unknown} value
   */
  insert(key, value) {
    const index = this.hashing(key);
    if (this.hash[index] === undefined) {
      this.hash[index] = [
        {
          key,
          value,
        },
      ];
    } else {
      this.hash[index].push({
        key,
        value,
      });
    }
  }

  find(key) {
    const bucket = this.hash[this.hashing(key)];

    if (bucket === undefined) {
      return undefined;
    }

    return bucket.find((entry) => entry.key === key)?.value;
  }
}

const hash = new Hash();
hash.insert("key", "value");
hash.insert("yek", "reverse");
hash.insert("key2", "value1");
hash.insert("key3", "value2");

console.log(hash.find("key")); // value
console.log(hash.find("key2")); // value1
console.log(hash.find("key3")); // value2
console.log(hash.find("key4")); // undefined

console.log(hash.hash);
/**
[
  [ { key: 'key', value: 'value' }, { key: 'yek', value: 'reverse' } ],
  <49 empty items>,
  [ { key: 'key2', value: 'value1' } ],
  [ { key: 'key3', value: 'value2' } ]
]
*/
