// 1081. Smallest Subsequence of Distinct Characters
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

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
