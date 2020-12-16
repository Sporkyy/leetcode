// 1674. Minimum Moves to Make Array Complementary
// https://leetcode.com/problems/minimum-moves-to-make-array-complementary/

/*
〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

You are given an integer array nums of even length n and an integer limit. In
one move, you can replace any integer from nums with another integer between 1
and limit, inclusive.

The array nums is complementary if for all indices i (0-indexed), nums[i] +
nums[n - 1 - i] equals the same number. For example, the array [1,2,3,4] is
complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5.

Return the minimum number of moves required to make nums complementary.

## Constraints
- n == nums.length
- 2 <= n <= 105
- 1 <= nums[i] <= limit <= 105
- n is even.

〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
*/

// Time Limit Exceeded
// 108 / 113 test cases passed.

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);
//   let [minMin, maxMax] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//     const [min, max] = [x, y].sort((a, b) => a - b);
//     [mins[i], maxes[i]] = [min, max];
//     minMin = Math.min(minMin, min);
//     maxMax = Math.max(maxMax, max);
//     sums.add(min + max);
//   }
//   // console.log(mins, minMin);
//   // console.log(maxes, maxMax);
//   // console.log(sums);
//   let res = Infinity;

//   outer: for (const sum of sums) {
//     // console.log(sum);
//     let cnt = 0;
//     for (let i = 0; i < mins.length; i++) {
//       const [min, max] = [mins[i], maxes[i]];
//       if (min + max === sum) continue;
//       // console.log(sum, [min, max]);
//       if (
//         (min < sum && sum <= min + limit) ||
//         (max < sum && sum <= max + limit)
//       )
//         cnt++;
//       else cnt += 2;
//     }
//     // console.log(`sum = ${sum}, cnt = ${cnt}`);
//     res = Math.min(res, cnt);
//   }
//   let fallback = 0;
//   for (let i = 0; i < mins.length; i++) {
//     if (Math.max(...mins) < minMin + limit) fallback++;
//   }
//   if (mins.length === fallback) return Math.min(res, fallback);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded
// 108 / 113 test cases passed.

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);
//   let [minMin, maxMax] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//     const [min, max] = [x, y].sort((a, b) => a - b);
//     [mins[i], maxes[i]] = [min, max];
//     minMin = Math.min(minMin, min);
//     maxMax = Math.max(maxMax, max);
//     sums.add(min + max);
//   }
//   // console.log(mins, minMin);
//   // console.log(maxes, maxMax);
//   // console.log(sums);
//   let res = Infinity;

//   outer: for (const sum of sums) {
//     // console.log(sum);
//     let cnt = 0;
//     for (let i = 0; i < mins.length; i++) {
//       const [min, max] = [mins[i], maxes[i]];
//       if (min + max === sum) continue;
//       // console.log(sum, [min, max]);
//       if (
//         (min < sum && sum <= min + limit) ||
//         (max < sum && sum <= max + limit)
//       )
//         cnt++;
//       else cnt += 2;
//       if (res <= cnt) continue outer;
//     }
//     // console.log(`sum = ${sum}, cnt = ${cnt}`);
//     res = Math.min(res, cnt);
//   }
//   let fallback = 0;
//   for (let i = 0; i < mins.length; i++) {
//     if (Math.max(...mins) < minMin + limit) fallback++;
//   }
//   if (mins.length === fallback) return Math.min(res, fallback);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded
// 109 / 113 test cases passed.

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);
//   const sums = new Set();

//   let [minMin, maxMax] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     mins[i] = Math.min(nums[i], nums[nums.length - 1 - i]);
//     maxes[i] = Math.max(nums[i], nums[nums.length - 1 - i]);
//     minMin = Math.min(minMin, mins[i]);
//     maxMax = Math.max(maxMax, maxes[i]);
//     sums.add(mins[i] + maxes[i]);
//   }
//   // console.log(minMin, maxMax);
//   console.log(sums);

//   let res = maxMax < minMin + limit ? nums.length / 2 : Infinity;

