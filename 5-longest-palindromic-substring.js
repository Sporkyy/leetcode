// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 532 ms, faster than 16.56% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.3 MB, less than 51.04% of JavaScript online submissions
// for Longest Palindromic Substring.

// const isPalindrome = p => {
//   for (let i = 0; i < Math.trunc(p.length); i++) {
//     if (p[i] !== p[p.length - i - 1]) return false;
//   }
//   return true;
// };

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let lp = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const candidate = s.substring(i, j);
//       // console.log(candidate);
//       if (lp.length < candidate.length && isPalindrome(candidate)) {
//         lp = candidate;
//       }
//     }
//   }
//   return lp;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   const seen = [];
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; i < j; j--) {
//       const candidate = s.slice(i, j);
//       if (seen.includes(candidate)) continue;
//       else seen.push(candidate);
//       let isPalindrome = true;
//       for (let k = 0; k < candidate.length; k++) {
//         if (candidate[k] !== candidate[candidate.length - k - 1]) {
//           isPalindrome = false;
//           break;
//         }
//       }
//       if (!isPalindrome) continue;
//       if (result.length < candidate.length) result = candidate;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const tmp = s.slice(i, j);
//       if (1 === tmp.length) {
//         if (result.length < tmp.length) result = tmp;
//         continue;
//       }
//       if (2 === tmp.length) {
//         if (tmp[0] !== tmp[1] && result.length < tmp.length) result = tmp;
//         continue;
//       }
//       if (3 === tmp.length) {
//         if (tmp[0] !== tmp[2] && result.length < tmp.length) result = tmp;
//         continue;
//       }
//       console.log(tmp);
//       // const mid = Math.ceil(tmp.length / 2);
//       // console.log(mid);
//       console.log(tmp.slice(Math.floor(tmp.length / 2)));
//       console.log(tmp.slice(Math.floor(tmp.length), Math.floor(tmp.length)));
//       // console.log(tmp.substr();
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let result = '';
//   let [a1, a2, b1, b2] = [0, 0, 0, 0];
//   for (let i = 0; i < s.length; i++) {
//     a1 = a2 = b1 = b2 = i;
//     for (let j = 0; j < s.length - i; j++) {
//       if (1 < j && 1 === j % 2) a2++;
//       if (1 === j || (0 < j && 0 === j % 2)) b1++;
//       b2 = j + i;
//       // console.log(`${i}-${j} = (${a1}, ${a2}), (${b1}, ${b2})`);
//       const s1 = s.slice(a1, a2 + 1);
//       const s2 = s.slice(b1, b2 + 1);
//       // console.log(`(${s1})[${s2}]`);
//       if (
//         s2 ===
//           s1
//             .split('')
//             .reverse()
//             .join('') &&
//         result.length < s.slice(a1, b2 + 1).length
//       )
//         result = s.slice(a1, b2 + 1);
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 460 ms, faster than 19.61% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.9 MB, less than 33.22% of JavaScript online submissions
// for Longest Palindromic Substring.

// const isPalindrome = p => {
//   for (let i = 0; i < p.length; i++) if (p[i] !== p[p.length - i - 1]) return false;
//   return true;
// };

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let longest = '';
//   // console.log(s);
//   if (isPalindrome(s)) return s;
//   for (let i = 1; i < s.length - 1; i++) {
//     for (let [a, b] = [0, s.length - 1 - i]; b < s.length; a++, b++) {
//       // console.log(`${i} | (${a}, ${b}) | ${s.slice(a, b + 1)}`);
//       const candidate = s.slice(a, b + 1);
//       if (isPalindrome(candidate)) return candidate;
//     }
//   }
//   return s[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 496 ms, faster than 15.90% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.8 MB, less than 33.67% of JavaScript online submissions
// for Longest Palindromic Substring.

// const isPalindrome = p => {
//   for (let i = 0; i < p.length; i++) if (p[i] !== p[p.length - i - 1]) return false;
//   return true;
// };

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let longest = '';
//   const seen = [];
//   // console.log(s);
//   if (isPalindrome(s)) return s;
//   for (let i = 1; i < s.length - 1; i++) {
//     for (let [a, b] = [0, s.length - 1 - i]; b < s.length; a++, b++) {
//       // console.log(`${i} | (${a}, ${b}) | ${s.slice(a, b + 1)}`);
//       const candidate = s.slice(a, b + 1);
//       if (seen.includes(candidate)) continue;
//       if (isPalindrome(candidate)) return candidate;
//     }
//   }
//   return s[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 496 ms, faster than 15.90% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.8 MB, less than 33.67% of JavaScript online submissions
// for Longest Palindromic Substring.

// const isPalindrome = p => {
//   for (let i = 0; i < p.length; i++)
//     if (p[i] !== p[p.length - i - 1]) return false;
//   return true;
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   let longest = '';
//   const seen = [];
//   // console.log(s);
//   if (isPalindrome(s)) return s;
//   for (let i = 1; i < s.length - 1; i++) {
//     for (let [a, b] = [0, s.length - 1 - i]; b < s.length; a++, b++) {
//       // console.log(`${i} | (${a}, ${b}) | ${s.slice(a, b + 1)}`);
//       const candidate = s.slice(a, b + 1);
//       if (seen.includes(candidate)) continue;
//       if (isPalindrome(candidate)) return candidate;
//     }
//   }
//   return s[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const mirrorIndex = (len, i) =>

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   const palindromes = new Map();
//   for (let i = 1, l, r; i < s.length - 1; i++) {
//     do {
//       [l, r] = [i - 1, i + 1];
//       console.log(l, r);
//     } while (0 <= l && s.length - 1 < r && s[l] === s[r]);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   const palindromes = new Set();
//   // Check the evens
//   for (let l = 0; l < s.length - 1; l++) {
//     console.log(l);
//     for (let dl = l, r = l + 1; 0 <= dl && r < s.length; r++, dl--) {
//       console.log(dl, r);
//       if (s[dl] === s[r]) {
//         console.log(dl, r);
//         palindromes.add(s.slice(dl, r + 1));
//       }
//     }
//   }
//   // Check the odds
//   for (let l = 0; l < s.length - 1; l++) {
//     console.log(l);
//     for (let dl = l, r = l + 2; 0 <= dl && r < s.length; r++, dl--) {
//       console.log(dl, r);
//       if (s[dl] === s[r]) {
//         console.log(dl, r);
//         palindromes.add(s.slice(dl, r + 1));
//       }
//     }
//   }
//   console.log(palindromes);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 80 ms, faster than 81.98% of JavaScript online submissions
//  * Memory Usage: 35.9 MB, less than 78.26% of JavaScript online submissions
//  *
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   if (s.length <= 1) return s;
//   if (2 === s.length && s[0] !== s[1]) return s[0];
//   let longest = '';
//   // const palindromes = new Set();
//   for (let nudge of [1, 2]) {
//     for (let l = 0; l < s.length - 1; l++) {
//       // console.log(l);
//       for (let dl = l, r = l + nudge; 0 <= dl && r < s.length; dl--, r++) {
//         // console.log(r + 1 - dl, s.slice(dl, r + 1));
//         if (s[dl] !== s[r]) break;
//         // palindromes.add(s.slice(dl, r + 1));
//         // console.log(dl, r);
//         if (longest.length < r + 1 - dl) longest = s.slice(dl, r + 1);
//       }
//     }
//   }
//   // console.log(longest);
//   // console.log(palindromes);
//   return longest || s[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   let [palindromes, len] = [new Set(s[0]), s.length];
//   for (let n of [1, 2])
//     for (let p = 0; p < s.length - 1; p++)
//       for (let l = p, r = p + n; 0 <= l && r < len && s[l] === s[r]; l--, r++)
//         palindromes.add(s.slice(l, r + 1));
//   console.log(palindromes);
//   return [...palindromes].reduce((a, c) => (c.length < a.length ? a : c));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 76 ms, faster than 88.04% of JavaScript online submissions
//  * Memory Usage: 35.7 MB, less than 78.26% of JavaScript online submissions
//  *
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = s => {
//   let [len, longest] = [s.length, s[0]];
//   for (let n of [1, 2])
//     for (let i = 0; i < len - 1; i++)
//       for (let l = i, r = i + n; 0 <= l && r < len && s[l] === s[r]; l--, r++)
//         if (longest.length < r + 1 - l) longest = s.slice(l, r + 1);
//   return len ? longest : '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let [len, longest] = [s.length, s[0]];
  for (let n of [1, 2])
    for (let i = 0; i < len - 1; i++)
      for (let l = i, r = i + n; 0 <= l && r < len && s[l] === s[r]; l--, r++)
        if (longest.length < r + 1 - l) longest = s.slice(l, r + 1);
  return len ? longest : '';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(longestPalindrome('aba'), 'aba');

strictEqual(longestPalindrome('abac'), 'aba');

strictEqual(longestPalindrome('babad'), 'bab');

strictEqual(longestPalindrome('cbbd'), 'bb');

strictEqual(longestPalindrome('abbbcd'), 'bbb');

strictEqual(longestPalindrome('abb'), 'bb');

strictEqual(longestPalindrome('adcda'), 'adcda');

strictEqual(longestPalindrome('aabcde'), 'aa');

strictEqual(longestPalindrome('abacde'), 'aba');

strictEqual(longestPalindrome('bb'), 'bb');

strictEqual(longestPalindrome('ac'), 'a');

strictEqual(longestPalindrome('a'), 'a');

strictEqual(longestPalindrome('abcda'), 'a');

strictEqual(longestPalindrome(''), '');

strictEqual(
  longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsocon'),
  'ranynar',
);

strictEqual(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsocon' +
      'ceivedandsodedicatedcanlongendureWeareqmetonagreat' +
      'battlefiemldoftzhatwarWehavecometodedicpateaportio' +
      'nofthatfieldasafinalrestingplaceforthosewhoheregav' +
      'etheirlivesthatthatnationmightliveItisaltogetherfa' +
      'ngandproperthatweshoulddothisButinalargersenseweca' +
      'nnotdedicatewecannotconsecratewecannothallowthisgr' +
      'oundThebravelmenlivinganddeadwhostruggledherehavec' +
      'onsecrateditfaraboveourpoorponwertoaddordetractTgh' +
      'eworldadswfilllittlenotlenorlongrememberwhatwesayh' +
      'erebutitcanneverforgetwhattheydidhereItisforusthel' +
      'ivingrathertobededicatedheretotheulnfinishedworkwh' +
      'ichtheywhofoughtherehavethusfarsonoblyadvancedItis' +
      'ratherforustobeherededicatedtothegreattdafskremain' +
      'ingbeforeusthatfromthesehonoreddeadwetakeincreased' +
      'devotiontothatcauseforwhichtheygavethelastpfullmea' +
      'sureofdevotionthatweherehighlyresolvethatthesedead' +
      'shallnothavediedinvainthatthisnationunsderGodshall' +
      'haveanewbirthoffreedomandthatgovernmentofthepeople' +
      'bythepeopleforthepeopleshallnotperishfromtheearth',
  ),
  'ranynar',
);

strictEqual(
  longestPalindrome(
    'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkv' +
      'hwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpn' +
      'bkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdm' +
      'nyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascg' +
      'vstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovw' +
      'mamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthp' +
      'yyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpm' +
      'jxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlz' +
      'usgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcny' +
      'nmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafav' +
      'mlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgkt' +
      'nwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuek' +
      'anzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmaccif' +
      'lcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfca' +
      'cvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkct' +
      'eudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg',
  ),
  'hpyyph',
);

strictEqual(
  longestPalindrome(
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
      'ddddddddddddddddddddddddddddddddddddddddddddddddd',
  ),
  'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'dddddddddddddddddddddddddddddddddddddddddddddddddd' +
    'ddddddddddddddddddddddddddddddddddddddddddddddddd',
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3

| 0 | 1 | 2 |
| l | r | - | 0, 1
=============
| - | l | r | 1, 2

| 0 | 1 | 2 |
| l | - | r | 0, 2

4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4

| 0 | 1 | 2 | 3 |
| l | r | - | - | 0, 1
| - | l | r | - | 1, 2
=================
| l | - | - | r | 0, 3
| - | - | l | r | 2, 3

| 0 | 1 | 2 | 3 |
| l | - | r | - | 0, 2
| - | l | - | r | 1, 3

5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5

| 0 | 1 | 2 | 3 | 4 |
| l | r | - | - | - | 0, 1
=========================
| - | l | r | - | - | 1, 2
| l | - | - | r | - | 0, 3
=========================
| - | - | l | r | - | 2, 3
| - | l | - | - | r | 1, 4
=========================
| - | - | - | l | r | 3, 4

| 0 | 1 | 2 | 3 | 4 |
| l | - | r | - | - | 0, 2
=========================
| - | l | - | r | - | 1, 3
| l | - | - | - | r | 0, 4
=========================
| - | - | l | - | r | 2, 4

6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6

| 0 | 1 | 2 | 3 | 4 | 5 |
| l | r | - | - | - | - | 0, 1
=========================
| - | l | r | - | - | - | 1, 2
| l | - | - | r | - | - | 0, 3
=========================
| - | - | l | r | - | - | 2, 3
| - | l | - | - | r | - | 1, 4
| l | - | - | - | - | r | 0, 5
=========================
| - | - | - | l | r | - | 3, 4
| - | - | l | - | - | r | 2, 5
=========================
| - | - | - | - | l | r | 4, 5

| 0 | 1 | 2 | 3 | 4 | 5 |
| l | - | r | - | - | - | 0, 2
=========================
| - | l | - | r | - | - | 1, 3
| l | - | - | - | r | - | 0, 4
=========================
| - | - | l | - | r | - | 2, 4
| - | l | - | - | - | r | 1, 5
=========================
| - | - | - | l | - | r | 3, 5

*/
