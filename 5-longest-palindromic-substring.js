// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 532 ms, faster than 16.56% of JavaScript online submissions
// for Longest Palindromic Substring.
// Memory Usage: 37.3 MB, less than 51.04% of JavaScript online submissions
// for Longest Palindromic Substring.

const isPalindrome = p => {
  for (let i = 0; i < Math.trunc(p.length); i++) {
    if (p[i] !== p[p.length - i - 1]) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let lp = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const candidate = s.substring(i, j);
      // console.log(candidate);
      if (lp.length < candidate.length && isPalindrome(candidate)) {
        lp = candidate;
      }
    }
  }
  return lp;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let lp = '';
//   const checked = {};
//   const isPalindrome = t => {
//     for (let i = 0; i < Math.trunc(t.length); i++) {
//       if (t[i] !== t[t.length - i - 1]) return false;
//     }
//     return true;
//   };
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const candidate = s.substring(i, j);
//       if (!checked[candidate]) {
//         checked[candidate] = null;
//         if (lp.length < candidate.length && isPalindrome(candidate)) {
//           lp = candidate;
//         }
//       }
//     }
//   }
//   return lp;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'babad',
    expected: 'bab',
  },
  {
    input: 'cbbd',
    expected: 'bb',
  },
  {
    input: 'abbbcd',
    expected: 'bbb',
  },
  {
    input:
      'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
    expected: 'ranynar',
  },
  {
    input:
      'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg',
    expected: 'hpyyph',
  },
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