//   outer: for (const sum of sums) {
//     if (minMin + limit < sum) continue;
//     // console.log(sum);
//     let cnt = 0;
//     for (let i = 0; i < mins.length; i++) {
//       const [min, max] = [mins[i], maxes[i]];
//       if (min + max === sum) continue;
//       // console.log(sum, [min, max]);
//       if (
//         (min < sum && sum <= min + limit) ||
//         (max < sum && sum <= max + limit)
//       )
//         cnt++;
//       else cnt += 2;
//       if (res <= cnt) continue outer;
//     }
//     // console.log(`sum = ${sum}, cnt = ${cnt}`);
//     res = Math.min(res, cnt);
//   }

//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);
//   const sums = new Set();

//   let [minMin, minMax, maxMax] = [Infinity, Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     mins[i] = Math.min(nums[i], nums[nums.length - 1 - i]);
//     maxes[i] = Math.max(nums[i], nums[nums.length - 1 - i]);
//     minMin = Math.min(minMin, mins[i]);
//     minMax = Math.min(minMax, maxes[i]);
//     maxMax = Math.max(maxMax, maxes[i]);
//     if (minMax + limit < mins[i] + maxes[i]) continue;
//     sums.add(mins[i] + maxes[i]);
//   }
//   // console.log(minMin, maxMax);
//   // console.log(sums);

//   let res = maxMax < minMin + limit ? nums.length / 2 : Infinity;

//   outer: for (const sum of sums) {
//     if (minMax + limit < sum) continue outer;
//     // console.log(sum);
//     let cnt = 0;
//     for (let i = 0; i < mins.length; i++) {
//       const [min, max] = [mins[i], maxes[i]];
//       // if (max + limit < sum + 1) continue outer;
//       if (min + max === sum) continue;
//       // console.log(sum, [min, max]);
//       if (
//         (min < sum && sum <= min + limit) ||
//         (max < sum && sum <= max + limit)
//       )
//         cnt++;
//       else cnt += 2;
//       if (res <= cnt) continue outer;
//     }
//     // console.log(`sum = ${sum}, cnt = ${cnt}`);
//     res = Math.min(res, cnt);
//   }

//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);

//   let [minMin, maxMin] = [Infinity, -Infinity];
//   let [minMax, maxMax] = [Infinity, -Infinity];
//   let [minSum, maxSum] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     mins[i] = Math.min(nums[i], nums[nums.length - 1 - i]);
//     maxes[i] = Math.max(nums[i], nums[nums.length - 1 - i]);
//     minMin = Math.min(minMin, mins[i]);
//     maxMin = Math.max(maxMin, mins[i]);
//     minMax = Math.min(minMax, maxes[i]);
//     maxMax = Math.max(maxMax, maxes[i]);
//     minSum = Math.min(mins[i] + 1, minSum);
//     maxSum = Math.max(maxes[i] + Math.max(mins[i], limit), maxSum);
//   }
//   console.log(minMin, maxMin);
//   console.log(minMax, maxMax);
//   console.log(minSum, maxSum);

//   let res = Infinity;
//   for (let i = minSum; i < maxSum; i++) {
//     console.log(i);
//     let cnt = 0;
//     for (let j = 0; j < nums.length / 2; j++) {
//       console.log(mins[j], maxes[j]);
//       if (i === mins[j] + maxes[j]) continue;
//       if (i < mins[j] + limit || i < maxes[j] + limit) cnt++;
//       else cnt += 2;
//     }
//     console.log(i, cnt);
//     res = Math.min(res, cnt);
//   }

//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = (nums, limit) => {
  const maxes = [];
  const mins = [];
  let maxMin = -Infinity;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(minMoves([1, 2, 4, 3], 4), 1);
// Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements
// are changed).
// - nums[0] + nums[3] = 1 + 3 = 4.
// - nums[1] + nums[2] = 2 + 2 = 4.
// - nums[2] + nums[1] = 2 + 2 = 4.
// - nums[3] + nums[0] = 3 + 1 = 4. Therefore, nums[i] + nums[n-1-i] = 4 for
//   every i, so nums is complementary.

