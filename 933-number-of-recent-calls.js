// 933. Number of Recent Calls
// 933-number-of-recent-calls.js

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const RecentCounter = function() {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // console.log(t);
  this.pings.push(t);
  const length = this.pings.filter(ping => null !== ping && t - 3000 <= ping).length;
  return 0 === length ? null : length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      pings: ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
      times: [, 1, 100, 3001, 3002],
    },
    expected: [null, 1, 2, 3, 3],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input: { pings, times }, expected }) => {
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

  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
