// 1839. Longest Substring Of All Vowels in Order
// https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/

/*
A string is considered **beautiful** if it satisfies the following conditions:

- Each of the 5 English vowels (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`) must appear
  **at least once** in it.
- The letters must be sorted in **alphabetical order** (i.e. all `'a'`s before
  `'e'`s, all `'e'`s before `'i'`s, etc.).

For example, strings `"aeiou"` and `"aaaaaaeiiiioou"` are considered beautiful,
but `"uaeio"`, `"aeoiu"`, and `"aaaeeeooo"` are **not beautiful**.

Given a string `word` consisting of English vowels, return the **length of the
longest beautiful substring** of `word`. If no such substring exists, return
`0`.

A **substring** is a contiguous sequence of characters in a string.

## Constraints

- 1 <= word.length <= 5 * 105
- word consists of characters 'a', 'e', 'i', 'o', and 'u'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word =>
//   (word.match(/a+e+i+o+u+/g) || []).reduce(
//     (acc, curr) => Math.max(acc, curr.length),
//     0,
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 244 ms, faster than 22.48% of JavaScript online submissions
// Memory Usage: 50.3 MB, less than 29.46% of JavaScript online submissions

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const map = new Map([
//     [undefined, 'a'],
//     ['a', 'ae'],
//     ['e', 'ei'],
//     ['i', 'io'],
//     ['o', 'ou'],
//     ['u', 'u'],
//   ]);
//   let max = 0;
//   for (let i = 0, cnt = 0, set = new Set(word[0]); i < word.length; i++) {
//     if (map.get(word[i - 1]).includes(word[i])) {
//       cnt++;
//     } else {
//       set.clear();
//       if ('a' === word[i]) cnt = 1;
//       else cnt = 0;
//     }
//     set.add(word[i]);
//     // console.log(`${word[i]} ${cnt} (${set.size})`);
//     if (5 === set.size) max = Math.max(max, cnt);
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 152 ms, faster than 62.02% of JavaScript online submissions
// Memory Usage: 51.9 MB, less than 22.48% of JavaScript online submissions

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const isNext = (x, y) =>
//     ({
//       a: 'a' === y || 'e' === y,
//       e: 'e' === y || 'i' === y,
//       i: 'i' === y || 'o' === y,
//       o: 'o' === y || 'u' === y,
//       u: 'u' === y,
//     }[x]);
//   let max = 0;
//   for (
//     let i = 1, cnt = 'a' === word[0] ? 1 : 0, last = word[0];
//     i < word.length;
//     i++
//   ) {
//     if (cnt && isNext(last, word[i])) cnt++;
//     else if ('a' === word[i]) cnt = 1;
//     else cnt = 0;
//     if ('u' === word[i]) max = Math.max(max, cnt);
//     last = word[i];
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 452 ms, faster than 7.75% of JavaScript online submissions
// Memory Usage: 67.2 MB, less than 10.08% of JavaScript online submissions

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const isNext = (x, y) =>
//     ({
//       a: 'a' === y || 'e' === y,
//       e: 'e' === y || 'i' === y,
//       i: 'i' === y || 'o' === y,
//       o: 'o' === y || 'u' === y,
//       u: 'u' === y,
//     }[x]);
//   let [stk, max] = [[], 0];
//   for (let i = 0; i < word.length; i++) {
//     if ('a' === word[i] && 'a' !== stk[stk.length - 1]) stk = [word[i]];
//     else if (isNext(stk[stk.length - 1], word[i])) stk.push(word[i]);
//     else stk = [];
//     if ('u' === stk[stk.length - 1]) max = Math.max(max, stk.length);
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const str = 'aeiou';
//   let max = 0;
//   for (let i = 0, j = 0; i < word.length; i++, j++) {
//     if (str[0] === word[i]) j = 0;
//     while (word[i] === str[j] && i < word.length && j < str.length) {
//       while (word[i] === str[j]) i++;
//       if (word[i + 1] === str[j + 1]) {
//         i++;
//         j++;
//       }
//     }
//     console.log(j);
//     // if (j === str.length) max = Math.max(max, i - l + 1);
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const str = 'aeiou';
//   let [max, i, j] = [0, 0, 0];
//   while (i < word.length) {
//     console.log(word[i], str[j]);
//     if (word[i + 1] === str[j + 1]) j++;
//     i++;
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const str = 'aeiou';
//   let max = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (str[0] !== word[i]) continue;
//     for (let j = 0; word[i] === str[j]; j++) {
//       console.log(str[j % 5]);
//       if (word[i] !== str[j]) i++;
//     }
//     console.log(i);
//     // while (i < word.length) {
//     //   console.log(word[i], str[j]);
//     //   if (word[i + 1] === str[j + 1]) j++;
//     //   i++;
//     // }
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const str = 'aeiou';
//   let max = 0;
//   for (let i = 0, j = 0, cnt = 0; i < word.length; i++) {
//     if (!cnt && str[0] === word[i]) j = 0;

//     // if (word[i] === str[j + 1]) j++;
//     // else if (word[i] === str[j]) i++;
//     // if (word[i] === str[j]) cnt++;
//     // else [j, cnt] = [0, 0];
//     console.log(word[i], str[j], cnt);
//     // if (str.length - 1 === j) max = Math.max(max, cnt);
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const str = 'aeiou';
//   let max = 0;
//   for (let i = 0; i < word.length; i++) {
//     let x = 0;
//     for (let j = 0; j < str.length && word[i + x + 1] = ; j++) {
//       while (word[i + x] === str[j]) x++;
//     }
//     i += x;
//   }
//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const matrix = [
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//   ];
//   let max = 0;
//   for (let i = 0, iRow = 0, iCol = 0; i < word.length; i++) {
//     if (!(iRow + iCol) && 'a' !== word[i]) continue;
//     const move = [0, 0];
//     if (word[i + 1] === matrix[(iRow + 1) % 5][iCol % 5]) move[0]++;
//     if (word[i + 1] === matrix[iRow % 5][(iCol + 1) % 5]) move[1]++;
//     if (!(move[0] + move[1])) [iRow, iCol] = [0, 0];
//     else [iRow, iCol] = [iRow + move[0], iCol + move[1]];
//     if (3 < iCol) max = Math.max(max, iRow + iCol);
//     console.log(`${word[i]} (${iRow},${iCol})`);
//   }

//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const longestBeautifulSubstring = word => {
//   const matrix = [
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//     ['a', 'e', 'i', 'o', 'u'],
//   ];
//   let max = 0;
//   for (let i = 0, iRow = 0, iCol = 0; i < word.length; i++) {
//     // if ('a' !== word[i - 1]) {
//     //   [iRow, iCol] = [0, 0];
//     //   continue;
//     // }
//     // if (!(iRow + iCol) && 'a' !== word[i]) continue;
//     // const move = [0, 0];
//     if (word[i] === matrix[iRow % 5][iCol % 5]) {
//       if (word[i + 1] === matrix[(iRow + 1) % 5][iCol % 5]) iRow++;
//       else if (word[i + 1] === matrix[iRow % 5][(iCol + 1) % 5]) iCol++;
//     } else {
//       [iRow, iCol] = [0, 0];
//     }
//     // if (!(move[0] + move[1])) [iRow, iCol] = [0, 0];
//     // else [iRow, iCol] = [iRow + move[0], iCol + move[1]];
//     if (3 < iCol) max = Math.max(max, iRow + iCol + 1);
//     console.log(`${word[i]} (${iRow},${iCol})`);
//   }

//   return max;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 240 ms, faster than 21.01% of JavaScript online submissions
// Memory Usage: 48.6 MB, less than 68.12% of JavaScript online submissions

/**
 * @param {string} word
 * @return {number}
 */
