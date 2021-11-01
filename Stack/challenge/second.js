/**
 * Stack으로 괄호 유효성 확인
 */
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

function isValidBracket(bracketString) {
  const stack = new Stack();
  for (let i = 0; i < bracketString.length; i += 1) {
    // 괄호만 stack 자료구조에 저장
    if (bracketString[i] !== ")" && bracketString[i] !== "(") {
      continue;
    }

    if (bracketString[i] === "(") {
      stack.push("(");
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      stack.pop();
    }
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return true;
}

console.log(isValidBracket("()()"));
