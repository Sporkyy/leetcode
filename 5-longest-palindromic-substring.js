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
const longestPalindrome = s => {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const tmp = s.slice(i, j);
      if (1 === tmp.length) {
        if (result.length < tmp.length) result = tmp;
        continue;
      }
      if (2 === tmp.length) {
        if (tmp[0] !== tmp[1] && result.length < tmp.length) result = tmp;
        continue;
      }
      if (3 === tmp.lengt) {
        if (tmp[0] !== tmp[2] && result.length < tmp.length) result = tmp;
        continue;
      }
      console.log(tmp);
      // const mid = Math.ceil(tmp.length / 2);
      // console.log(mid);
      console.log(tmp.slice(Math.floor(tmp.length / 2)));
      console.log(tmp.slice(Math.floor(tmp.length), Math.floor(tmp.length)));
      // console.log(tmp.substr();
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // {
  //   input: 'babad',
  //   expected: 'bab',
  // },
  {
    input: 'cbbd',
    expected: 'bb',
  },
  // {
  //   input: 'abbbcd',
  //   expected: 'bbb',
  // },
  // {
  //   input: 'adcda',
  //   expected: 'adcda',
  // },
  // {
  //   input: 'a',
  //   expected: 'a',
  // },
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