/*

min | 1 | 2 |
max | 3 | 4 |

min min: 1
max max: 4

min | 4 | 4 |
max | 3 | 4 |

min | 1 | 2 |
max | 4 | 4 |

min | 4 | 4 |
max | 4 | 4 |

*/

// Example 2:
// strictEqual(minMoves([1, 2, 2, 1], 2), 2);
// Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change
// any number to 3 since 3 > limit.

// Example 3:
// strictEqual(minMoves([1, 2, 1, 2], 2), 0);
// Explanation: nums is already complementary.

// strictEqual(minMoves([1, 2, 2, 2, 4, 3], 4), 1);

/*

min | 1 | 2 | 2 |
max | 3 | 4 | 2 |
sum | 4 | 6 | 4 |

min | 1 |  2  | 2 |
max | 3 | (2) | 2 |
sum | 4 |  4  | 4 |

*/

// strictEqual(minMoves([28, 50, 76, 80, 64, 30, 32, 84, 53, 8], 84), 4);

/*

min |  8 |  50 |  76 |  32 | 30 |
max | 28 |  53 |  84 |  80 | 64 |
sum | 36 | 103 | 160 | 112 | 94 |

min min: 8
max max: 84

min | (66) |  50  |  76  |  32  | 30 |
max |  28  | (44) | (18) | (62) | 64 |
sum |  94  |  94  |  94  |  94  | 94 |

*/

// strictEqual(minMoves([37, 2, 9, 49, 58, 57, 48, 17], 58), 3);

// strictEqual(minMoves([1, 3, 1, 1, 1, 2, 3, 2, 3, 1, 3, 2, 1, 3], 3), 4);

/*

min | 1 | 1 | 1 | 1 | 1 | 2 | 2 |
max | 3 | 3 | 2 | 3 | 1 | 3 | 3 |
sum | 4 | 4 | 3 | 4 | 2 | 5 | 5 |

min | 1 | 1 |  1  | 1 |  1  |  2  |  2  |
max | 3 | 3 | (3) | 3 | (3) | (2) | (2) |
sum | 4 | 4 |  4  | 4 |  4  |  4  |  4  |

*/

strictEqual(
  minMoves([20744, 7642, 19090, 9992, 2457, 16848, 3458, 15721], 22891),
  4,
);

/*

min | 15,721 |  3,458 | 16,848 |  2,457 |
max | 20,744 |  7,642 | 19,090 |  9,992 |
sum | 36,465 | 11,100 | 35,938 | 12,449 |

min min:  2,457
max max: 20,744

min |   15,721 |   3,458  |  16,848  |   2,457  |
max |  (2,147) | (19,433) |  (6,043) | (22,891) |
sum |   25,348 |  25,348  |  25,348  |  25,348  |

*/

