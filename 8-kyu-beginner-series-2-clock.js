// 8 kyu | Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

/*

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to
milliseconds.

## Example
- past(0, 1, 1) == 61000

Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const past = (h, m, s) => 1000 * (h * 60 * 60 + m * 60 + s);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(past(0, 0, 1), 1000);
strictEqual(past(0, 1, 0), 60000);
strictEqual(past(0, 1, 1), 61000);
strictEqual(past(1, 1, 1), 3661000);
strictEqual(past(0, 0, 0), 0);
strictEqual(past(1, 0, 1), 3601000);
strictEqual(past(1, 0, 0), 3600000);
