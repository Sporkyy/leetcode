# JavaScript Zigzag Sequence Solution

This solution is a little different from the other solutions I see here.

Notice the order in which the rows are populated. The way it goes down and
then up again.

|             | c0    | c1  | c2  |
| ----------: | ----- | --- | --- |
| 👉**row 0** | **P** |     |     |
|       row 1 |       |     |     |
|       row 2 |       |     |     |
|       row 3 |       |     |     |

## `[0]`

|             | c0    | c1  | c2  |
| ----------: | ----- | --- | --- |
|       row 0 | P     |     |     |
| 👉**row 1** | **A** |     |     |
|       row 2 |       |     |     |
|       row 3 |       |     |     |

## `[0, 1]`

|             | c0    | c1  | c2  |
| ----------: | ----- | --- | --- |
|       row 0 | P     |     |     |
|       row 1 | A     |     |     |
| 👉**row 2** | **Y** |     |     |
|       row 3 |       |     |     |

## `[0, 1, 2]`

|             | c0    | c1  | c2  |
| ----------: | ----- | --- | --- |
|       row 0 | P     |     |     |
|       row 1 | A     |     |     |
|       row 2 | Y     |     |     |
| 👉**row 3** | **P** |     |     |

## `[0, 1, 2, 3]`

|             | c0  | c1    | c2  |
| ----------: | --- | ----- | --- |
|       row 0 | P   |       |     |
|       row 1 | A   |       |     |
| 👉**row 2** | Y   | **A** |     |
|       row 3 | P   |       |     |

## `[0, 1, 2, 3, 2]`

|             | c0  | c1  | c2    |
| ----------: | --- | --- | ----- |
|       row 0 | P   |     |       |
| 👉**row 1** | A   |     | **L** |
|       row 2 | Y   | A   |       |
|       row 3 | P   |     |       |

## `[0, 1, 2, 3, 2, 1]`

We just need to repeat that sequence as we go through the string.

[Period 4 Zigzag Sequence](https://oeis.org/A007877)

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const seq = [...new Array(numRows).keys()];
  seq.push(...seq.slice(1, -1).reverse());
  const rows = new Array(numRows).fill('');
  [...s].forEach((c, i) => (rows[seq[i % seq.length]] += c));
  return rows.join('');
};
```
