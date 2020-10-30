// 1626. Best Team With No Conflicts
// https://leetcode.com/problems/best-team-with-no-conflicts/

/*

You are the manager of a basketball team. For the upcoming tournament, you want
to choose the team with the highest overall score. The score of the team is the
sum of scores of all the players in the team.

However, the basketball team is not allowed to have conflicts. A conflict exists
if a younger player has a strictly higher score than an older player. A conflict
does not occur between players of the same age.

Given two lists, scores and ages, where each scores[i] and ages[i] represents
the score and age of the ith player, respectively, return the highest overall
score of all possible basketball teams.

## Constraints
- 1 <= scores.length, ages.length <= 1000
- scores.length == ages.length
- 1 <= scores[i] <= 106
- 1 <= ages[i] <= 1000

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const isValid = (score, age, scores, ages) => {};

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = (scores, ages) => {
  let max = -Infinity,
    sum = 0;
  const x = scores
    .map((score, idx) => ({ score: score, age: ages[idx] }))
    .sort(({ score: c, age: a }, { score: d, age: b }) => a - b || c - d)
    .map(o => o.score) // ?
    .reduce((acc, curr) => {
      max = Math.max(max, curr); // ?
      console.log(max, curr, sum);
      if (max <= curr) sum += curr;
      else [max, sum] = [curr, 0];
      console.log(sum);
      return Math.max(acc, sum);
    }, -Infinity);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]), 34);
// Explanation: You can choose all the players.

// Example 2:
// strictEqual(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]), 16);
// Explanation: It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.

/*

2|4, 1|5, 2|6, 1|5

1|5, 1|5, 2|4, 2|6

*/

// Example 3:
strictEqual(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]), 6);
// Explanation: It is best to choose the first 3 players.

// strictEqual(bestTeamScore([2, 8, 9], [5, 2, 5]), 17);

// strictEqual(bestTeamScore([9, 2, 8, 8, 2], [4, 1, 3, 3, 5]), 27);

/*

| 9 | 2 | 8 | 8 | 2 |
| 4 | 1 | 3 | 3 | 5 |
| ------------- |   |

*/
