// 942. DI String Match
// https://leetcode.com/problems/di-string-match/

import { strictEqual } from 'assert';

/*

Given a string S that only contains "I" (increase) or "D" (decrease),
let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 36.25% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 10.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {number[]}
//  */
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
// Memory Usage: 37.8 MB, less than 10.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {number[]}
//  */
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
// Memory Usage: 37.8 MB, less than 10.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {number[]}
//  */
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
// Memory Usage: 37.6 MB, less than 40.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {number[]}
//  */
// const diStringMatch = S => {
//   const result = new Array(S.length + 1);
//   for (let [i, u, d] = [0, 0, S.length]; i <= S.length; i++)
//     result[i] = S.length === i ? u : 'I' === S[i] ? u++ : d--;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const diStringMatch = (s, a = ['I' === s[0] ? 0 : n]) => {
//   console.log(s, a);
//   if (0 === s.length) return a;
//   console.log(s[0]);
//   console.log({ I: 'D', D: 'I' }[s[0]]);
//   console.log(s.slice(1));
//   const x = [...s.slice(1)].filter(c => c === { I: 'D', D: 'I' }[s[0]]).length;
//   console.log(x);
//   return diStringMatch(
//     s.slice(1),
//     a.concat('I' === s[0] ? s.length : s.length - x),
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const diStringMatch = (
//   s,
//   min = 0,
//   max = s.length,
//   a = ['I' === s[0] ? min++ : max--],
// ) => {
//   console.log(s, a);
//   if (0 === s.length) return a;
//   console.log(a[a.length - 1]);
//   if ('I' === s[0]) {
//     console.log(a[a.length - 1]);
//     a.push(a[a.length - 1] + max--);
//   } else {
//     // console.log(max - s.length);
//     a.push(a[a.length - 1] - min++);
//   }
//   return diStringMatch(s.slice(1), min, max, a);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//  1: 0x8db900 node::Abort() [nodejs run]
//  2: 0x8db94c  [nodejs run]
//  3: 0xad6c1e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  4: 0xad6e54 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  5: 0xec44e2  [nodejs run]
//  6: 0xed3cff v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [nodejs run]
//  7: 0xe9cd56 v8::internal::Factory::AllocateRawArray(int, v8::internal::PretenureFlag) [nodejs run]
//  8: 0xe9d5da v8::internal::Factory::NewFixedArrayWithFiller(v8::internal::Heap::RootListIndex, int, v8::internal::Object*, v8::internal::PretenureFlag) [nodejs run]
//  9: 0xe9db67 v8::internal::Factory::NewFixedArrayWithHoles(int, v8::internal::PretenureFlag) [nodejs run]
// 10: 0xb69320  [nodejs run]
// 11: 0xb69c57 v8::internal::Builtin_ArrayConcat(int, v8::internal::Object**, v8::internal::Isolate*) [nodejs run]
// 12: 0x2088395bf7d

/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = (s, min = 0, max = s.length, a = []) =>
  !s.length
    ? a.concat(min)
    : diStringMatch(
        s.slice(1),
        'I' === s[0] ? min + 1 : min,
        'D' === s[0] ? max - 1 : max,
        a.concat('I' === s[0] ? min : max),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(diStringMatch('III'));
// console.log(diStringMatch('DDD'));
// console.log(diStringMatch('IDD'));
// console.log(diStringMatch('DDI'));
// console.log(diStringMatch('IDID'));
// console.log(diStringMatch('DIDI'));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const diString = (a, s = '') =>
  a.length < 2 ? s : diString(a.slice(1), `${s}${a[0] < a[1] ? 'I' : 'D'}`);

// strictEqual(diString([0, 4, 1, 3, 2]), 'IDID');
// strictEqual(diString([0, 1, 2, 3]), 'III');
// strictEqual(diString([3, 2, 0, 1]), 'DDI');
// strictEqual(diString([0, 3, 2, 1]), 'IDD');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

assert.ok(diString(diStringMatch('IDID')), 'IDID');

assert.ok(diString(diStringMatch('III')), 'III');

assert.ok(diString(diStringMatch('DDI')), 'DDI');

assert.ok(diString(diStringMatch('IDD')), 'IDD');
