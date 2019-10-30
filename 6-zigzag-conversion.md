# 5-Line JavaScript Solution

## Understand The Problem

First we look at the example with 4 rows and notice the order in which the rows are populated, particularly the way it goes down and then up again.

|              | c0       | c1  | c2  |
| -----------: | -------- | --- | --- |
| 👉 **row 0** | **P** 👈 |     |     |
|        row 1 |          |     |     |
|        row 2 |          |     |     |
|        row 3 |          |     |     |

Rows: `0`

|              | c0       | c1  | c2  |
| -----------: | -------- | --- | --- |
|        row 0 | P        |     |     |
| 👉 **row 1** | **A** 👈 |     |     |
|        row 2 |          |     |     |
|        row 3 |          |     |     |

Rows: `0, 1`

|              | c0       | c1  | c2  |
| -----------: | -------- | --- | --- |
|        row 0 | P        |     |     |
|        row 1 | A        |     |     |
| 👉 **row 2** | **Y** 👈 |     |     |
|        row 3 |          |     |     |

Rows: `0, 1, 2`

|              | c0       | c1  | c2  |
| -----------: | -------- | --- | --- |
|        row 0 | P        |     |     |
|        row 1 | A        |     |     |
|        row 2 | Y        |     |     |
| 👉 **row 3** | **P** 👈 |     |     |

Rows: `0, 1, 2, 3`

|              | c0  | c1       | c2  |
| -----------: | --- | -------- | --- |
|        row 0 | P   |          |     |
|        row 1 | A   |          |     |
| 👉 **row 2** | Y   | **A** 👈 |     |
|        row 3 | P   |          |     |

Rows: `0, 1, 2, 3, 2`

|              | c0  | c1  | c2       |
| -----------: | --- | --- | -------- |
|        row 0 | P   |     |          |
| 👉 **row 1** | A   |     | **L** 👈 |
|        row 2 | Y   | A   |          |
|        row 3 | P   |     |          |

Rows: `0, 1, 2, 3, 2, 1`

And then, if we kept going, we'd see that the sequence of rows repeats at this point.

## Make a Plan

Loop through the given string and store each letter in a separate sequece for each row, as determined by the zigzag sequence. Then combine those row sequences together into a new string.

## Pseudocode It

1. Make an array with the zigzag sequence
2. Make an array with as many strings as we need rows
3. Append the characters to the row strings in zigzag sequence
4. Join the row strings in the array together

## Code It

The 4 lines of pseudocode we wrote above become 5 lines of actual code below, but it all still makes sense

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  // 1. Make an array with the zigzag sequence
  const zigzag = [...new Array(numRows).keys()];
  zigzag.push(...zigzag.slice(1, -1).reverse());
  // 2. Make an array with as many strings as we need rows
  const rows = new Array(numRows).fill('');
  // 3. Append the characters to the row strings in zigzag sequence
  [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
  // 4. Join the row strings in the array together
  return rows.join('');
};
```