// strictEqual(
//   minMoves(
//     [
//       1456,
//       1714,
//       343,
//       78,
//       3873,
//       1695,
//       4137,
//       2798,
//       1233,
//       2388,
//       1088,
//       1641,
//       3974,
//       60,
//       67,
//       3277,
//       2224,
//       3813,
//       3605,
//       1291,
//       2703,
//       82,
//       3285,
//       659,
//       993,
//       2446,
//       1895,
//       1705,
//       1165,
//       4126,
//       3648,
//       2986,
//       3883,
//       930,
//       3820,
//       2143,
//       3861,
//       2479,
//       4228,
//       2480,
//       116,
//       926,
//       3065,
//       3775,
//       3639,
//       3174,
//       418,
//       2154,
//       3264,
//       4078,
//       3581,
//       4277,
//       3393,
//       881,
//       4340,
//       3482,
//       458,
//       1790,
//       4011,
//       2916,
//       1783,
//       2008,
//       152,
//       1607,
//       3341,
//       1537,
//       1459,
//       4296,
//       552,
//       3564,
//       4034,
//       2451,
//       90,
//       4210,
//       1533,
//       2951,
//       2610,
//       3057,
//       778,
//       4383,
//       731,
//       1130,
//       3743,
//       3239,
//       4349,
//       4006,
//       4345,
//       2612,
//       1744,
//       1010,
//       2318,
//       2119,
//       3153,
//       798,
//       2436,
//       3871,
//       720,
//       973,
//       2919,
//       2372,
//       3090,
//       1736,
//       31,
//       3777,
//       2574,
//       1208,
//       1342,
//       1122,
//       1473,
//       80,
//       751,
//       2165,
//       4133,
//       2822,
//       3156,
//       431,
//       2049,
//       187,
//       3378,
//       99,
//       1387,
//       624,
//       4330,
//       4313,
//       1646,
//       4065,
//       2245,
//       408,
//       1097,
//       79,
//       1918,
//       1143,
//       4183,
//       20,
//       3148,
//       1844,
//       4001,
//       385,
//       1543,
//       2187,
//       4237,
//       3388,
//       3720,
//       3204,
//       2187,
//       2585,
//       1576,
//       3106,
//       4360,
//       3227,
//       3603,
//       2609,
//       721,
//       2723,
//       480,
//       1529,
//       3104,
//       4193,
//       1344,
//       4112,
//       1047,
//       4113,
//       3410,
//       3972,
//       2594,
//       2210,
//       3349,
//       4235,
//       1563,
//       210,
//       3486,
//       2220,
//       1254,
//       83,
//       4228,
//       564,
//       806,
//       3147,
//       2124,
//       4034,
//       1237,
//       3753,
//       2612,
//       73,
//       1955,
//       56,
//       2711,
//       1893,
//       2991,
//       1277,
//       2349,
//       1414,
//       3046,
//       2389,
//       2809,
//       3176,
//       913,
//       3709,
//       4028,
//       1544,
//       3655,
//       1090,
//       2956,
//       270,
//       3560,
//       3451,
//       1044,
//       2554,
//       2253,
//       3415,
//       3244,
//       3429,
//       3590,
//       3061,
//       4182,
//       233,
//       3325,
//       2517,
//       2908,
//       610,
//       131,
//       1889,
//       2796,
//       2041,
//       3706,
//       2385,
//       1001,
//       2218,
//       2675,
//       844,
//       2750,
//       942,
//       598,
//       1730,
//       574,
//       2514,
//       4266,
//       3477,
//       264,
//       3248,
//       4325,
//       95,
//       982,
//       25,
//       239,
//       4349,
//       27,
//       3207,
//       4344,
//       2441,
//       3232,
//       1716,
//       2840,
//       499,
//       1950,
//       1296,
//       4135,
//       1460,
//       3782,
//       2754,
//       4247,
//       4029,
//       615,
//       3489,
//       556,
//       3556,
//       3773,
//       266,
//       2385,
//       3651,
//       2699,
//       1146,
//       1172,
//       678,
//       563,
//       3308,
//       2095,
//       21,
//       4333,
//       3891,
//       2995,
//       2284,
//       3997,
//       4009,
//       1974,
//       28,
//       152,
//       2119,
//       722,
//       3000,
//       2089,
//       3997,
//       93,
//       2939,
//       3429,
//       1648,
//       898,
//       4114,
//       3172,
//       1310,
//       1304,
//       3651,
//       997,
//       3496,
//       3529,
//       3435,
//       584,
//       1425,
//       3122,
//       2185,
//       1012,
//       4304,
//       1811,
//       3323,
//       2980,
//       1413,
//       4127,
//       3485,
//       1466,
//       457,
//       4319,
//       3135,
//       3552,
//       1427,
//       1142,
//       2392,
//       2643,
//       3025,
//       3334,
//       3930,
//       3136,
//       3386,
//       1245,
//       1827,
//       3343,
//       3702,
//       235,
//       4135,
//       2671,
//       3370,
//       3431,
//       877,
//       1296,
//       1557,
//       1941,
//       2935,
//       432,
//       2933,
//       2123,
//       1078,
//       2329,
//       3230,
//       573,
//       2178,
//       3287,
//       3493,
//       2648,
//       2403,
//       2201,
//       2111,
//       3265,
//       3739,
//       1535,
//       3579,
//       3229,
//       2,
//       2328,
//       2318,
//       507,
//       1646,
//       2208,
//       1107,
//       64,
//       3838,
//       3950,
//       542,
//       3878,
//       3618,
//       898,
//       69,
//       976,
//       1456,
//       1190,
//       2593,
//       2354,
//       2804,
//       1143,
//       1519,
//       1348,
//       1432,
//       894,
//       1060,
//       3276,
//       369,
//       4245,
//       3162,
//       2689,
//       3721,
//       2898,
//       4257,
//       1167,
//       497,
//       3412,
//       141,
//       551,
//       1847,
//       1440,
//       1660,
//       776,
//       2829,
//       3658,
//       119,
//       371,
//       3042,
//       3275,
//       4371,
//       874,
//       2852,
//       3074,
//       3218,
//       3271,
//       384,
//       3563,
//       3609,
//       1411,
//       4076,
//       3916,
//       2691,
//       4320,
//       275,
//       1280,
//       4296,
//       1613,
//       235,
//       475,
//       1062,
//       2572,
//       1538,
//       2916,
//       1727,
//       1017,
//       54,
//       2071,
//       398,
//       1472,
//       1137,
//       274,
//       3132,
//       1600,
//       1594,
//       2380,
//       896,
//       843,
//       1928,
//       2424,
//       1369,
//       1883,
//       4057,
//       166,
//       3162,
//       1195,
//       1977,
//       2765,
//       1158,
//       138,
//       4073,
//       4163,
//       174,
//       2923,
//       470,
//       3745,
//       647,
//       1177,
//       669,
//       3743,
//       3114,
//       519,
//       2021,
//       489,
//       2878,
//       1268,
//       308,
//       1943,
//       4064,
//       279,
//       1248,
//       1430,
//       927,
//       2014,
//       171,
//       1408,
//       2710,
//       1784,
//       1264,
//       4050,
//       1051,
//       3446,
//       2208,
//       2874,
//       1896,
//       68,
//       1382,
//       723,
//       226,
//       3248,
//       2643,
//       723,
//       3301,
//       3447,
//       1877,
//       1484,
//       4394,
//       1154,
//       3732,
//       2430,
//       770,
//       3405,
//       441,
//       1330,
//       3235,
//       2968,
//       764,
//       4092,
//       2177,
//       1443,
//       3054,
//       1816,
//       3622,
//       3250,
//       437,
//       2262,
//       2512,
//       3316,
//       2994,
//       1016,
//       842,
//       2503,
//       1972,
//       1134,
//       3204,
//       1286,
//       602,
//       3145,
//       3872,
//       3067,
//       3533,
//       597,
//       2458,
//       645,
//       4382,
//       2221,
//       1707,
//       831,
//       3869,
//       805,
//       3858,
//       1290,
//       4262,
//       4165,
//       24,
//       3856,
//       1919,
//       2991,
//       4191,
//       268,
//       1243,
//       3872,
//       3041,
//       4075,
//       1092,
//       3829,
//       480,
//       1574,
//       755,
//       1011,
//       2775,
//       4022,
//       4047,
//       1978,
//       1153,
//       821,
//       1756,
//       144,
//       410,
//       2111,
//       4040,
//       3210,
//       3687,
//       3393,
//       67,
//       2987,
//       4272,
//       675,
//       3772,
//       1815,
//       3274,
//       3288,
//       3158,
//       381,
//       2494,
//       653,
//       4283,
//       2581,
//       2913,
//       1929,
//       1134,
//       289,
//       310,
//       3282,
//       2109,
//       455,
//       3876,
//       834,
//       78,
//       794,
//       1987,
//       982,
//       247,
//       655,
//       310,
//       1057,
//       462,
//       1890,
//       1061,
//       2841,
//       2528,
//       1000,
//       2608,
//       3159,
//       41,
//       1036,
//       3194,
//       3110,
//       3265,
//       2375,
//       3147,
//       1048,
//       1750,
//       702,
//       3816,
//       1024,
//       2345,
//       256,
//       4005,
//       3126,
//       3487,
//       642,
//       2956,
//       4044,
//       3296,
//       3638,
//       792,
//       2408,
//       3319,
//       1158,
//       2425,
//       484,
//       590,
//       4177,
//       2854,
//       2788,
//       1582,
//       228,
//       567,
//       737,
//       2164,
//       2627,
//       3403,
//       3052,
//       2379,
//       1687,
//       3755,
//       145,
//       1076,
//       668,
//       1826,
//       816,
//       2776,
//       1369,
//       1070,
//       3877,
//       4028,
//       1587,
//       2949,
//       3847,
//       3636,
//       537,
//       4242,
//       2527,
//       3311,
//       2109,
//       1703,
//       4371,
//       3468,
//       2441,
//       2115,
//       40,
//       1241,
//       481,
//       228,
//       159,
//       821,
//       597,
//       3296,
//       1891,
//       2852,
//       2633,
//       435,
//       958,
//       461,
//       880,
//       1369,
//       1146,
//       392,
//       1612,
//       2956,
//       2361,
//       1651,
//       2823,
//       857,
//       2338,
//       2806,
//       3313,
//       1439,
//       2221,
//       3961,
//       1420,
//       2128,
//       3093,
//       394,
//       627,
//       2693,
//       4084,
//       2224,
//       60,
//       4245,
//       1795,
//       2246,
//       2977,
//       36,
//       227,
//       2611,
//       3154,
//       4331,
//       3763,
//       3035,
//       2782,
//       623,
//       1789,
//       4220,
//       486,
//       3683,
//       4058,
//       679,
//       311,
//       3384,
//       3433,
//       1142,
//       2301,
//       1297,
//       812,
//       1314,
//       233,
//       3002,
//       4095,
//       1060,
//       2884,
//       3328,
//       1144,
//       2016,
//       3786,
//       1456,
//       253,
//       3727,
//       632,
//       998,
//       3802,
//       2995,
//       2125,
//       466,
//       1590,
//       2020,
//       1663,
//       3776,
//       1672,
//       876,
//       4127,
//       1547,
//       643,
//       701,
//       1139,
//       659,
//       2477,
//       3155,
//       43,
//       3075,
//       144,
//       652,
//       4089,
//       3397,
//       1654,
//       3997,
//       356,
//       3007,
//       2885,
//       1348,
//       1341,
//       2240,
//       2031,
//       3096,
//       200,
//       3660,
//       3516,
//       1752,
//       1867,
//       1170,
//       3946,
//       1671,
//       3378,
//       417,
//       492,
//       2462,
//       3969,
//       2473,
//       2316,
//       149,
//       2972,
//       3982,
//       3494,
//       2635,
//       950,
//       1747,
//       162,
//       3120,
//       1354,
//       4084,
//       1135,
//       3076,
//       297,
//       4201,
//       3085,
//       3308,
//       2913,
//       2775,
//       3139,
//       3694,
//       1093,
//       2695,
//       2353,
//       3629,
//       1904,
//       2278,
//       1832,
//       649,
//       1541,
//       1465,
//       879,
//       3118,
//       4306,
//       583,
//       3227,
//       2252,
//       3364,
//       1742,
//       4054,
//       2970,
//       135,
//       4018,
//       4353,
//       1002,
//       2991,
//       3762,
//       1415,
//       266,
//       2648,
//       639,
//       975,
//       2394,
//       855,
//       3666,
//       4260,
//       2842,
//       2298,
//       3581,
//       3239,
//       77,
//       1721,
//       3483,
//       2928,
//       755,
//       2377,
//       1753,
//       499,
//       931,
//       3344,
//       3139,
//       4137,
//       2670,
//       3720,
//       4383,
//       928,
//       3341,
//       3934,
//       2193,
//       1769,
//       1772,
//       2579,
//       2120,
//       3054,
//       4047,
//       3826,
//       698,
//       3610,
//       2955,
//       1818,
//       2650,
//       1264,
//       588,
//       4284,
//       406,
//       1293,
//       3339,
//       3239,
//       1614,
//       1063,
//       4320,
//       919,
//       3674,
//       3974,
//       2672,
//       2464,
//       1770,
//       2791,
//       1591,
//       4366,
//       3710,
//       1923,
//       3731,
//     ],
//     4395,
//   ),
//   467,
// );
