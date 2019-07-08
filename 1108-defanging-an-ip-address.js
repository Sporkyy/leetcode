// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 50.52% of JavaScript online submissions
// for Defanging an IP Address.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions
// for Defanging an IP Address.

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.replace(/\./g, '[.]');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: '1.1.1.1',
    expected: '1[.]1[.]1[.]1',
  },
  {
    input: '255.100.50.0',
    expected: '255[.]100[.]50[.]0',
  },
];

tests.forEach(({ input, expected }) => {
  const output = defangIPaddr(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log('Expected "${expected}", but got "${output}"');
  }
});
