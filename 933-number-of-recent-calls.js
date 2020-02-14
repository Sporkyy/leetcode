// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

/*

Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where `t` represents some time
in milliseconds.

Return the number of pings that have been made from 3000 milliseconds
ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value
of `t` than before.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// var RecentCounter = function() {};

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1224 ms, faster than 5.11% of JavaScript online submissions
// Memory Usage: 69.8 MB, less than 20.00% of JavaScript online submissions

// const RecentCounter = function() {
//   this.pings = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//   this.pings.push(t);
//   const length = this.pings.filter(ping => null !== ping && t - 3000 <= ping).length;
//   return 0 === length ? null : length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 360 ms, faster than 28.76% of JavaScript online submissions
// Memory Usage: 72.5 MB, less than 10.00% of JavaScript online submissions

// const RecentCounter = function() {
//   this.pings = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//   if (null !== t) this.pings.push(t);
//   let offset = 0;
//   while (offset < this.pings.length && this.pings[offset] < t - 3000) offset++;
//   this.pings = this.pings.slice(offset);
//   return this.pings.length || null;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 352 ms, faster than 24.55% of JavaScript online submissions
// Memory Usage: 72.8 MB, less than 10.00% of JavaScript online submissions

// const RecentCounter = function() {
//   this.pings = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//   if (null !== t) this.pings.push(t);
//   let offset = 0;
//   while (offset < this.pings.length && this.pings[offset] < t - 3000) offset++;
//   this.pings = this.pings.slice(offset);
//   return this.pings.length || null;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 248 ms, faster than 90.42% of JavaScript online submissions
// Memory Usage: 56.2 MB, less than 100.00% of JavaScript online submissions

const RecentCounter = function() {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) this.queue.shift();
  return this.queue.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

const runTest = (pings, times) => {
  let [result, rc] = [[], new RecentCounter()];
  for (let i = 0; i < pings.length; i++) {
    const [ping, time] = [pings[i], times[i]];
    result.push(rc.ping(time));
  }
  return result;
};

let pings, times;

deepStrictEqual(
  runTest(['ping', 'ping', 'ping', 'ping'], [1, 100, 3001, 3002]),
  [1, 2, 3, 3],
);

deepStrictEqual(
  runTest(
    ['ping', 'ping', 'ping', 'ping', 'ping'],
    [642, 1849, 4921, 5936, 5957],
  ),
  [1, 2, 1, 2, 3],
);
