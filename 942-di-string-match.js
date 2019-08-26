// 942. DI String Match
// https://leetcode.com/problems/di-string-match/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 36.25% of JavaScript online submissions
// for DI String Match.
// Memory Usage: 38.3 MB, less than 10.00% of JavaScript online submissions
// for DI String Match.

/**
 * @param {string} S
 * @return {number[]}
 */
// const diStringMatch = S => {
//   let answer = [];
//   let stock = [];
//   for (let i = 0; i <= S.length; i++) {
//     stock.push(i);
//   }
//   for (let i = 0; i < S.length; i++) {
//     switch (S[i]) {
//       case 'D':
//         answer.push(stock.pop(i));
//         break;
//       case 'I':
//         answer.push(stock.shift(i));
//         break;
//     }
//   }
//   answer.push(stock.shift());
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 36.25% of JavaScript online submissions
// for DI String Match.
// Memory Usage: 37.8 MB, less than 10.00% of JavaScript online submissions
// for DI String Match.

/**
 * @param {string} S
 * @return {number[]}
 */
// const diStringMatch = S => {
//   const result = new Array(S.length + 1);
//   for (let [i, u, d] = [0, 0, S.length]; i <= S.length; i++)
//     if ('I' === S[i]) result[i] = u++;
//     else if ('D' === S[i]) result[i] = d--;
//     else result[i] = u;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 98.00% of JavaScript online submissions
// for DI String Match.
// Memory Usage: 37.8 MB, less than 10.00% of JavaScript online submissions
// for DI String Match.

/**
 * @param {string} S
 * @return {number[]}
 */
// const diStringMatch = S => {
//   const result = new Array(S.length + 1);
//   for (let [i, u, d] = [0, 0, S.length]; i <= S.length; i++)
//     if (S.length === i) result[i] = u;
//     else if ('I' === S[i]) result[i] = u++;
//     else if ('D' === S[i]) result[i] = d--;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 76.19% of JavaScript online submissions
// for DI String Match.
// Memory Usage: 37.6 MB, less than 40.00% of JavaScript online submissions
// for DI String Match.

/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = S => {
  const result = new Array(S.length + 1);
  for (let [i, u, d] = [0, 0, S.length]; i <= S.length; i++)
    result[i] = S.length === i ? u : 'I' === S[i] ? u++ : d--;
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  'IDID', // [0,4,1,3,2]
  'III', // [0,1,2,3]
  'DDI', // [3,2,0,1]
  'IDD', // [0,3,2,1]
];

const diStringMatchCheck = (s, a) => {
  for (let i = 0; i < s.length; i++) {
    if (a[i] < 0 || a[i + 1] < 0) return false;
    if (s.length < a[i] || s.length < a[i + 1]) return false;
    if ('D' === s[i] && a[i] < a[i + 1]) return false;
    else if ('I' === s[i] && a[i + 1] < a[i]) return false;
  }
  const sorted = [...a].sort((g, h) => g - h);
  const s1 = JSON.stringify(sorted);
  const s2 = JSON.stringify(Array.from(new Set(sorted)));
  return s1 === s2;
};

for (input of tests) {
  const name = JSON.stringify(input);
  const result = diStringMatch(input);
  if (diStringMatchCheck(input, result)) {
    console.log(`✅ ${name} ${JSON.stringify(result)}`);
  } else {
    console.log(`🔴 ${name} ${JSON.stringify(result)}`);
  }
}
