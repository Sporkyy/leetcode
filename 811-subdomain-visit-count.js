// 811. Subdomain Visit Count
// https://leetcode.com/problems/subdomain-visit-count/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 620 ms, faster than 5.45% of JavaScript online submissions
// Memory Usage: 47.2 MB, less than 5.55% of JavaScript online submissions

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
// Memory Usage: 39.3 MB, less than 12.50% of JavaScript online submissions

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

deepStrictEqual(
  subdomainVisits(['9001 discuss.leetcode.com']).sort(),
  ['9001 com', '9001 leetcode.com', '9001 discuss.leetcode.com'].sort(),
);

deepStrictEqual(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ]).sort(),
  [
    '951 com',
    '901 mail.com',
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 org',
    '5 wiki.org',
  ].sort(),
);