const longestBeautifulSubstring = word => {
  const vowels = 'aeiou';

  let [max, i, x, y] = [0, 0, 0, 0];

  while (i < word.length) {
    // console.log(`🟢 ${word[i]} ${x} ${y}`);
    if (word[i] === vowels[x]) x++;
    else if (word[i] === vowels[x - 1]) y++;
    else if (0 < x + y) {
      [x, y] = [0, 0];
      continue;
    }
    // console.log(`🛑 ${word[i]} ${x} ${y}`);
    // console.log(`〰〰〰〰〰〰〰〰〰〰`);
    i++;
    if (4 < x) max = Math.max(max, x + y);
  }

  // while (i < word.length) {
  //   console.log(`${word[i]} ${x} ${y}`);
  //   if (word[i] === vowels[x]) {
  //     y++;
  //   } else if (word[i] === vowels[x + 1]) {
  //     x++;
  //   } else if (0 < x + y) {
  //     [x, y] = [0, 0];
  //     continue;
  //   }
  //   if (4 === x) max = Math.max(max, x + y);
  //   i++;
  // }

  // for (let i = 0, x = -1, y = -1; i < word.length; i++) {
  //   console.log(`${word[i]} (${x}, ${y})`);
  //   if ('a' === word[i]) {
  //     if (0 < x) [x, y] = [0, 0];
  //     else y++;
  //   } else if ('u' === word[i]) {
  //   } else {
  //     if (word[i] !== vowels[x] || )
  //   }
  // else if (word[i] !== vowels[i] && word[i] !== vowels[i + 1]) {
  //   [x, y] = [-1, -1];
  // }
  // if (-1 < y && word[i] === vowels[x]) y++;
  // if (-1 < x && word[i] === vowels[x + 1]) x++;
  // If at the end of a sequence
  // if (4 === x && 'u' !== word[i + 1]) {
  //   max = Math.max(max, x + y);
  //   [x, y] = [-1, -1];
  //   continue;
  // }
  // if ('a' === word[i] && (x < 0 || (0 < x && 0 < y))) [x, y] = [0, 0];
  // // Start a sequence
  // // Next character in word is same vowelstar
  // else if (0 <= x && word[i] === vowels[x]) y++;
  // // Next character in word is next vowel
  // else if (0 <= x && word[i] === vowels[x + 1]) x++;
  // // Sequence is broken
  // else {
  //   if (4 === x) max = Math.max(max, x + y);
  //   [x, y] = [-1, -1];
  // }
  // }

  return max;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(longestBeautifulSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu'), 13);
// Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of
// length 13.

// Example 2:
strictEqual(longestBeautifulSubstring('aeeeiiiioooauuuaeiou'), 5);
// Explanation: The longest beautiful substring in word is "aeiou" of length 5.

// Example 3:
strictEqual(longestBeautifulSubstring('a'), 0);
// Explanation: There is no beautiful substring, so return 0.

strictEqual(longestBeautifulSubstring('u'), 0);

strictEqual(longestBeautifulSubstring('uuuuu'), 0);

strictEqual(
  longestBeautifulSubstring(
    'auoeioueiaaioeuieuoaieuaoeuoaiaoueioiaeuiuaeouaoie',
  ),
  0,
);

strictEqual(
  longestBeautifulSubstring(
    'ooueeieaauauuiuiuoauoeuioeaaaiueiiiieeaooaioouueaiaooouuuioiuaieeuiaeeuoeuoaaaaauuaioaiaoiaoiueaauuaaieauaoeaoeieeooauoueauaeeiaiaeaoeouaeuaeoaeeieoaeiiaeeuiiaoueaauioaueeiuieiuaoieueiiauuoooaueaeaaaioaoauuoaeuaiooauoiuiuieeoaiiieoaauaueueioeaauiuaoouiioaooeiaaeeiiiiouioueoiaiauiauaaiuuuuoaueoaoiiaiuouaaeouuauauiiaauuioeaioaiaauiiaaoeaaioeuoiueeaieiaeaouoaaoeeiieaoeaieoiiiiaueieaueieoeaaueaaueoueoeoaoeuauiiuuaeouiuuiauoeouueiueoaiouiiaeoiioiuaauaaeeauueaieiuuoaieuoauuiiuiieeaoaaaoiaeauiiuiuiiiaaaieaueauaieuouauoouueieeeeaaeoiaiuaeooiuooieuoaaooauueeueoeaioeauuuauueeiuaiuouaiauaeuioieuoaoaeoeiauueaaieaauaaeaeaieaaoiioiuuaauauuaieueoeeuaiiaaueoeuaiaoeaioiaaeuiiiauueeoouuueaooouuaeuioaaeiaieaeiiueoeioiaaueuuaieiaooiioauoeiiaaoaaoaaoeuoiuiaeeiaouaioaeuoaoaeiaieaeieioieeoieaeuouiiuauaeouoiiieeeoeaoieuaaiuoaaoaiauoauuouoaeiaouiiuaaiuuiueaoieuuaoouoiooaeiaeoaaieeooaeaauuouaoioueeeoiuioeuiiaiaoiaoaoeaeiuuuoaeiueiueeuoiiuaaoiueiueuuaaeuuuuiauuouoiieuiiaooiaauoiaaueuioioaeaeeiaeaoeaouaeaaoiiauaaaoioauuuuoeeaaeoouooiuaeeoeoeeieeeoeeaieueuieoiiuiaiuiaeaeaoiooieiieaieouaoieuaiiaueeoaouaaiiieuieiiaioaooeeoaauiueouoioouuiiiaeoieiueuueeiioiooauiaeaoiuueaaiuaiaeaeoeeieiuoiuouaieaeueaeooaauoiououiouoaeeeioeouoeiaaieuoiiiuoeiiaaoooaiiaiuiuouoooiieiooaieauieeoueaoauuoaeoaioiiuaauoeauaoieeeiaiiiieeauueoieaiuoieaeiuaeeauiiuiioieioaaeooeeoaoiaeueeieeeaaiieuoieeeeooueeioiiuiieiiiuiuoaauoeiouieouaeiaaeieaeaaiiuiioauaeoeeooeieuuauaouiuiieeeueuuiaooaeiuuaouuuoeeiououuieaiuaeoieiieaoouaouaoaooiiiuuuiuueouaoueouioaoauuioeouuoeaouuuuioeaoiaouoauaooiuooieueeuuaeeeeaiiuoiuiieaaiouiouooiieeaeeaauaiuiioeoiuaaieoeeaeeeiiuauuoaoeiieiuauoiuuieiueaiaaoeueaauiueeioieaaouiueeiaoaeoeauiaeuiiueaiooouaeouiaeeiiauuaieoueeeaeoeiuuouaoeuuoaaaoeauaiiuuuoaaieuaeeeiuuiiaoaeaeuuieeeuuoieuiuiaiiuiaiieauouueoeouiieaooiuueeeuuuoeiaiauoioeiuaoaaioauaaaaieueuooiiiiueiioaaeuoeuiuiuaeuoeaiuauueiiioaiaaeeiooeiuaeauiuuouaeueueieouauaouuieeuoaiuaeiaaoauoaeeaaoauoaiiooiiouuuuaieeoeeauaauieuaeeuoaaoeuueieeuiaiiouuiiooeueaeoaiieuiaaeuooaaaiiueoeeiaaeeeaaeiaiaaeeooaoeeaoiieaoaaieuiaouoeioeeuauueiiaueiaeioaoaeeaueoiooooieaooeeiiaieaaeeieiiiauoiioiuauauaiaeeooioeoaieuiaaoouiuuieuaaeoeoaaooiiouaeuaueoaeiiuiiaiouuuoeouioiiaauaieaeioouuoeaoeoeeeoaeuoaooiuaaiiauaaoueiiuouueaeiieoououueeeiuuooeeaoueioiiueiieeoeeoeauauioooiuuiiiuuoaeeuoaoaeeuiuuiiuuaeeuiooeieiuueuioioauaiaouiououeoueeoouuueeoiaaeooooaaeeuaaieiaaoaaeaaueieaeeiaoauaaoaeuoeeeuuoauauiiieeuaeooauuuiuaeaeoueoieieouaoeouuuiaaaueouuaiieauoaioaaeeuuaioouuioeueaouiaauooauaiooeaeuouiueaaueuaaiaiaioiuieuooiiaeouoauuaouuooueuiuauuueoooeoiuieoeeuououaiaoiauieaooaoeeeieoeeeiuaeeeiiuiiueoieaiiieoiuuuaaieeaoaeeuaiaooaouooueaouaeuaaeaiuaaeeoeaeooeiuaiouuooioeeaaauuuaiaouuaauoiuaeeuuoeoieeeooeoaeiouuaoaeaeeaueeuaiueoiiieauiuauioeeooauueoeeeiiaaaaoueaaeuioeoiiooeeiauiooaoeuiuoieiueouaauuuoaaieauuioeoeauauuaioueoaeeieiaaoouoeauuooueeoeooeaiuuiuuiiaaauieeeuioeeoeeooioaiiiaiooaaoeiuauuueaueeeieauieaaeeioeaeeooieoieoueoeuaiiauuoiiuieoeeuuuoiuaoaoaaiiiuuiuueaaoeaeaeeiuaueeeioeeiaaiuaaooooaaeaiaaeiaeuuuouiaieoioouaaeiaiuoooaieauaeuouueiuoauuaoaaeueeiioeeueeeiieaioaouueooioeaooeoiauieaooieeeeeieiiaiuiaeiooaiieaeaaeioiuaaaeueaooeaeuoaeeuioeueaeiiaiiaiaaiieeoeaouiuouoeaoeeiaioeueiuuoaeeuuiiaouaiauuoiiuoiaueoioeaeuieaaouueeuieiaueuioueuuaeieiaiaaaaeeeeeiaauiieuaaeeoeoooiueouaeaeiuuiiaueoiaioaoeeiiiiioeoeuoaeiueaoieuoauoeieaiauuiauiaeieooeouoeeeeuieeaaoooueeioaueeiuooieoaioieuiieeaooiauoiaiauuooeouieueouaaiueuuooaaeaaoaeaaaooioueioouaeoaouaoeeeieioeaaeueaiuioaiaouoaiuiiueiueuaiooooiieuooeuaoueoouaaiioeuueiiiaeaaiioaiiooaeoiiaeeoououauioeeieauuoeueoeeoiaaaiaiaiiuaoaouaeoeeuuouoaoeauaooiieaouooaoaoauueiuaueuooeuaoaiueeuoiuoieiuiuuuuauoeeaoiaaeeioeouaooaiaeuiouaieiuaeioieooaauouauoeiaiuaieioueeoaiuuuieeueueeiuoooaeiiuuuaaeiaooeeoaiouooaueeaieueaueuioueaueoaaaoiuaaeueeeueooiuuioiueoaaoeuioeoaeoaoueiiuuaoueeaooooauuuouoauioieiuuiaeueiaoueoeeoauueeeeuoeoaaiioieaiiuoiioioiiuoaoeauooiuoiuoiaeaauiouioaaooioeooeiuueiaioaaoeiaioaeooeeeoeaauuaaiauieiuoeaoaoaiauauaaieioaaooeaoueioiaueiuauaouoooaiiaoeuaiaoieouaoeeaaeeeaouuioaeoouiieuaiauoiaeeaaioiiaaeeoeeaoiiaiiaeaiiuueooaieaieooaoeoeouiaieaioiaoeiaaooauaooieiouaioiuaieoeoouuoaaoeaaauaaaoeeeiuuuoiieaeuuaeeaauooiuiieeaaoeieaaoaioiaeoaoaeaeeooaiaeoooiauoeeooieiuiouuueuoieaaauoeoeoaeeuiaouuuaiaooeoiaeoiuauiuoeioeieoaoauioieaeeeouiaaaouoaeaoaieieaieioiuueueueoaueaioeeiiuoeiaaoeuuaieeaeiauoiuuuuouoiaioioaeieuoeeeeaiaeaaiaauiuooiaiioieeaoeieaeuuiiiooieiaaoiaiueuaeoaoeouoaeaauioeoeaeiuuuuioeeaaiieieaoaiaeuieoaueioeueeoeoueooaeeeouueoaeuiaeuoaoaaiaeeouoioaaoaoaoaeuieuuueeoeiueououuoiauiaiiuaeeeaeoauueuuauueueiuiueeiuuieaeiuiuiiaiueoieuueieoiouououaeiuiouuoaieuiueioeaoiouieoieueuoeoiooeauaeieuuoiiieeoioauoeeoaueoioieuioauooaaoooueaiuuaiuiaeoiaeiiooooeaueiuiioeaeeiaeoeiuaaoioioeueeeueouaeiaaeiiaoiaoaouuouuauiaoieuauaeieoueaeouiuiiouoiaeoaauiuaiieeaaiueeeaoiouiuuiuiiaeeoieueeoooouaeiaooaouuieaouuiuaoaiiieaoueoiiuaaeioauioeeaiaoiaeaeeauueiaioieoeioieaaiaiiuuiauaeuoieauiaiiauuoieoououoeaoaooieeeuioouiaaouaueooioiauuieaiaeeieoeuoiaueioeauiuiieieuauouuueeiuaeeaioeiiieaeeeaiaaiuoeeaeeoiieueaaiiuoaeiiueoauaeeioaeueaiuaaaaioooaeauoiuaeeuoueeiioaoooeouoaooeeuaeeooooeieuoiaeaaueeoeiiuoieeoiaeoeuaeeieiauauaaaoaieiiauoeoaaeuioueaiouoeauieoeaaioaeiaeuuioioaiieooeaeaiaeeeiiioeaieoeeueuiiaiiueuieieaooeuaooeoioeoeeuuaoiuuieoioiaouoeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuaouuuuaooeooueiuiuaaieouuiieeeieeiauaiaauaiaaoiueiooueuaaaeieeoeaoouiueuiaaoeuuiiuauiuaoiaouuiuuaeoaueoueeeooaeueaaieoiueuuoauuoaeeauiieeuaeioiiiuuaueeeououeueieueoeouaiuoooeeeuaouuauaueaieuauiuioeuioeiiiuuiueooaueuuaeeiaeuoauoaauioauuaoeoeioeiuaiiauoueeoiuuiooiuaeooiuuooeeiooaeiuaoiieeaoeaouoaaeiueieaoiuaeiaeoeiuuaoauoaieaiauuiiaieeeoueuiaauoaeeeiieoaeuieeoiioauuooaaaoaoooeaaaooooaaieaiauoiuioieeueeuueieaaeiaioieeaoaeoeuiouauieoaueuoaeuaiiu',
  ),
  1753,
);

strictEqual(
  longestBeautifulSubstring(
    'eieuuoeeueauueeoiiueaeuioeiiieioaouoeeoiiauiueiiuieueeeoaeaeoooiuauiaaueieoeeeeioauaouueiioeiaaaaooeaaaeoouoaoioauoaeuiioaiuuiaaaiieiuiuoiaeuuiooeiiuoaauoioeaeieaeeeiouieuaaaaaeoaeiaeeeaoaeooueieaaaeieooouueaueeiaiuoioiioieuoeeoeaaeeaauoaiaoaauaauioaueiaiooeoiiaiauaooiiauaiaoaoeaioeiaeeuueioauoueuaaiiouoeoeoiaeeooaauieoeaiueioiaieouiaeauaeiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuiuaeouiioieouieeiuaeeuoiooioiiaoueioeuaeeoaauoaaeeaaoiuueoeaeoaaeueoueeiiiuiouieaiuoieeoooueiiiaeeuaaieeaaoiuuoeuoauouiieuaeeiueaeeeaaoieaeuiuoeuoaaiueieiouiiiaoueuuiuooeioaeooaeueouiaeuaaiueuoeeiouioiiueiueaaiuoaieuiaoeuoeaeaiuaaoeeuouiiioeeoueuuauoieiaoaeeaeioouoaiieueoauaoeeoeouaiaoaueioiuaooouiueuieuauieeoeaiouoaoeeeueuoeuieooaaaaaiuoououiuuueoioieueuueaueaeuaieueeaieioieuuuueoooueueoiaoiuuiooiauaaiiiiuoaaueeaiiaeaauaooooeaaeuiaaouooauaaaaiieiaeeeeeiauiiuaueieuieaoeeiauiuaueouaeoaaoiuaoiaiouaiaeoiaooieeioiieieioeeioeuioeiooouiiioaiaeeaaieouoaooaiaiueeuieoiuaeuieeiuaoaueiouoieauieiuoooieuiaooeaeaoiueaeeuieaioiuoaeieuaaeouuoiieioeoiaeuiiiuiuaaaoeaaaoiuauaiiuaaaaiieeueeoieuiueuaueiiaioaoaoueiieueoauuueeeeuuueoiuuaiaaeuauuiaeuuaeiaiiioiooeaeiaeoeaeouuaouueeiieaoaeoaueuaoouoioeiaiuiouaueuaiaoeouoeoooioiuioaeeoeaaoioeiioiuoaiiuioiiioeuiiaaaieaoaaeoaeieuiiiuieiieaaioaueoiiiuueeiouuueoiiaeuuaeaaiauaeeieoaioiiuueuaoieieiuiaioeaeuiiaioaieeeaoaieoooiuiaeuuuieeaeeeeuoeueioeiiaaieaiaiiieiouueaouoooueeoiauooeieeoeuoueioauieoeuooiiaiueeouiiuuiaiuuouoaaiuiiiouuuaiiiuiiuouiioaoauiaoeiioaooeuoaauaiiieiuueuueioeaioaaieuuoioeaeeeuauouuiaauuiauuuaiiiooaiaeaeeuioaueeaoiaioiieooueaieoeieoiaouuuuioaieauioeuoauauaaeaoueeiaaoooauoioueaieeaaiuuiieieaaaeoiueeoeoeoaaoioaueeoeoiooeiioiaoeieieaeiaaaoeeuoiueaueoeoaueeiioauuuoaiaeaooaiaaauuieaioeaaoeioouaiauiaaoieiiieeioeeuaiauuaeeooiuuuaeeieaeieoaaiioaoooeaaeaooouaaoeaoiiuaiauooaiuoeauoeiaeaaeueeiaiooaeaoioeuuauaioaiiioioeuuueiuaeoeaiiuaioiueooioeiueaaeueeiauoiaoeooiuaeuoaououiiiauuaaeeuaiuueaaoioueouaooaaiieeeiueieeouoieiuoueeueauauoueaooaoiuouuiauaeoiouaoeaauaaaoaaueoaeaoeuaiiiaueeiiaaoeuaouiaaiauoeeueueiaooeiooaeuooiieioaaeiueuieuoueiaeiiiaaueaaaoauiauaooaeoeouaaoeeoieuioeuooeaeeoioeeoouieiouuooeaioooouoaoeeouueioaeuoeoiioeouoeuiuuaaouaiuaioaiiuiiuuieaoiiieaaeeioeeiuuouioiuoaiuuuouoeauuoauoeiuuoiiuauoaeuieaiaaoaoiieoeeiaoaueuuoiaauioueeiueeaouioiiauoeuaooiueaaeuuiiiooioeiuioaeuuaouieeiuooaeeaeiiiaiieoaeeoaoioieiuiaeiaiiiouoeoeaeuiuaoeuiiouoaeioiouioiaouiaoooioooieiieaeeaiaaiuoaaaaeoauioiouaaaoeiiueaooeieieueaoiuiaiueaaauiuiuooeaaaaeoiooeueiaaueeaeaoouoioouoeouaoaooauieeuuoeooaauuoaueoaaauiiueoaauiiaaiaoaiuoeeooiiauaueeuoiuooaiueeeauaoeeaiieeoeaaaoueaeiouaouioauoouaeoiauaauouuuaoeuaaeueeeouoaouueaooiueeauuiiioeaeeieoaoeaooauaiiiueoaiauoueeiooueeiooiaouauiaoooioaaaaoeiaieoeaeaeeoaoaeeaeeuuuuioouaioeouuiuouuoeoaeeaaaeeaoooiaeieiuiuauouuieuiauooioiuoeeoieooeeouoiaaoueoaaiaiuauaauouiauiuoiioiiiauiuooiaooeeiuoeaoaeouuauueiueiuoioeiiaiioueeuiiiueoaieuueaoaiioeeuuauuuiuaueooeaaeeioieuieuuieaeoeoaaoeaoaoueiiaueuouiuuaauiiiuuoaaouaeioioooieoaioeouiiuoeaiaiiueoauaaiaeaaeouaeoiouieuaiaeuieuuioueiueueuaooiiouaioeuooeuaaoooieuauuaueiieoeiouaoaeuiaoaooeoeiaoieeaiiuaeaeauoaieeoeoeoauiauiaooouioaoiueuiueaueaaaoaouoeauueaieeuaiueiuauiueaoieoaioouiaaeuiiiueuaiuaiaeiaouooeioaoeaoiaieaeiuouaieeieoaiaaoioaeau',
  ),
  2169,
);

/*

|---|---|---|---|---|
| a | e | i | o | u |
|---|---|---|---|---|
| a | e | i | o | u |
|---|---|---|---|---|
| a | e | i | o | u |
|---|---|---|---|---|
| a | e | i | o | u |
|---|---|---|---|---|
| a | e | i | o | u |
|---|---|---|---|---|

a [0, 0]
a [1, 0]
a [2, 0]
a [3, 0]
e [3, 1]
i [3, 2]
i [4, 2]
i [0, 2]
i [1, 2]
o [1, 3]
u [1, 4]
u [2, 4]
u [3, 4]

*/
