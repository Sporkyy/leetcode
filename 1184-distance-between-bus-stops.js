// 1184. Distance Between Bus Stops
// https://leetcode.com/problems/distance-between-bus-stops/

/*

A bus has n stops numbered from 0 to n - 1 that form a circle. We know the
distance between all pairs of neighboring stops where distance[i] is the
distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

Constraints:
- 1 <= n <= 10^4
- distance.length == n
- 0 <= start, destination < n
- 0 <= distance[i] <= 10^4

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 81.88% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = (distance, start, destination) =>
  destination < start
    ? distanceBetweenBusStops(distance, destination, start)
    : Math.min(
        distance.slice(start, destination).reduce((acc, curr) => acc + curr, 0),
        distance
          .concat(distance)
          .slice(destination, start + distance.length)
          .reduce((acc, curr) => acc + curr, 0),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(distanceBetweenBusStops([1, 2, 3, 4], 0, 1), 1);
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// Example 2:
strictEqual(distanceBetweenBusStops([1, 2, 3, 4], 0, 2), 3);
// Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.

// Example 3:
strictEqual(distanceBetweenBusStops([1, 2, 3, 4], 0, 3), 4);
// Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

strictEqual(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2), 17);
