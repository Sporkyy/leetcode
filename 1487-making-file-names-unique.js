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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 224 ms, faster than 75.82% of JavaScript online submissions
// Memory Usage: 63.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = names => {
  const set = new Set();
  const map = new Map();
  for (let name of names) {
    if (!set.has(name)) {
      set.add(name);
      map.set(name, 1);
    } else {
      // console.log(name);
      // console.log(map);
      while (set.has(`${name}(${map.get(name)})`))
        map.set(name, map.get(name) + 1);
      map.set(`${name}(${map.get(name)})`, 1);
      // console.log(map);
      set.add(`${name}(${map.get(name)})`);
    }
  }
  // console.log(set);
  return [...set];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
