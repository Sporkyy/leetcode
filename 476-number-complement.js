// 476. Number Complement
// https://leetcode.com/problems/number-complement/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const toBinary = n => {
  let b = '';
  do {
    b = (n % 2) + b;
    n = parseInt(n / 2, 10);
  } while (0 < n);
  return b;
};

const flipBits = b =>
  b
    .split('')
    .map(d => ('0' === d ? '1' : '0'))
    .join('');

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => {
  const b = toBinary(num);
  // console.log(b);
  const f = flipBits(b);
  // console.log(f);
  const c = parseInt(f, 2);
  // console.log(c);
  return c;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 5,
    expected: 2,
  },
  {
    name: 'Example 2',
    input: 1,
    expected: 0,
  },
  {
    name: '2',
    input: 2,
    expected: 1,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = findComplement(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
