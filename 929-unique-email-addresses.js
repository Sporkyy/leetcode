// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 78.30% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42.5 MB, less than 30.46% of JavaScript online submissions
// for Unique Email Addresses.

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

// Runtime: 88 ms, faster than 78.30% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42.4 MB, less than 32.34% of JavaScript online submissions
// for Unique Email Addresses.

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

// Runtime: 84 ms, faster than 87.68% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42 MB, less than 39.85% of JavaScript online submissions
// for Unique Email Addresses.

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

// Runtime: 116 ms, faster than 20.74% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 39 MB, less than 93.23% of JavaScript online submissions
// for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// function numUniqueEmails(emails) {
//   const cleanEmails = new Set();
//   for (let i = emails.length - 1; 0 <= i; --i) {
//     const matches = emails[i].match(/^([^\+]+)(?:\+.+)?(@.+)$/);
//     cleanEmails.add(`${matches[1].replace(/\./g, '')}@${matches[2]}`);
//   }
//   return cleanEmails.size;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 69.23% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 41.6 MB, less than 53.76% of JavaScript online submissions
// for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// function numUniqueEmails(emails) {
//   const cleanEmails = new Set();
//   for (let i = emails.length - 1; 0 <= i; --i) {
//     let [localName, domain] = emails[i].split('@');
//     localName = localName.split('+')[0].replace(/\./g, '');
//     cleanEmails.add(`${localName}@${domain}`);
//   }
//   return cleanEmails.size;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 63.27% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42 MB, less than 22.22% of JavaScript online submissions
// for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// function numUniqueEmails(emails) {
//   const uniqueEmails = new Set();
//   for (email of emails) {
//     let [localName, domain] = email.split('@');
//     localName = localName.split('+')[0].replace(/\./g, '');
//     uniqueEmails.add(`${localName}@${domain}`);
//   }
//   return uniqueEmails.size;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 50.93% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42.2 MB, less than 22.22% of JavaScript online submissions
// for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
// function numUniqueEmails(emails) {
//   const uniqueEmails = {};
//   let result = 0;
//   for (let i = 0; i < emails.length; i++) {
//     emails[i] = emails[i].split('@');
//     emails[i][0] = emails[i][0].split('+')[0];
//     emails[i][0] = emails[i][0].replace(/\./g, '');
//     emails[i] = `${emails[i][0]}@${emails[i][1]}`;
//     if (!uniqueEmails[emails[i]]) {
//       uniqueEmails[emails[i]] = true;
//       result++;
//     }
//   }
//   return result;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 63.27% of JavaScript online submissions
// for Unique Email Addresses.
// Memory Usage: 42.1 MB, less than 22.22% of JavaScript online submissions
// for Unique Email Addresses.

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const obj = {};
  for (let i = 0; i < emails.length; i++) {
    emails[i] = emails[i].split('@');
    emails[i][0] = emails[i][0].split('+')[0];
    emails[i][0] = emails[i][0].replace(/\./g, '');
    obj[`${emails[i][0]}@${emails[i][1]}`] = true;
  }
  return Object.keys(obj).length;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ],
    expected: 2,
  },
  {
    input: ['test@foo.com'],
    expected: 1,
  },
  {
    input: [
      'test@foo.com',
      'test+bar@foo.com',
      'test+bar+baz@foo.com',
      'test+bar+baz+quux@foo.com',
    ],
    expected: 1,
  },
  {
    input: [
      'test@foo.com',
      'test.bar@foo.com',
      'test.bar.baz@foo.com',
      'test.bar.baz.quux@foo.com',
    ],
    expected: 4,
  },
  {
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
    input: ['test@foo.com', 'test@bar.com', 'test@baz.com', 'test@quux.com'],
    expected: 4,
  },
  {
    input: [
      'test@foo.com',
      'test@foo.bar.com',
      'test@foo.bar.baz.com',
      'test@foo.bar.baz.quux.com',
    ],
    expected: 4,
  },
  {
    input: [
      'test@foo.com',
      'test@foo+bar.com',
      'test@foo+bar+baz.com',
      'test@foo+bar+baz+quux.com',
    ],
    expected: 4,
  },
  {
    input: ['test@foo.com', 'test@foo.bar.com', 'test@foo+bar.com', 'test@foo+bar+baz.com'],
    expected: 4,
  },
  {
    input: ['test@foo.com', 'test@foo.com', 'test@foo.com'],
    expected: 1,
  },
  {
    input: [],
    expected: 0,
  },
  {
    input: ['test.email+alex@leetcode.com', 'test.email.leet+alex@code.com'],
    expected: 2,
  },
];

for (let { input, expected } of tests) {
  const output = numUniqueEmails(input);
  const name = JSON.stringify(input);
  if (output === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${output}`);
  }
}
