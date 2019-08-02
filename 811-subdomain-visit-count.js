// 811. Subdomain Visit Count
// https://leetcode.com/problems/subdomain-visit-count/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 620 ms, faster than 5.45% of JavaScript online submissions
// for Subdomain Visit Count.
// Memory Usage: 47.2 MB, less than 5.55% of JavaScript online submissions
// for Subdomain Visit Count.

// const domainHierarchy = domain => {
//   let a = [];
//   let s = domain;
//   a.push(domain);
//   while (-1 < s.indexOf('.')) {
//     s = s.slice(s.indexOf('.') + 1);
//     a.push(s);
//   }
//   return a;
// };

// const allDomains = domains => {
//   let a = [];
//   domains.forEach(d => (a = [...a, ...domainHierarchy(d)]));
//   return Array.from(new Set(a));
// };

// const cpdomainVisits = s => parseInt(s.split(' ')[0], 10);

// const cpdomainDomain = s => s.split(' ')[1];

// const domainMatch = (sub, domain) => RegExp(`${sub}$`).test(domain);

// /**
//  * @param {string[]} cpdomains
//  * @return {string[]}
//  */
// const subdomainVisits = cpdomains => {
//   const justTheDomains = cpdomains.map(s => cpdomainDomain(s));
//   // console.log(justTheDomains);
//   const allTheDomains = allDomains(justTheDomains);
//   // console.log(allTheDomains);
//   const answer = new Map(allTheDomains.map(d => [d, 0]));
//   // console.log(answer);
//   for (let key of answer.keys()) {
//     cpdomains.forEach(cpdomain => {
//       if (domainMatch(key, cpdomainDomain(cpdomain))) {
//         answer.set(key, answer.get(key) + cpdomainVisits(cpdomain));
//       }
//     });
//   }
//   // console.log(answer);
//   return Array.from(answer, ([key, value]) => `${value} ${key}`);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 82.75% of JavaScript online submissions
// for Subdomain Visit Count.
// Memory Usage: 39.3 MB, less than 12.50% of JavaScript online submissions
// for Subdomain Visit Count.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = cpdomains => {
  const map = new Map();
  for (let cpdomain of cpdomains) {
    const [num, hostname] = cpdomain.split(' ');
    const domains = hostname.split('.').reverse();
    let memo = '';
    for (let domain of domains) {
      memo = memo.length ? `${domain}.${memo}` : domain;
      if (!map.has(memo)) map.set(memo, 0);
      map.set(memo, map.get(memo) + parseInt(num, 10));
    }
  }
  const result = [];
  map.forEach((value, key) => result.push(`${value} ${key}`));
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: ['9001 discuss.leetcode.com'],
    expected: ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'],
  },

  {
    input: ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'],
    expected: [
      '901 mail.com',
      '50 yahoo.com',
      '900 google.mail.com',
      '5 wiki.org',
      '5 org',
      '1 intel.mail.com',
      '951 com',
    ],
  },
];

const arraysHaveSameElements = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = a1.length - 1; 0 <= i; --i) {
    if (a2.indexOf(a1[i]) < 0) return false;
    if (a1.indexOf(a2[i]) < 0) return false;
  }
  return true;
};

for ({ input, expected } of tests) {
  const result = subdomainVisits(input);
  const name = input.join(', ');
  if (arraysHaveSameElements(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
