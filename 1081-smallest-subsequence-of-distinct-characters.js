// 1081. Smallest Subsequence of Distinct Characters
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   // Find all the unique chars in the text
//   const dedupe = s => Array.from(new Set(s.split(''))).join('');
//   const uniques = dedupe(text).split('');
//   // console.log(uniques);

//   // Find the last index of each char in the array
//   const lastIndexOfEach = (s, a) => a.map(c => s.lastIndexOf(c));

//   // Stop at the point where not every char appears in the string
//   const stopAt = Math.min(...lastIndexOfEach(text, uniques));
//   // console.log(stopAt);

//   const truncatedText = text.substring(0, stopAt);
//   // console.log(truncatedText);

//   // Find the last index of each char in the array
//   const indexOfEach = (s, a) => a.map(c => s.indexOf(c));

//   const distances = truncatedText.split('').map((c, i) => indexOfEach(text.substring(i), uniques));
//   // console.log(distances);

//   const longestDistances = distances.map(d => Math.max(...d));
//   // console.log(longestDistances);

//   const shortestDistance = Math.min(...longestDistances);

//   const startAt = longestDistances.indexOf(shortestDistance);

//   const answer = dedupe(text.substring(startAt));
//   // console.log(answer);

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const uniques = Array.from(new Set(text.split('')));
// console.log(uniques);
// const withLastIndexOf = uniques.map(c => [c, text.lastIndexOf(c)]);
// console.log(withLastIndexOf);
// const lastIndexOfEach = (s, a) => a.map(c => s.lastIndexOf(c));
// const withIndices = text.split('').map(u => [u, lastIndexOfEach(text, uniques)]);
// console.log(withIndices);
// const indicesOf = (s, c) => s.split('').reduce((a, d, i) => (c === d ? [...a, i] : a), []);
// const withIndices = text.split('').map((c, i) => [c, indicesOf(text.substring(i), c)]);
// console.log(withIndices);
// let temp = text.split('').map((c, i) => text.substring(i));
// console.log(temp);
// const count = (s, c) => ;
// const hasOnlyOneOf = (s, a) => {s };
// temp = temp.filter()
// for (let i = text.length; 0 < i; i--) {
//   const test = text.substring(0, i);
//   console.log(test);
//   const chars = new Array(26).fill(0);
//   for (let j = 0; j < test.length; j++) chars[test[j].charCodeAt(0) - 97]++;
//   console.log(chars);
// }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   let cnt = new Array(26);
//   let nibble = 'l';
//   let test = text;
//   let indexOfOne = -1;
//   let lastIndexOfOne = -1;
//   while (lastIndexOfOne === indexOfOne || indexOfOne * lastIndexOfOne < 0) {
//     console.log(test);
//     cnt.fill(0);
//     for (let j = 0; j < test.length; j++) cnt[test[j].charCodeAt(0) - 97]++;
//     // console.log(count);
//     indexOfOne = cnt.indexOf(1);
//     // console.log(indexOfOne);
//     lastIndexOfOne = cnt.lastIndexOf(1);
//     // console.log(lastIndexOfOne);
//     nibble = 'l' === nibble ? 'r' : 'l';
//     test = 'l' === nibble ? text.substring(1) : text.substring(0, test.length - 1);
//   }
//   console.log(test);
//   const answerLength = cnt.join('').replace(/0/g, '').length;
//   console.log(answerLength);
//   let answer = '';
//   for (let i = 0; i < test.length; i++) {
//     console.log(test[i]);
//     // if (-1 === answer.indexOf(test[i])) answer += test[i];
//     // if (i === answerLength - 1) break;
//   }
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const stack = [text];
//   while (0 < stack.length) {
//     const test = stack.pop();
//     console.log(test);
//     if (2 < test.length) stack.push(test.substring(1));
//   }
//   stack.push(text);
//   while (0 < stack.length) {
//     const test = stack.pop();
//     console.log(test);
//     if (2 < test.length) stack.push(test.substring(0, test.length - 1));
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const stack = [text];
//   const possiblities = [];
//   const countChars = s => {
//     let counts = new Array(26).fill(0);
//     for (let j = 0; j < s.length; j++) counts[s[j].charCodeAt(0) - 97]++;
//     return counts;
//   };
//   const answerLength = countChars(text).filter(c => 0 < c).length;
//   console.log(answerLength);
//   while (0 < stack.length) {
//     const test = stack.pop();
//     console.log(test);
//     const charCounts = countChars(test);
//     const hasEveryChar = answerLength === charCounts.filter(c => 0 < c).length;
//     if (hasEveryChar) possiblities.push(test);
//     if (answerLength < test.length) stack.push(test.substring(1));
//   }
//   stack.push(text);
//   while (0 < stack.length) {
//     const test = stack.pop();
//     console.log(test);
//     const charCounts = countChars(test);
//     const hasEveryChar = answerLength === charCounts.filter(c => 0 < c).length;
//     if (hasEveryChar) possiblities.push(test);
//     if (answerLength < test.length) stack.push(test.substring(0, test.length - 1));
//   }
//   console.log(possiblities.sort((a, b) => b.length - a.length));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const dedupeA2A = a => Array.from(new Set(a));
//   const dedupeA2S = a => dedupeA2A(a).join('');
//   const dedupeS2S = s => dedupeA2S(s.split(''));
//   const uniques = dedupeS2S(text);
//   const unsub = (s, b, e = s.length) => dedupeS2S(s.substring(b, e));
//   const max = text.length - uniques.length;
//   let begin = 0;
//   let end = text.length;
//   const compareInAnyOrder = (a, b) => {
//     const c = new Array(26).fill(0);
//     const d = new Array(26).fill(0);
//     for (let i = 0; i < a.length; i++) c[a[i].charCodeAt(0) - 97]++;
//     for (let i = 0; i < b.length; i++) d[b[i].charCodeAt(0) - 97]++;
//     return c.join('') === d.join('');
//   };
//   // console.log(compareInAnyOrder('abc', 'cba'));
//   while (compareInAnyOrder(uniques, unsub(text, begin))) begin++;
//   console.log(begin);
//   // while (compareInAnyOrder(uniques, revSubS(text, end--))) end++;
//   // console.log(end);
//   // console.log(text.substring(begin, end));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const dedupeA2A = a => Array.from(new Set(a));
//   const dedupeA2S = a => dedupeA2A(a).join('');
//   const dedupeS2S = s => dedupeA2S(s.split(''));
//   const dedupeS2A = s => dedupeA2A(s.split(''));
//   const uA = dedupeS2A(text);
//   let temp = text.split('').map((s, i) => text.substr(i));
//   console.log(temp);
//   // temp = temp.map(s => dedupeS2S(s));
//   // console.log(temp);
//   // temp = temp.map(s => s.length);
//   // console.log(temp);
//   // temp = temp.filter(x => 4 === x.length);
//   // console.log(temp);
//   // temp = temp.sort();
//   // console.log(temp);
//   // return temp[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const codes = new Array(text.length);
//   for (let i = 0; i < text.length; i++) codes[i] = text[i].charCodeAt(0) - 97;
//   console.log(codes);

