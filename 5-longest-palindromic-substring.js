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

const isPalindrome = p => {
  for (let i = 0; i < p.length; i++)
    if (p[i] !== p[p.length - i - 1]) return false;
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let longest = '';
  const seen = [];
  // console.log(s);
  if (isPalindrome(s)) return s;
  for (let i = 1; i < s.length - 1; i++) {
    for (let [a, b] = [0, s.length - 1 - i]; b < s.length; a++, b++) {
      // console.log(`${i} | (${a}, ${b}) | ${s.slice(a, b + 1)}`);
      const candidate = s.slice(a, b + 1);
      if (seen.includes(candidate)) continue;
      if (isPalindrome(candidate)) return candidate;
    }
  }
  return s[0];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // 0 | babad = 01234 = (0, 4)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-
  // 1 | baba  = 0123  = (0, 3)
  // 1 | abad  = 1234  = (1, 4)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-
  // 2 | bab   = 012   = (0, 2)
  // 2 | aba   = 123   = (1, 3)
  // 2 | bad   = 234   = (2, 4)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-
  // 3 | ba    = 01    = (0, 1)
  // 3 | ab    = 12    = (1, 2)
  // 3 | ba    = 23    = (2, 3)
  // 3 | ad    = 34    = (3, 4)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-
  // 4 | b     = 0     = (0, 0)
  // 4 | a     = 1     = (1, 1)
  // 4 | b     = 2     = (2, 2)
  // 4 | a     = 3     = (3, 3)
  // 4 | d     = 4     = (4, 4)

  {
    input: 'babad',
    expected: 'bab',
  },

  // 0 | cbbd = 0123 = (0, 3)
  // =-=-=-=-=-=-=-=-=-=-=-=-
  // 1 | cbb  = 012  = (0, 2)
  // 1 | bbd  = 123  = (1, 3)
  // =-=-=-=-=-=-=-=-=-=-=-=-
  // 2 | cb   = 01   = (0, 1)
  // 2 | bb   = 12   = (1, 2)
  // 2 | bd   = 23   = (2, 3)
  // =-=-=-=-=-=-=-=-=-=-=-=-
  // 3 | c    = 0    = (0, 0)
  // 3 | b    = 1    = (1, 1)
  // 3 | b    = 2    = (2, 2)
  // 3 | d    = 3    = (3, 3)

  {
    input: 'cbbd',
    expected: 'bb',
  },

  // 0 | abbbcd = 012345 = (0, 5)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // 1 | abbbc  = 01234  = (0, 4)
  // 1 | bbbcd  = 12345  = (1, 5)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // 2 | abbb   = 0123   = (0, 3)
  // 2 | bbbc   = 1234   = (1, 4)
  // 2 | bbcd   = 2345   = (2, 5)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // 3 | abb    = 012    = (0, 2)
  // 3 | bbb    = 123    = (1, 3)
  // 3 | bbc    = 234    = (2, 4)
  // 3 | bcd    = 345    = (3, 5)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // 4 | ab     = 01     = (0, 1)
  // 4 | bb     = 12     = (1, 2)
  // 4 | bb     = 23     = (2, 3)
  // 4 | bc     = 34     = (3, 4)
  // 4 | cd     = 45     = (4, 5)
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // 5 | a      = 0      = (0, 0)
  // 5 | b      = 1      = (1, 1)
  // 5 | b      = 2      = (2, 2)
  // 5 | b      = 3      = (3, 3)
  // 5 | c      = 4      = (4, 4)
  // 5 | d      = 5      = (5, 5)

  {
    input: 'abbbcd',
    expected: 'bbb',
  },

  // 0-0 | abb | 012 | (0, 2)
  // =-=-=-=-=-=-=-=-=-=-=-=-
  // 1-0 | ab  | 01  | (0, 1)
  // 1-1 | bb  |  12 | (1, 2)
  // =-=-=-=-=-=-=-=-=-=-=-=-
  // 2-0 | a   | 0   | (0, 0)
  // 2-1 | b   |  1  | (1, 1)
  // 2-3 | b   |   2 | (2, 2)

  {
    input: 'abb',
    expected: 'bb',
  },

  {
    input: 'adcda',
    expected: 'adcda',
  },

  {
    input: 'a',
    expected: 'a',
  },

  // {
  //   input:
  //     'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
  //   expected: 'ranynar',
  // },

  // {
  //   input:
  //     'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg',
  //   expected: 'hpyyph',
  // },

  // {
  //   input:
  //     'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  //   expected:
  //     'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  // },
];

tests.forEach(({ input, expected }) => {
  const output = longestPalindrome(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
