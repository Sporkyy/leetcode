// 1487. Making File Names Unique
// https://leetcode.com/problems/making-file-names-unique/

/*

Given an array of strings names of size n. You will create n folders in your
file system such that, at the ith minute, you will create a folder with the name
names[i].

Since two files cannot have the same name, if you enter a folder name which is
previously used, the system will have a suffix addition to its name in the form
of (k), where, k is the smallest positive integer such that the obtained name
remains unique.

Return an array of strings of length n where ans[i] is the actual name the
system will assign to the ith folder when you create it.

Constraints:
- 1 <= names.length <= 5 * 10^4
- 1 <= names[i].length <= 20
- names[i] consists of lower case English letters, digits and/or round brackets.

*/

import { deepStrictEqual } from 'assert';

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 7672 ms, faster than 9.34% of JavaScript online submissions
// Memory Usage: 59.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = (names, uniqueNames = new Set()) => {
//   if (!names.length) return [...uniqueNames];
//   const name = names.shift();
//   if (!uniqueNames.has(name))
//     return getFolderNames(names, uniqueNames.add(name));
//   let i = 1;
//   while (uniqueNames.has(`${name}(${i})`)) i++;
//   return getFolderNames(names, uniqueNames.add(`${name}(${i})`));
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 3936 ms, faster than 46.70% of JavaScript online submissions
// Memory Usage: 54 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const uniqueNames = new Set();
//   for (const name of names) {
//     if (!uniqueNames.has(name)) uniqueNames.add(name);
//     else {
//       let i = 1;
//       while (uniqueNames.has(`${name}(${i})`)) i++;
//       uniqueNames.add(`${name}(${i})`);
//     }
//   }
//   return [...uniqueNames];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 4132 ms, faster than 40.66% of JavaScript online submissions
// Memory Usage: 57.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const uniqueNames = new Set();
//   const counters = new Map();
//   for (const name of names) {
//     if (!uniqueNames.has(name)) {
//       uniqueNames.add(name);
//       counters.set(name, 1);
//     } else {
//       let i = counters.get(name);
//       while (uniqueNames.has(`${name}(${i})`)) i++;
//       counters.set(`${name}(${i})`, 1);
//       uniqueNames.add(`${name}(${i})`);
//     }
//   }
//   return [...uniqueNames];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 4092 ms, faster than 41.21% of JavaScript online submissions
// Memory Usage: 57.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const set = new Set();
//   const map = new Map();
//   for (const name of names) {
//     if (!set.has(name)) {
//       set.add(name);
//       map.set(name, 1);
//     } else {
//       let i = map.get(name);
//       while (set.has(`${name}(${i})`)) i++;
//       map.set(`${name}(${i})`, 1);
//       set.add(`${name}(${i})`);
//     }
//   }
//   return [...set];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 216 ms, faster than 77.47% of JavaScript online submissions
// Memory Usage: 62.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const set = new Set();
//   const map = new Map();
//   for (const name of names) {
//     if (!set.has(name)) {
//       set.add(name);
//       map.set(name, 1);
//     } else {
//       while (set.has(`${name}(${map.get(name)})`))
//         map.set(name, map.get(name) + 1);
//       map.set(`${name}(${map.get(name)})`, 1);
//       set.add(`${name}(${map.get(name)})`);
//     }
//   }
//   return [...set];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 7588 ms, faster than 9.00% of JavaScript online submissions
// Memory Usage: 59.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} oldNames
//  * @return {string[]}
//  */
// const getFolderNames = (oldNames, newNames = new Set()) => {
//   if (!oldNames.length) return [...newNames];
//   const name = oldNames.shift();
//   if (!newNames.has(name)) return getFolderNames(oldNames, newNames.add(name));
//   let i = 1;
//   while (newNames.has(`${name}(${i})`)) i++;
//   return getFolderNames(oldNames, newNames.add(`${name}(${i})`));
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 188 ms, faster than 80.00% of JavaScript online submissions
// Memory Usage: 53.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const map = new Map();
//   for (const n of names)
//     if (!map.has(n)) map.set(n, 1);
//     else {
//       while (map.has(`${n}(${map.get(n)})`)) map.set(n, map.get(n) + 1);
//       map.set(`${n}(${map.get(n)})`, 1);
//     }
//   return [...map.keys()];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 1832 ms, faster than 52.50% of JavaScript online submissions
// Memory Usage: 58.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = (names, acts /* ACTual nameS */ = new Map()) => {
//   if (!names.length) return [...acts.keys()];
//   const n = names.shift();
//   if (!acts.has(n)) return getFolderNames(names, acts.set(n, 1));
//   while (acts.has(`${n}(${acts.get(n)})`)) acts.set(n, acts.get(n) + 1);
//   return getFolderNames(names, acts.set(`${n}(${acts.get(n)})`, 1));
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// FATAL ERROR: Scavenger: semi-space copy Allocation failed -
// JavaScript heap out of memory

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = (names, acts /* ACTual nameS */ = new Map()) => {
//   if (!names.length) return [...acts.keys()];
//   if (!acts.has(names[0]))
//     return getFolderNames(names.slice(1), acts.set(names[0], 1));
//   while (acts.has(`${names[0]}(${acts.get(names[0])})`))
//     acts.set(names[0], acts.get(names[0]) + 1);
//   return getFolderNames(
//     names.slice(1),
//     acts.set(`${names[0]}(${acts.get(names[0])})`, 1),
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 188 ms, faster than 80.00% of JavaScript online submissions
// Memory Usage: 53.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const acts = new Map(); // ACTual nameS
//   for (const n of names)
//     if (!acts.has(n)) acts.set(n, 1);
//     else {
//       while (acts.has(`${n}(${acts.get(n)})`)) acts.set(n, acts.get(n) + 1);
//       acts.set(`${n}(${acts.get(n)})`, 1);
//     }
//   return [...acts.keys()];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 3984 ms, faster than 43.00% of JavaScript online submissions
// Memory Usage: 54.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const acts = new Set(); // ACTual nameS
//   for (const n of names)
//     if (!acts.has(n)) acts.add(n);
//     else {
//       let i = 1;
//       while (acts.has(`${n}(${i})`)) i++;
//       acts.add(`${n}(${i})`);
//     }
//   return [...acts];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Status: Time Limit Exceeded

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const acts = []; // ACTual nameS
//   for (const n of names)
//     if (!acts.includes(n)) acts.push(n);
//     else {
//       let i = 1;
//       while (acts.includes(`${n}(${i})`)) i++;
//       acts.push(`${n}(${i})`);
//     }
//   return acts;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 228 ms, faster than 45.10% of JavaScript online submissions
// Memory Usage: 56.2 MB, less than 82.35% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const [ret, cnt] = [new Set(), new Map()];
//   for (const name of names) {
//     if (!ret.has(name)) {
//       ret.add(name);
//     } else {
//       do cnt.set(name, (cnt.get(name) || 0) + 1);
//       while (ret.has(`${name}(${cnt.get(name)})`));
//       ret.add(`${name}(${cnt.get(name)})`);
//     }
//   }
//   return [...ret];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 268 ms, faster than 41.18% of JavaScript online submissions
// Memory Usage: 64.8 MB, less than 7.84% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => [
//   ...names.reduce(
//     ([set, map], name) => {
//       if (!set.has(name)) {
//         set.add(name);
//       } else {
//         do map.set(name, (map.get(name) || 0) + 1);
//         while (set.has(`${name}(${map.get(name)})`));
//         set.add(`${name}(${map.get(name)})`);
//       }
//       return [set, map];
//     },
//     [new Set(), new Map()],
//   )[0],
// ];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 180 ms, faster than 76.47% of JavaScript online submissions
// Memory Usage: 55.9 MB, less than 90.20% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => [
//   ...names
//     .reduce((acc, curr) => {
//       if (!acc.has(curr)) {
//         acc.set(curr, 0);
//       } else {
//         do acc.set(curr, (acc.get(curr) || 0) + 1);
//         while (acc.has(`${curr}(${acc.get(curr)})`));
//         acc.set(`${curr}(${acc.get(curr)})`, 0);
//       }
//       return acc;
//     }, new Map())
//     .keys(),
// ];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 5544 ms, faster than 15.69% of JavaScript online submissions
// Memory Usage: 60.4 MB, less than 31.37% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => [
//   ...names
//     .reduce(
//       (acc, curr) =>
//         acc.set(
//           !acc.has(curr)
//             ? curr
//             : (cnt => {
//                 while (acc.has(`${curr}(${cnt})`)) cnt++;
//                 return curr + (cnt ? `(${cnt})` : '');
//               })(acc.get(curr) + 1),
//           0,
//         ),
//       new Map(),
//     )
//     .keys(),
// ];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 8504 ms, faster than 5.88% of JavaScript online submissions
// Memory Usage: 84.2 MB, less than 5.88% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const map = new Map();
//   for (const name of names) {
//     if (!map.has(name)) {
//       map.set(name, 1);
//     } else {
//       let cnt = map.get(name);
//       while (map.has(`${name}(${cnt})`)) cnt++;
//       map.set(`${name}(${cnt})`, 1);
//     }
//   }
//   return [...map.keys()];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 7308 ms, faster than 5.88% of JavaScript online submissions
// Memory Usage: 84.9 MB, less than 5.88% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const map = new Map();
//   const getActualName = name => {
//     let cnt = map.get(name) || 0;
//     if (cnt) {
//       while (map.has(`${name}(${cnt})`)) cnt++;
//       name = `${name}(${cnt})`;
//     }
//     map.set(name, 1);
//     return name;
//   };
//   return names.map(getActualName);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 7344 ms, faster than 5.88% of JavaScript online submissions
// Memory Usage: 64.7 MB, less than 7.84% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const next = (existing, name) => {
//     if (!existing.has(name)) return name;
//     let i = 1;
//     while (existing.has(`${name}(${i})`)) i++;
//     return `${name}(${i})`;
//   };
//   return [...names.reduce((acc, curr) => acc.add(next(acc, curr)), new Set())];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 6624 ms, faster than 5.88% of JavaScript online submissions
// Memory Usage: 65.3 MB, less than 7.84% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const seen = new Set();
//   const getActualName = name => {
//     if (seen.has(name)) {
//       let i = 1;
//       while (seen.has(`${name}(${i})`)) i++;
//       name = `${name}(${i})`;
//     }
//     seen.add(name);
//     return name;
//   };
//   return names.map(getActualName);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 7596 ms, faster than 5.88% of JavaScript online submissions
// Memory Usage: 64.8 MB, less than 7.84% of JavaScript online submissions

// /**
//  * @param {string[]} names
//  * @return {string[]}
//  */
// const getFolderNames = names => {
//   const actualNames = new Set();
//   for (let name of names) {
//     if (actualNames.has(name)) {
//       let i = 1;
//       while (actualNames.has(`${name}(${i})`)) i++;
//       name = `${name}(${i})`;
//     }
//     actualNames.add(name);
//   }
//   return [...actualNames];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 304 ms, faster than 39.22% of JavaScript online submissions
// Memory Usage: 60.8 MB, less than 27.45% of JavaScript online submissions

/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = names => [
  ...names
    .reduce((acc, curr) => {
      if (!acc.has(curr)) return acc.set(curr, 1);
      let cnt = acc.get(curr);
      while (acc.has(`${curr}(${cnt})`)) cnt++;
      acc.set(curr, cnt);
      return acc.set(`${curr}(${cnt})`, 1);
    }, new Map())
    .keys(),
];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Example 1:
deepStrictEqual(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)']), [
  'pes',
  'fifa',
  'gta',
  'pes(2019)',
]);
// Explanation: Let's see how the file system creates folder names:
// "pes" --> not assigned before, remains "pes"
// "fifa" --> not assigned before, remains "fifa"
// "gta" --> not assigned before, remains "gta"
// "pes(2019)" --> not assigned before, remains "pes(2019)"