//   const counts = new Array(26).fill(0);
//   for (let i = 0; i < codes.length; i++) counts[codes[i]]++;
//   console.log(counts);

//   const uniques = [];
//   for (let i = 0; i < counts.length; i++)
//     if (0 < counts[i] && !uniques.includes(i)) uniques.push(i);
//   console.log(uniques);

//   const subsequents = new Array(codes.length - uniques.length + 1);
//   for (let i = 0; i < subsequents.length; i++) subsequents[i] = codes.slice(i, codes.length);
//   console.log(subsequents);

//   const possiblities = [];
//   for (let i = 0; i < subsequents.length; i++) {
//     let pushIt = true;
//     for (let j = 0; j < uniques.length; j++) pushIt = subsequents[i].includes(uniques[j]);
//     if (pushIt) possiblities.push(subsequents[i]);
//   }
//   console.log(possiblities);

//   const considerations = [];
//   for (let i = 0; i < possiblities.length; i++) considerations.push(codes.slice(i));
//   console.log(considerations);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
// const smallestSubsequence = text => {
//   const codes = new Array(text.length);
//   for (let i = 0; i < text.length; i++) codes[i] = text[i].charCodeAt(0) - 97;
//   console.log(codes);

//   const counts = new Array(26).fill(0);
//   for (let i = 0; i < codes.length; i++) counts[codes[i]]++;
//   console.log(counts);

//   const uniques = [];
//   for (let i = 0; i < counts.length; i++)
//     if (0 < counts[i] && !uniques.includes(i)) uniques.push(i);
//   console.log(uniques);

//   const answers = [];
//   for (let i = 0; i < codes.length - 1; i++) {
//     const current = codes[i];
//     console.log(current);
//     const rest = codes.slice(i + 1);
//     console.log(rest);

//     // for (let j = i + 1; j < codes.length; j++) {

