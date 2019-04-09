// 942. DI String Match
// https://leetcode.com/problems/di-string-match/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = S => {
  let answer = [];
  let stock = [];
  for (let i = 0; i <= S.length; i++) {
    stock.push(i);
  }
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case 'D':
        answer.push(stock.pop(i));
        break;
      case 'I':
        answer.push(stock.shift(i));
        break;
    }
  }
  answer.push(stock.shift());
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 'IDID',
    // [0, 1, 2, 3, 4]
    // [0, 1, 2, 3]
    expected: [0, 4, 1, 3, 2],
  },
  {
    name: 'Example 2',
    input: 'III',
    // [0, 1, 2, 3]
    // [0, 1, 2]
    expected: [0, 1, 2, 3],
  },
  {
    name: 'Example 3',
    input: 'DDI',
    // [0, 1, 2, 3]
    // [0, 1, 2]
    expected: [3, 2, 0, 1],
  },
  {
    name: 'IDD',
    input: 'IDD',
    // [0, 1, 2, 3]
    // [0, 1, 2]
    expected: [2, 3, 1, 0],
  },
];

const diStringMatchCheck = (S, a) => {
  for (let i = 0; i < a.length; i++) {
    switch (S[i]) {
      case 'D':
        if (a[i] < a[i + 1]) {
          return false;
        }
        break;
      case 'I':
        if (a[i + 1] < a[i]) {
          return false;
        }
        break;
    }
  }
  return true;
};

tests.forEach(({ name, input, expected }) => {
  const result = diStringMatch(input);
  if (diStringMatchCheck(input, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected}, received ${result}`);
  }
});
