// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const isPalindrome = s => {
  const len = s.length;
  for (let i = 0; i < Math.trunc(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return false;
  }
  return true;
};

// console.log(isPalindrome('a'));
// console.log(isPalindrome('aa'));
// console.log(isPalindrome('ab'));
// console.log(isPalindrome('aba'));
// console.log(isPalindrome('abc'));

const longest = a =>
  a.sort((b, c) => (b.length < c.length ? -1 : b.length === c.length ? 0 : 1))[a.length - 1];

// console.log(longest(['a', 'aa', 'aaa']));
// console.log(longest(['a', 'aaa', 'aa']));
// console.log(longest(['aaa', 'a', 'aa']));

const ripples = (s, i) => {
  const results = [];
  let last = s[i];
  for (let l = i - 1, r = i + 1; 0 <= l || r < s.length; l--, r++) {
    const left = 'undefined' !== typeof s[l] ? s[l] : '';
    const right = 'undefined' !== typeof s[r] ? s[r] : '';
    results.push(left + last);
    results.push(last + right);
    last = left + last + right;
    results.push(last);
  }
  // console.log(results);
  return results;
};

// console.log(ripples('abba', 0));
// console.log(ripples('abba', 1));
// console.log(ripples('abba', 2));
// console.log(ripples('abba', 3));

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (0 === s.length) return '';
  if (1 === s.length) return s;
  let combinations = [];
  for (let i = 0; i < s.length; i++) {
    combinations = [...combinations, ...ripples(s, i)];
  }
  // console.log(combinations);

  const palindromes = combinations.filter(c => isPalindrome(c));
  // console.log(palindromes);

  return longest(palindromes);
};

// console.log('abc'.slice(0, 1));
// console.log('abc'.slice(1, 3));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'babad',
    input: 'babad',
    expected: ['bab', 'aba'],
    // Note: "aba" is also a valid answer.
  },
  // {
  //   name: 'cbbd',
  //   input: 'cbbd',
  //   expected: 'bb',
  // },
  // {
  //   name: 'abba',
  //   input: 'abba',
  //   expected: 'abba',
  // },
  // {
  //   name: 'civilwartestingwhetherthatnaptionoranynartionsoconceivedand...',
  //   input:
  //     'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicated' +
  //     'canlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicp' +
  //     'ateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlive' +
  //     'sthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisB' +
  //     'utinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgr' +
  //     'oundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfarabove' +
  //     'ourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongremember' +
  //     'whatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathe' +
  //     'rtobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfa' +
  //     'rsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremain' +
  //     'ingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcausef' +
  //     'orwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvetha' +
  //     'tthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbi' +
  //     'rthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallno' +
  //     'tperishfromtheearth',
  //   expected: 'ranynar',
  // },
];

const check = (v1, v2) => {
  if (!Array.isArray(v1)) v1 = [v1];
  // console.log(v1);
  if (!Array.isArray(v2)) v2 = [v2];
  // console.log(v2);
  // console.log(v1.some(v1v => v2.includes(v1v)));
  // console.log(v2.some(v2v => v1.includes(v2v)));
  return v1.some(v1v => v2.includes(v1v)) && v2.some(v2v => v1.includes(v2v));
};

tests.forEach(({ name, input, expected }) => {
  const output = longestPalindrome(input);
  if (check(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