//     // }
//   }
//   console.log(answers);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
const smallestSubsequence = text => {
  const codes = new Array(text.length);
  for (let i = 0; i < text.length; i++) codes[i] = text[i].charCodeAt(0) - 97;
  // console.log(codes);

  const counts = new Array(26).fill(0);
  for (let i = 0; i < codes.length; i++) counts[codes[i]]++;
  // console.log(counts);

  const uniques = [];
  for (let i = 0; i < counts.length; i++)
    if (0 < counts[i] && !uniques.includes(i)) uniques.push(i);
  // console.log(uniques);

  const considerations = [];
  for (let i = 0; i < codes.length - uniques.length + 1; i++) {
    for (let j = i + 1; j < codes.length - uniques.length + 2; j++) {
      considerations.push([codes[i], ...codes.slice(j)]);
    }
  }
  // console.log(considerations);

  const possiblities = [];
  for (let i = 0; i < considerations.length; i++) {
    let pushIt = true;
    for (let j = 0; j < uniques.length; j++) {
      if (!considerations[i].includes(uniques[j])) {
        pushIt = false;
        break;
      }
    }
    if (pushIt) possiblities.push(considerations[i]);
  }
  // console.log(possiblities);

  const answers = possiblities.map(a =>
    Array.from(new Set(a))
      .map(n => String.fromCharCode(n + 97))
      .join(''),
  );
  // console.log(answers);

  const answer = answers.sort()[0];
  // console.log(answer);

  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  //          |---|---|---|---|---|---|---|---|
  //      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  //          |---|---|---|---|---|---|---|---|
  //  input = | c | d | a | d | a | b | c | c |
  //          |---|---|---|---|---|---|---|---|
  //      a = |   |   |~a~|   | a |   |   |   |
  //      b = |   |   |   |   |   |~b~|   |   |
  //      c = | c |   |   |   |   |   |~c~| c |
  //      d = |   | d |   |~d~|   |   |   |   |
  //          |---|---|---|---|---|---|---|---|
  // answer = |   |   | a | d |   | b |   | c |
  //          |---|---|---|---|---|---|---|---|
  //      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  //          |---|---|---|---|---|---|---|---|
  {
    input: 'cdadabcc',
    expected: 'adbc',
  },
  {
    input: 'abcd',
    expected: 'abcd',
  },
  //          |---|---|---|---|---|---|---|
  //      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
  //          |---|---|---|---|---|---|---|
  //  input = | e | c | b | a | c | b | a |
  //          |---|---|---|---|---|---|---|
  //      a = |   |   |   |~a~|   |   | a |
  //      b = |   |   | b |   |   |~b~|   |
  //      c = |   | c |   |   |~c~|   |   |
  //      e = |~e~|   |   |   |   |   |   |
  //          |---|---|---|---|---|---|---|
  // answer = | e |   |   | a | c | b |   |
  //          |---|---|---|---|---|---|---|
  //      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
  //          |---|---|---|---|---|---|---|
  {
    input: 'ecbacba',
    expected: 'eacb',
  },
  {
    input: 'leetcode',
    expected: 'letcod',
  },
  {
    input:
      'wugnnjdhsvjhsfabalvlpsqdayxdlwvbehakmoihrfnkvusyamwcurqsnurpetktgkieckvybcfxnannkbqjpaqqmotomsdekawunwruvuxsggeimjkpkhvlyhpduehssfnmhggkxetehmqideojgtwqtejdsgfdbdxpwktapefjysaqywgvctoowduajfrycdqxtscqocsgsvlqvcdfihbakstrwbpfeihswoejvywayoitsxehgkjvirepgjfnamniwilftquswgyrcrmfnirxtktixargkhcrsaimutfdphftxmtvaypwottqslureglmwvwakqkptnunloidvediccgtcybfbjmpcsdtkyiqgmfvhocytgkrkrrwpuptrhmmqqhuakjphpvibkbtyyqauxlldltgqwotienfpnafwycdwdfmmlluwgonlvqnbixlkrxqhoiiibykmpnjvtqtmqebbhfxhpqtyqknnkwrcqekfsconougekhqrhvpmqkcfgjnnxtrjqmkslgoyqoqlsbynidqlheoelomwetcgfakhbnhsmcsltywgcbchuqdrdsdlcgasbcncyexvoogxfenpxitrcygacygdhmisyxiabfceuxrvgjmngnapdkwolmdkhufleljqdyrjwvoqswnefcwkwnbjvdnygtlgnttwgijsvgmltnebqyuewcuhblxbipqeqmflmleiepsmakmitketbomhffggcxarabqgypjeathwwcolgpuhbeuqtyytynpwtpngwfsjimnwjahljtk',
    expected: 'abcfxnkqjpmotsdewurvgihly',
  },
];

tests.forEach(({ input, expected }) => {
  const output = smallestSubsequence(input);
  if (output === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
