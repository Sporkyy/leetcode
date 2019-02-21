// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails =>
  new Set(
    emails.map(email => {
      const [localName, domainName] = email.split('@');
      const forwardName = localName.replace(/\./g, '').split('+')[0];
      return `${forwardName}@${domainName}`;
    })
  ).size;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const testCases = [
  {
    input: [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com'
    ],
    output: 2
  },
  {
    input: ['test@foo.com'],
    output: 1
  },
  {
    input: [
      'test@foo.com',
      'test+bar@foo.com',
      'test+bar+baz@foo.com',
      'test+bar+baz+quux@foo.com'
    ],
    output: 1
  },
  {
    input: [
      'test@foo.com',
      'test.bar@foo.com',
      'test.bar.baz@foo.com',
      'test.bar.baz.quux@foo.com'
    ],
    output: 4
  },
  {
    input: [
      'test@foo.com',
      'test+bar@foo.com',
      'test.bar@foo.com',
      'test+bar+baz@foo.com',
      'test.bar.baz@foo.com'
    ],
    output: 3
  },
  {
    input: ['test@foo.com', 'test@bar.com', 'test@baz.com', 'test@quux.com'],
    output: 4
  },
  {
    input: [
      'test@foo.com',
      'test@foo.bar.com',
      'test@foo.bar.baz.com',
      'test@foo.bar.baz.quux.com'
    ],
    output: 4
  },
  {
    input: [
      'test@foo.com',
      'test@foo+bar.com',
      'test@foo+bar+baz.com',
      'test@foo+bar+baz+quux.com'
    ],
    output: 4
  },
  {
    input: ['test@foo.com', 'test@foo.bar.com', 'test@foo+bar.com', 'test@foo+bar+baz.com'],
    output: 4
  },
  {
    input: ['test@foo.com', 'test@foo.com', 'test@foo.com'],
    output: 1
  },
  {
    input: [],
    output: 0
  }
];

testCases.forEach(testCase => {
  console.log(testCase);
  const returnedValue = numUniqueEmails(testCase.input);
  if (returnedValue === testCase.output) {
    console.log('✅');
  } else {
    console.log(`❗Returned ${returnedValue} where ${testCase.output} expected ❗`);
  }
});