// Example 2:
deepStrictEqual(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon']), [
  'gta',
  'gta(1)',
  'gta(2)',
  'avalon',
]);
// Explanation: Let's see how the file system creates folder names:
// "gta" --> not assigned before, remains "gta"
// "gta(1)" --> not assigned before, remains "gta(1)"
// "gta" --> the name is reserved, system adds (k), since "gta(1)" is also reserved, systems put k = 2. it becomes "gta(2)"
// "avalon" --> not assigned before, remains "avalon"

// Example 3:
deepStrictEqual(
  getFolderNames([
    'onepiece',
    'onepiece(1)',
    'onepiece(2)',
    'onepiece(3)',
    'onepiece',
  ]),
  ['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece(4)'],
);
// Explanation: When the last folder is created, the smallest positive valid k
// is 4, and it becomes "onepiece(4)".

// Example 4:
deepStrictEqual(getFolderNames(['wano', 'wano', 'wano', 'wano']), [
  'wano',
  'wano(1)',
  'wano(2)',
  'wano(3)',
]);
// Explanation: Just increase the value of k each time you create folder "wano".

// Example 5:
deepStrictEqual(getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)']), [
  'kaido',
  'kaido(1)',
  'kaido(2)',
  'kaido(1)(1)',
]);
// Explanation: Please note that system adds the suffix (k) to current name even
// it contained the same suffix before.

deepStrictEqual(
  getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)', 'kaido(2)']),
  ['kaido', 'kaido(1)', 'kaido(2)', 'kaido(1)(1)', 'kaido(2)(1)'],
);
