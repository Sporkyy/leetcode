// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 78.30% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 42.5 MB, less than 30.46% of JavaScript online submissions for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// const numUniqueEmails = emails =>
//   new Set(
//     emails.map(email => {
//       const [localName, domainName] = email.split('@');
//       const forwardName = localName.replace(/\./g, '').split('+')[0];
//       return `${forwardName}@${domainName}`;
//     }),
//   ).size;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 78.30% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 42.4 MB, less than 32.34% of JavaScript online submissions for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// const numUniqueEmails = emails => {
//   if (emails.length < 2) return emails.length;
//   let result = 0;
//   let seenAddresses = '';
//   for (let i = emails.length - 1; 0 <= i; --i) {
//     const [localName, domainName] = emails[i].split('@');
//     const forwardName = localName.split('+')[0].replace(/\./g, '');
//     const includableAddress = ` ${domainName}${forwardName} `;
//     if (!seenAddresses.includes(includableAddress)) {
//       result++;
//       seenAddresses = `${seenAddresses}${includableAddress}`;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.68% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 42 MB, less than 39.85% of JavaScript online submissions for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// function numUniqueEmails(emails) {
//   const cleanEmails = new Array(emails.length);
//   for (let i = emails.length - 1; 0 <= i; --i) {
//     const [localName, domainName] = emails[i].split('@');
//     const forwardName = localName.split('+')[0].replace(/\./g, '');
//     cleanEmails[i] = `${forwardName}@${domainName}`;
//   }
//   // console.log(emails);
//   // console.log(cleanEmails);
//   return new Set(cleanEmails).size;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 20.74% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 39 MB, less than 93.23% of JavaScript online submissions for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const cleanEmails = new Set();
  for (let i = emails.length - 1; 0 <= i; --i) {
    const matches = emails[i].match(/^([^\+]+)(?:\+.+)?(@.+)$/);
    cleanEmails.add(`${matches[1].replace(/\./g, '')}@${matches[2]}`);
  }
  return cleanEmails.size;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ],
    expected: 2,
  },
  {
    name: 'One address',
    input: ['test@foo.com'],
    expected: 1,
  },
  {
    name: 'All the same domain with plus signs',
    input: [
      'test@foo.com',
      'test+bar@foo.com',
      'test+bar+baz@foo.com',
      'test+bar+baz+quux@foo.com',
    ],
    expected: 1,
  },
  {
    name: 'All the same domain with dots',
    input: [
      'test@foo.com',
      'test.bar@foo.com',
      'test.bar.baz@foo.com',
      'test.bar.baz.quux@foo.com',
    ],
    expected: 4,
  },
  {
    name: 'All the same domain with dots and pluses',
    input: [
      'test@foo.com',
      'test+bar@foo.com',
      'test.bar@foo.com',
      'test+bar+baz@foo.com',
      'test.bar.baz@foo.com',
    ],
    expected: 3,
  },
  {
    name: 'All the same local name with different domains',
    input: ['test@foo.com', 'test@bar.com', 'test@baz.com', 'test@quux.com'],
    expected: 4,
  },
  {
    name: 'Domains with dots',
    input: [
      'test@foo.com',
      'test@foo.bar.com',
      'test@foo.bar.baz.com',
      'test@foo.bar.baz.quux.com',
    ],
    expected: 4,
  },
  {
    name: 'Domains with pluses',
    input: [
      'test@foo.com',
      'test@foo+bar.com',
      'test@foo+bar+baz.com',
      'test@foo+bar+baz+quux.com',
    ],
    expected: 4,
  },
  {
    name: 'Domains with pluses and dots',
    input: ['test@foo.com', 'test@foo.bar.com', 'test@foo+bar.com', 'test@foo+bar+baz.com'],
    expected: 4,
  },
  {
    name: 'All on same domain',
    input: ['test@foo.com', 'test@foo.com', 'test@foo.com'],
    expected: 1,
  },
  {
    name: 'No addresses',
    input: [],
    expected: 0,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = numUniqueEmails(input);
  if (output === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${output}`);
  }
});
