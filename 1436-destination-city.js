// 1436. Destination City
// https://leetcode.com/problems/destination-city/

/*

You are given the array paths, where paths[i] = [cityAi, cityBi] means there
exists a direct path going from cityAi to cityBi. Return the destination city,
that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop,
therefore, there will be exactly one destination city.

Constraints:
- 1 <= paths.length <= 100
- paths[i].length == 2
- 1 <= cityAi.length, cityBi.length <= 10
- cityAi != cityBi
- All strings consist of lowercase and uppercase English letters and the space
  character.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 76.71% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = paths => {
  const [from, to] = [new Set(), new Set()];
  for (const [f, t] of paths) {
    from.add(f);
    to.add(t);
  }
  for (const dest of to) if (!from.has(dest)) return dest;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ]),
  'Sao Paulo',
);
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which
// is the destination city. Your trip consist of: "London" -> "New York" ->
// "Lima" -> "Sao Paulo".

// Example 2:
strictEqual(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ]),
  'A',
);
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".

// // Example 3:
strictEqual(destCity([['A', 'Z']]), 'Z');
