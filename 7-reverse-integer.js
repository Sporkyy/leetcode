// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.8 MB, less than 68.32% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = x => {
//   // console.log(x);
//   const s = '' + x;
//   let result = '';
//   let isNegative = false;
//   for (let i = s.length - 1; 0 <= i; --i) {
//     if (i === 0 && '-' === s[i]) {
//       isNegative = true;
//     } else {
//       result += s[i];
//     }
//   }
//   result = parseInt(result, 10);
//   // console.log(result);
//   if (isNegative) result *= -1;
//   if (result < Math.pow(-2, 31) || Math.pow(2, 31) < result) return 0;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.2 MB, less than 13.20% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = x => {
//   const arr = ('' + x).split('');
//   // console.log(arr);
//   const revArr = arr.slice(1).reverse();
//   if ('-' === arr[0]) {
//     revArr.unshift(arr[0]);
//   } else {
//     revArr.push(arr[0]);
//   }
//   // console.log(revArr);
//   const result = parseInt(revArr.join(''), 10);
//   if (result < Math.pow(-2, 31) || Math.pow(2, 31) < result) return 0;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.8 MB, less than 68.32% of JavaScript online submissions for Reverse Integer.

const realReverse = x =>
  Math.sign(x) *
  parseInt(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join(''),
    10,
  );

const is32BitInteger = x => Math.pow(-2, 31) <= x && x <= Math.pow(2, 31) - 1;

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const revX = realReverse(x);
  if (!is32BitInteger(revX)) return 0;
  return revX;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 123,
    expected: 321,
  },
  {
    name: 'Example 2',
    input: -123,
    expected: -321,
  },
  {
    name: 'Example 3',
    input: 120,
    expected: 21,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = reverse(input);
  if (output === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
