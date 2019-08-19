// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// var RecentCounter = function() {};

/**
 * @param {number} t
 * @return {number}
 */
// RecentCounter.prototype.ping = function(t) {};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1224 ms, faster than 5.11% of JavaScript online submissions
// for Number of Recent Calls.
// Memory Usage: 69.8 MB, less than 20.00% of JavaScript online submissions
// for Number of Recent Calls.

// const RecentCounter = function() {
//   this.pings = [];
// };

/**
 * @param {number} t
 * @return {number}
 */
// RecentCounter.prototype.ping = function(t) {
//   this.pings.push(t);
//   const length = this.pings.filter(ping => null !== ping && t - 3000 <= ping).length;
//   return 0 === length ? null : length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 360 ms, faster than 28.76% of JavaScript online submissions
// for Number of Recent Calls.
// Memory Usage: 72.5 MB, less than 10.00% of JavaScript online submissions
// for Number of Recent Calls.

const RecentCounter = function() {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  if (null !== t) this.pings.push(t);
  let offset = 0;
  while (offset < this.pings.length && this.pings[offset] < t - 3000) offset++;
  this.pings = this.pings.slice(offset);
  return this.pings.length || null;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      pings: ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
      times: [null, 1, 100, 3001, 3002],
    },
    expected: [null, 1, 2, 3, 3],
  },

  {
    input: {
      pings: ['RecentCounter', 'ping', 'ping', 'ping', 'ping', 'ping'],
      times: [null, 642, 1849, 4921, 5936, 5957],
    },
    expected: [null, 1, 2, 1, 2, 3],
  },
];

for ({
  input: { pings, times },
  expected,
} of tests) {
  let rc;
  let result = [];

  for (let i = 0; i < pings.length; i++) {
    const ping = pings[i];
    // console.log(ping);
    const time = times[i];
    // console.log(time);
    if ('RecentCounter' === ping) {
      rc = new RecentCounter();
      // console.log(rc);
    }
    // console.log(time);
    result.push(rc.ping(time));
  }

  const name = `pings = ${JSON.stringify(pings)}, times = ${JSON.stringify(times)}`;

  if (JSON.stringify(expected) === JSON.stringify(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
