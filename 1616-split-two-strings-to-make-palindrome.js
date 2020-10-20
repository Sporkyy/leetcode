// 1616. Split Two Strings to Make Palindrome
// https://leetcode.com/problems/split-two-strings-to-make-palindrome/

/*

You are given two strings a and b of the same length. Choose an index and split
both strings at the same index, splitting a into two strings: aprefix and
asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix
and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix +
asuffix forms a palindrome.

When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is
allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc",
"ab" + "c" , and "abc" + "" are valid splits.

Return true if it is possible to form a palindrome string, otherwise return
false.

Notice that x + y denotes the concatenation of strings x and y.


Constraints:

- 1 <= a.length, b.length <= 105
- a.length == b.length
- a and b consist of lowercase English letters

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 116 ms, faster than 38.22% of JavaScript online submissions
// Memory Usage: 50.8 MB, less than 5.37% of JavaScript online submissions

// const isPalindrome = s => {
//   for (let l = 0, r = s.length - 1; l < r; l++, r--)
//     if (s[l] !== s[r]) return false;
//   return true;
// };

// console.log(isPalindrome('abba'));
// console.log(isPalindrome('abcba'));
// console.log(isPalindrome('aejbaalckawkhbrtlqwblfwzfptanhiglaabjea'));

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   let l, r;

//   // Check a|a
//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === a[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l && isPalindrome(`${a.slice(0, r)}${a.slice(r)}`)) return true;

//   // Check b|b
//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === b[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l && isPalindrome(`${b.slice(0, r)}${b.slice(r)}`)) return true;

//   // Check a|b
//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === b[r - 1]) l++, r--;
//   // console.log(l, r);
//   // console.log(`${a.slice(0, r)}🍔${b.slice(r)}`);
//   // console.log(`${a.slice(0, l + 1)}🍔${b.slice(l + 1)}`);
//   // console.log(`${b.slice(0, r)}🍔${a.slice(r)}`);
//   // console.log(`${b.slice(0, l + 1)}🍔${a.slice(l + 1)}`);
//   if (-1 < l) {
//     if (
//       isPalindrome(`${a.slice(0, r)}${b.slice(r)}`) ||
//       isPalindrome(`${a.slice(0, l + 1)}${b.slice(l + 1)}`)
//       // isPalindrome(`${b.slice(0, r)}${a.slice(r)}`) ||
//       // isPalindrome(`${b.slice(0, l + 1)}${a.slice(l + 1)}`)
//     )
//       return true;
//   }

//   // Check b|a
//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === a[r - 1]) l++, r--;
//   // console.log(l, r);
//   // console.log(`${b.slice(0, r)}🍔${a.slice(r)}`);
//   // console.log(`${b.slice(0, l + 1)}🍔${a.slice(l + 1)}`);
//   if (-1 < l) {
//     if (
//       isPalindrome(`${b.slice(0, r)}${a.slice(r)}`) ||
//       isPalindrome(`${b.slice(0, l + 1)}${a.slice(l + 1)}`)
//     )
//       return true;
//   }

//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 49.04% of JavaScript online submissions
// Memory Usage: 48.8 MB, less than 5.37% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   // These are al the candidates to test to see if they're palindromes
//   const candidates = [];
//   // Include the source strings as they can form palindromes themselves
//   candidates.push(a, b);

//   let l, r;

//   // a first
//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === b[r - 1]) l++, r--;
//   if (-1 < l)
//     candidates.push(
//       `${a.slice(0, r)}${b.slice(r)}`,
//       `${a.slice(0, l + 1)}${b.slice(l + 1)}`,
//     );

//   // b first
//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === a[r - 1]) l++, r--;
//   if (-1 < l) {
//     candidates.push(
//       `${b.slice(0, r)}${a.slice(r)}`,
//       `${b.slice(0, l + 1)}${a.slice(l + 1)}`,
//     );
//   }

//   outer: for (const candidate of candidates) {
//     for (let l = 0, r = candidate.length - 1; l < r; l++, r--)
//       if (candidate[l] !== candidate[r]) continue outer;
//     return true;
//   }

//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 71.97% of JavaScript online submissions
// Memory Usage: 49.4 MB, less than 5.37% of JavaScript online submissions

// const isPalindrome = s => {
//   for (let l = 0, r = s.length - 1; l < r; l++, r--)
//     if (s[l] !== s[r]) return false;
//   return true;
// };

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   if (isPalindrome(a)) return true;
//   if (isPalindrome(b)) return true;

//   let l, r;

//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === b[r - 1]) l++, r--;
//   if (
//     -1 < l &&
//     (isPalindrome(`${a.slice(0, r)}${b.slice(r)}`) ||
//       isPalindrome(`${a.slice(0, l + 1)}${b.slice(l + 1)}`))
//   )
//     return true;

//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === a[r - 1]) l++, r--;
//   if (
//     -1 < l &&
//     (isPalindrome(`${b.slice(0, r)}${a.slice(r)}`) ||
//       isPalindrome(`${b.slice(0, l + 1)}${a.slice(l + 1)}`))
//   )
//     return true;

//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 58.54% of JavaScript online submissions
// Memory Usage: 49 MB, less than 6.71% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   if (1 === a.length) return true;
//   const candidates = [];
//   let [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === b[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l) {
//     candidates.push(a.slice(l + 1, r));
//     candidates.push(b.slice(l + 1, r));
//   }
//   [l, r] = [-1, a.length];
//   while (l < r && b[l + 1] === a[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l) {
//     candidates.push(a.slice(l + 1, r));
//     candidates.push(b.slice(l + 1, r));
//   }
//   // console.log(candidates);
//   for (const candidate of candidates) {
//     let [l, r] = [-1, candidate.length];
//     while (l < r && candidate[l + 1] === candidate[r - 1]) l++, r--;
//     if (r - l < 3) return true;
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 47.56% of JavaScript online submissions
// Memory Usage: 48.3 MB, less than 6.71% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b, d = 0) => {
//   const stk = [a, b, [a, b], [b, a]];
//   while (stk.length) {
//     const curr = stk.pop();
//     if (Array.isArray(curr)) {
//       const [x, y] = curr;
//       let [l, r] = [-1, x.length];
//       while (l < r && x[l + 1] === y[r - 1]) l++, r--;
//       if (-1 === l) continue;
//       stk.push(x.slice(l + 1, r));
//       stk.push(y.slice(l + 1, r));
//     } else {
//       let [l, r] = [-1, curr.length];
//       while (l < r && curr[l + 1] === curr[r - 1]) l++, r--;
//       if (-1 === l) continue;
//       if (r - l < 3) return true;
//     }
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 47.56% of JavaScript online submissions
// Memory Usage: 48.3 MB, less than 6.71% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b, d = 0) => {
//   const stk = [a, b, [a, b], [b, a]];
//   while (stk.length) {
//     const curr = stk.pop();
//     if (Array.isArray(curr)) {
//       const [x, y] = curr;
//       let [l, r] = [-1, x.length];
//       while (l < r && x[l + 1] === y[r - 1]) l++, r--;
//       if (-1 === l) continue;
//       stk.push(x.slice(l + 1, r));
//       stk.push(y.slice(l + 1, r));
//     } else {
//       let [l, r] = [-1, curr.length];
//       while (l < r && curr[l + 1] === curr[r - 1]) l++, r--;
//       if (r - l < 3) return true;
//     }
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 39.02% of JavaScript online submissions
// Memory Usage: 49.9 MB, less than 6.71% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b, d = 0) => {
//   const arrays = [
//     [a, b],
//     [b, a],
//   ];
//   const strings = [a, b];
//   for (const a of arrays) {
//     const [x, y] = a;
//     let [l, r] = [-1, x.length];
//     while (l < r && x[l + 1] === y[r - 1]) l++, r--;
//     if (-1 === l) continue;
//     strings.push(x.slice(l + 1, r));
//     strings.push(y.slice(l + 1, r));
//   }
//   for (const s of strings) {
//     let [l, r] = [-1, s.length];
//     while (l < r && s[l + 1] === s[r - 1]) l++, r--;
//     if (r - l < 3) return true;
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 58.54% of JavaScript online submissions
// Memory Usage: 48.1 MB, less than 6.71% of JavaScript online submissions

/**
 * @param {string} s
 * @param {number} [l=0]
 * @param {number} [r=s.length - 1]
 * @returns {boolean}
 */
const isPalindrome = (s, l = 0, r = s.length - 1) => {
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const checkPalindromeFormation = (a, b) => {
  if (isPalindrome(a)) return true;
  if (isPalindrome(b)) return true;
  for (const [x, y] of [
    [a, b],
    [b, a],
  ]) {
    let [l, r] = [-1, x.length];
    while (l < r && x[l + 1] === y[r - 1]) l++, r--;
    if (isPalindrome(x, l + 1, r - 1)) return true;
    if (isPalindrome(y, l + 1, r - 1)) return true;
  }
  return false;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 39.02% of JavaScript online submissions
// Memory Usage: 49.6 MB, less than 6.71% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   for (const [x, y] of [
//     [a, b],
//     [b, a],
//   ]) {
//     let [l, r] = [-1, x.length];
//     while (l < r && x[l + 1] === y[r - 1]) l++, r--;
//     if (r - l < 3) return true;
//     let [tl, tr] = [l, r];
//     while (tl < tr && x[tl + 1] === x[tr - 1]) tl++, tr--;
//     if (tr - tl < 3) return true;
//     [tl, tr] = [l, r];
//     while (tl < tr && y[tl + 1] === y[tr - 1]) tl++, tr--;
//     if (tr - tl < 3) return true;
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(checkPalindromeFormation('x', 'y'));
// Explanation: If either a or b are palindromes the answer is true since you
// can split in the following way:

// - aprefix = "", asuffix = "x"
// - bprefix = "", bsuffix = "y"

// Then, aprefix + bsuffix = "" + "y" = "y", which is a palindrome.

// Example 2:
ok(checkPalindromeFormation('abdef', 'fecab'));

/*

01234
-----
abdef
fecab

01 | 2 | 34
-- | - | --
fe | c | ab
ab | d | ef
-- | - | --
fe | c | ef
fe | d | ef

|abdef, |fecab = abdef, fecab
a|bdef, f|ecab = aecab, fbdef
ab|def, fe|cab = abcab, FEDEF
abd|ef, fec|ab = abdab, FECEF
abde|f, feca|b = abdeb, fecaf
abdef|, fecab| = fecab, abdef

*/

// Example 3:
ok(checkPalindromeFormation('ulacfd', 'jizalu'));
// Explanation: Split them at index 3:
//
// - aprefix = "ula", asuffix = "cfd"
// - bprefix = "jiz", bsuffix = "alu"
//
// Then, aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.

/*

012 | 345
--- | ---
ula | cfd
jiz | alu
--- | ---
ula | alu

*/

// Example 4:
ok(!checkPalindromeFormation('xbdef', 'xecab'));

ok(!checkPalindromeFormation('abda', 'acmc'));

/*

0123
acmc
abda

*/

ok(!checkPalindromeFormation('ab', 'xy'));

ok(!checkPalindromeFormation('abc', 'xyz'));

ok(!checkPalindromeFormation('abcd', 'wxyz'));

ok(!checkPalindromeFormation('abcde', 'vwxyz'));

ok(!checkPalindromeFormation('abcdef', 'uvwxyz'));

ok(
  !checkPalindromeFormation(
    'vmycmwcstqzknprikiipneazmprkfqofcvdrkoqpwpehbhxuivbssnetsnxdaamydkkbujnlnamamepwsdehcgkheznyxdeezlcuqqjqdpgxtxejjeqxqrwjnfovelpzfpntvkfzgqgfjyrnpjawsqjshrgxvlhhztorjrfjicpoesezoxqdpyljgilaofxrzmoftsgcwffaftuzwatwhxjchjzhsipemfsqzaoylepdrinllvlqnutuqkgcaizcygifdxfhvvixdfnpqapyfdtmsixbzaspdsbypeumnxexkeceoduxfkboundpkrguydcbwpcniwcyzgldajlqijhfapkbixagdjyopmaqjtrlitayymnhuqphszbqelxfbwkkoihukkognkkkkhptxkaddsybgbepgtecodmtajuryjjsgxrfysajvqvnuloapqooczdzwovbwqpzzrncaqyinbrlxwppcaoxayibvvqkjmkranefrybjnxlvwgfknljtzhtrbpzojrivlozajttampyssdoctmyxtyjhzxflvrjzemkyouxamcdlqpneifeyxdijepaqvpxktcgrbmlanhvtuxtjmegsmspzhiclbukervpofkojaeckujzmorycwduoxstelwxwzdqppyimdojhvtpdoarbhtjpynancifsdnpbdoihbnjzivczsbvlokdeqsvxpusjlmiizpxqmvfoonbzvgqxqzoyixyzsezdozzpivzrrwtwpnjyyzjxqxeqchwcyyzvqlawtkeomjoholfdqkpcoidbtlvbhxrdlnaldketgpvckrahamahiuaqslnygytrqfiesikbsjozmtpjfqteqcrfsawykldhuecjtxrebaedyvokjzkojokjmjqkhgotukzfmojexhfhjgvonkwtdursviuotmqgloxdjwdatudzzuutmxzdfmwlooqctxuxygnyethgvgqvfrhusxinbscpjozfgqdamihlptducjzcfjqsqdgqdsumrglgkwymtxzvrumjxhdiwacprifiteudaqjwnpxzutsyohqbsnhiahbqeeksdlockadeygctmipylkcozylidypiwujcuwsxtikofwmrhxmkocplptjtonutxzcimbosotjthwqooutjpbrjdmblfkghdsxmkjmegjnejgdycgprxrzkmhtnxpxllsmqcmmcsercekxamuoswvlzhebdkxujxdtkefmofpvebxagqiqqhvviwepdoifiprlggffiwuvdghjftixtmijsjjyawuohujhjiilyrwsfiteakejhynnjhhucjxdlyauhtqpuvctlhcxxyrfsxtqrvsxtpicsyynpxakvizntavqilrszwhucbcpktgsbfkyvmoidkrfvjrjktclijajtdudypsiyrlbvleqnavupcapndxnypjagmqsbvtjirqbohnnbjeuzepjjipcklqxarbhinylvkspmuefwcfbzhiiyxgchnftoqactptnuzemrnnngsfyjtxubvocyjbvxlbeggyywdlaiokyldrbsohgivhwjemqssfzjxtwbuhyxciywpakgebtbkwmrflmjarezxrzmzrfmmmerejykpaxuzoojqfgzqjysbputcxbiajeicbfktdalzjnqianmpivdazgzmnzevuttmlnocohwrxoxipoghrnpkejzfdjensvubdtpwknlesykuvknitofqicybhinqsijqgowdjjhyjedzhwoqbtslsikvzqykqgglqaavvfoiffgnxpvrtjbmidwyqyuolkaydttfqfamovmomktpklrmnjwxdegveuvttdqrfqxqlzbhitqloiisvusapyudodxvoaygmqydoadqlajviuyuehwuncfjmhlnwgajxumihlrnoohfpsookbnxcgpoewgbkbirwnhmewiwdaxlwwmouwldvjmecnrqogydlgecmosagipxgtvxheiebhuukkanjhlkbavmccamxzztxqgeqfxdecrfyehusxpgsqcuikzouvzxfstrnigevjaydgqlukadzizbrdshpfwezzdnhexyoxvafvobzncswjzuwoyqrwumwkcxynwxtengbcyuwpevuuzogflaftyttsjnmqikxnomgrtjlwotxabimgwgpbcneeyvnkvebnligmkuvcrnjgibwhtqapfmhbtdqviwoncyksfdxqfkqtucsczgachlocusgmqowphtbcbwqsildypvvfvjkogoimcajyxseszolfmnnmrrwgoljrkpsyhpqqyldurhuzvdzmbzmcffbgkobbtjptsskhmygxzymqyqwaqnnrjbshxosnmouifhrmyykftgdqvkqvwdvwpkmhgjqgbzozmpqphqeybnzaejyqkmjxpbvyfpjcakbmievpdddwlvihadydaxovnryitkdnkhanvtwblzgnbtlhmvjkjhykbglebqufpwfskhhnlfvvrqaennlwkalltmbngeymqagoznqokzgmgawvjvrrhwsldlddxqsfyffpxdxzlvscznzsnvumrxhouiaaeirypechkxgradqnhzlqagxbjvnyrrcxhwghnbtnrmegwybdmnshbbxtqivhzrzdediwprsovezduiokrpxbwcnzmtexujwtnznygmeiyuassswwarsqpdiglgsvavfzlgkiwbsoamdgbropypbwfyggcnkmfmzzcjzezknzjnebfnfwsdhoynpzufklceqdzajrhcptekirmmwmrysissesrhgjynjnuikupnspnexcqekelvsxrlytuwvcoqhyvdspodsfbpmysmdaedfkaokmabklxigitqcsnokwqxyvhljwnsdnzplyllkszxpmpqzzcwnupcbzostppbygrcxykpjxoqitrssrevhwrdunzzhkeguqqqyxntbemikiqhapbjzdwovlycgxxhjelibqdjtgqpzgxiskxoafsbhfczaamwskjkovgmmumgmjdnkrbbwbfxxtkbpqkmdnbcxezcbcjdbuehapxpubtqazwjcxozknegefsawceiyddxaxspkibbkqxwwspyrcipeffdgchrwkscfvtcvixhoitdnabfhdaighbiqnvboahjcwvwycxstbsvjsnctsqekyxqqguurzspmsbhdlejdpffpfouuuzmrmcfdmbsztbazsxiptchbwjlzvdmaeubitalsgzffeiultzjsfilfgtzprxszjeulsalybxdjhgkwpglzamqejxwbpqdsvtoyfgfqavonvtsauvmsknkqqfxinylspkzgfnmjmncahygncoinyyffhfzkudpkiufwfloxfbeeakmatebzqyprzpzxuxophzqmbfjdqeidnrrazabwcnwxswtuweckgxzotvtursjwukrvnsheehjfklqczjhrwlearivelfkwzpsrweiwhzdlwbfchehzxpzhqakegnnvnvjcxzdsymbpjpfdakrvdibknakjqnzgnctsnmctryrzdvppkxsksuudasjvjqxnebjdcoeimbytfhdbqawnccjyqxumzorsebmtxinusdnokoizpuhxbwguvgeielawotvoshalnyjpupqhcfbuxiseulyazurhcsueemycyryxhsarityajnccdjeqjcxobrrfhugyhpbylycjxbovtdinzaqiukjbtmuxuitjmbxjjvvgeyjmmogwupuiqcvkysliqagogbzujibabjomcxjxldzidjhssacjgrlignjtcsswgwxekviatbswxbyphvfkdbbgopzmmnqklixxozegkzxbuzejdtzffghzllcrbpsskrvxdlqjjqawqwczdbcalebuispslgngtjxkuvdowbrabhfvjuegeirmqnqljostcfqttacvyrqmkuhjfdzaovzuraiwfaeatcinmqwoenqbfynvslsozzmhkdhgedklkfuogvfmqnrcilbuownudfjutlrqusszghfohlowqjwkpknfplngghwnjlcnrzpzggttetghxqosbknubfntcetjvwclglkxquqxsmszndmtrxobwdqykrvzihyqyjqvkclzgpdibbyczjnkfipqiophrqvmdjnyuthaeefetwpmcswxwlheeknjdlmahpwwkbbnedrdsbzngwzwiywtmgvnwsoppjbaiohxfyahleebnnqrhxkhjllwsxwznklqlpfcmziimqwwxcvcvfjfkbpcscrvlwdowjiqmvtrosgpyarmkmvbhllbnqevxftgkmktcelflfhzugxuwxadtraujjuzrxchgfyjtknpxqulappusszgoqpxshvypeqaadkxouulbttwcxapcexuyzmhesphuztbnixqgexazkbbrrrxvbliktyzucypgvchgwbzcqgseafzleeqcgzgjqkumwkqzowbfnfflfhjxchfdqfimhtffluxpzrtdutevbbelxphvuasgdbwumhkeijqnrwhzxniuhhdffwmalfqtyxgniyikxrblfxwgtzqmjrampesjjvzoxrzcdgpqqtfpobkprgedhuqeqvbnmhogasisujuqulvisklmacrlxfbanxltwpwlyexoxmlkikbjpkoipjeqgaslxphtqqdusovjagbydkfkpcahhowdknbxjjhwwrmoviwvtnpmsthdxvrwqoqecrriikkvqdabxattjujrqewcpfrfxmfifohlvsmdfrxdvpscbhkzgkgbnuocyksuofhdnfphmqebaobqtnjcuyjvjjxayanacxqfzjoswyxqygksbvcvkfunsosehkwtedwnledyiobdcfolpbwjgznuleekqtqzxmputrhgcqiktkogouwdezmpqwkzkjatyjcikmutsudbdeewqtcvfhrgpcakehoqhrgtdkxbgczjnyzoldzqkauzobpsirnzpzqvcarplsulofhajdqyhfktjqihpwbbcmvzjeulxdelqwkdooosffjppjoitnjkbauutatccixiagkoschaakrpfuriodategftootoftddbxbtqneviawetymjdcwxsgfnrawgwmngntkmsuboipbrkufrkdjtwdyxtavnjeswoxwijjodgaolzekbgexuhychlqxwxkemoiunclcositvphkandxjqxjnwnbnaftfibabvxzpwnpdgbtplbeiehohwvtehxkxpucaocxsunuccqxdqlxvhyxaigksqhascpinlydnibrvwvithouyrectshyqohyrjxqjrmdgyunusygpjdlfnoonyjlvlpcjvrfuqgzqptwhunybbwbyvzwwtoasmelefasakyamsyxfkvywpochybrbsnodvzrumkzlechaycedceiigrezydsinerkzgrtasyzqtuegsnugosnomeshvzkyogqplwjmaihcivogwezibsqkykzjtatxzabyhnsqlbbsydkzvhalvugaiwxmxtzzqiucbgbmgaqikcnwmvmltcsxbjinrnaewzcmougbhtmmyjbwrigmsvzjsrgtmjagjcazqwwvtyrwaxpsktgafsunmlskrbxdohqmcceulikdgszvllnsjpuopncvvgznykwtzutbcwkago',
    'puvluvckuigwvqsegzumtchvuytngbaauexvutjjidemfwhwamwasnmjmikljzbrkidyonjbymogozgdnacpqvpetkojdkoirqzayqpdwkzrqczaqsbllkmfykxenlehkcoaxtabevrbgyktaxplxlzjdytczeewuhwcsawkforwvbdaackciicsjzvlwmnoertalzgmmgkdmcxwbhvrhcutykexdskiwxteeojughulqwmrdgkooybtvdaweavejoqtertfvacsufcxymzeaalemciizocctugcoqbmdzhlwamwsmadnaknvgaftwehisiwlgihszbfpjyumgprewddlujiftmdwbsguuumetgworjwxeshomlpgxqluqszlgvpysocnchbuefqqpbsazfnhqdcozsyhtxehqevvdrrhiujqpwntprzbmxxbdkjmbmhqymonqekpowrkcmrktismuyizmhaqtmqvxyrafwnlwraoxkmyforblhehhkkuuiuovsnjfkpkvwnkmdtgywythrwqllbufigbpsbppbdhqissyltqpwdibezlppnfsilzmgrdcgoddwzpjpuevwootupamgvdlvgqafvjzfkrpybauviphbuacusxqqavphhgosdtgfcvjkcrmgciuebocluzhiypurlkfbzlpyhoyltdkqqpitxfwytpecvytqaulqlsxjfssehcvvorclitzkizjchieoxuedvdqcnfjemoedhqktjcqnfxwcqdoltwdokplflchnvbzohmspuqfsmsiryczlzzlgpuqjryjbygwnkzwlpxztnxuyiggnxjprbvrvynxelcimuzfszdcrhmgucxefnpoiddlfjtiqblebaqnbfukfintydbyzkkvicmxvulzebdgwykqtmylriymiwyjeajozxaqvphmdosqwouseggfdxmugtscybvgwcnmmlhbqzmoqebhmatjxsvbeldadjdmqsjqqhcadwmyqupofetihvstryrsgeqjixrpedbzroabxfgtlinfdbeqxhkpnzlbeukuzovafzltlowsuhqctvnqjleqarcnjoclmjnbavsatiebtlnecyvknpcundgnuegkbwfgpkcmfqpbfnhfbgawipdtyxvfsqbitjdyxloqmzalwmezvifhhzufuijcbnqdzhwrklztvskotnberxczitgmtizvtpksbhkvebjkktqsenvzynelncvkdimagqlfvhtqauieewihhhdtzdntgdfwkizumpkjgbfbylbpntatxovwqjluhscarbkcrmclzkgabusvyexoomdugpuxntecitumxffkpadgmoeodtqgxqbvwkmdtmvpbgffkuynuvvokntknjepsitbqtinpodycawhtckybesejxymvqfpwyipmzhsuqrbhwgtvxwwgxapzdpbpymkiuhxpsjerdtirncgyifrsnjrbeybddhbpbpwoidqsgvddzycmzwhszkeijyxsgejhzhzwrxjuevgypdcchuilseuzytnbhnfkgevwlakkjgnayzotehxadyrrtljsewuqvmalekmuvdvqeykvnffgtyfhcmxqrguvdkivloeodsjlgetldbcuyyzwpbseddmpbcxmyqwhpmxuvgpyhhetggnqcvsjkgskonycuuouyfkokibxzcuxuznhtyqvgjemmaickegjjuzlucxkhmjiyfonnrjipmlzgtvewzxatmauwatvqbzehysiqgcpvyakjulycucjvmognmruicawjqjlyjwpfczfgkxznoxozqnpljiuwahiaachjzbfuxcikwhxvzsxvefwzawsksibrsvditvvshdqvxbhghtzznewuesuzggyviggrpkaeeodcloylpqqeohrhnmrmaamebpnfgjzbosiydzfegxadlfkloyvrpatbnzndtjthdmahxyhrzlltgczifgtjecwqgpvckzrqlyvqbhydgzppryowowuabmczpkgzmwswooruxtyvyludwitgyvffwsmtnkcxrjjeearqsfjnyrynhjpfwhyucytsxrixnjvhrzagdzfprfzkdlmgyejnsdjggtmvuuaouwqhakiyymembdopbwqdqqsrqxnuflnxnaclnpcfdbfnvqvavkezrzaaqxmjippzrglyyhdmurtquzrbfslfoopqanuqkuwcgqdwhnvbaijuhwruumeqpigdadbwdbrerordngtilnhxkbyfmbcrlwxfewcyhrxtpfvaytagwufpgtqnuehimbdijpubzimqihqloqnjbaaispymblcbfnvfzmtkoutymfcmsjbhsrnjnuabcgwydsjcfwffacigqlohimprssaemxenpuzittvzjtvfpggixwmmrlbwartfymzqwnhxcindbvxzxradztfwhidcbndzhonkylonglgyhnawyodqwqpsfozjplcixeuognaknswfocgtroiaglrdwkrfqcjysmuspgpveznesnmzlammsuddbbjaicpdmzktlbbakoyhryuinxosrrbopnfnkwhaizbcglhuhdidgkijfayinefkxggxhjcdjcguahwadcuzjixdramxcbigszuejdzmnznvizausmqpiqagqxtywqzdyhlcbvkqgzydporlplkvnmkvnmsmtxcpsqrfiybyhnxsavcavnybbqmvfifhactcvfictpchhbyoshalwuxpwqddrkbjekwsnpfepkttclhnkpindzqplicunplxxbofyxpehalgtapazkwjcnnbovzixbfzytdthzxvsglirbbwfztoqxvqbyxkfodtxitbeosqatmxewlhorpccvdgrzepqetkwjtmhfwqmnsmywwqakpwrmxphkvxbfexuntculvfuzjozronwkosylanlnpmsxbakuoivyywgwfcwrnyeibehnktedgmdtxwoaqmsywaoziblculhynshanxwgmxqepetmudqremhfbjjsiodovdqyvndbyrgdgxrucjegdiicizhzioasvwqtvvwhygtjvefbbrkgzlavabfvokmxjofnlrutuqtzpzpolobzuljxrkjwxrenxsogwhqjazbouqrzshpssvikubhgixwwtnfgutfszunhnafrijlmjyetgvwcaeqbhutpdvizcxeevqeijbdmtsfgoopjndmmmyifglxjcuazggocdbouosasdqktwirxclkemttosussjokqijhtohvmxvkhygdhifwdjlqkcssabccgtzytzbkaphryjuvxwbguhxrstwqotstlbqwvnstgjybzjcdkmetsqapjfzvrwrdbgclgeyyakjczakrbnifmhciapytcvggxopmmeapekkcvdoayiwbfcvlistblrnouuurkpxclshlwkzoqftylnbivgxfxlctqpnrnopqfwxolqqlgffumqlxtalylapihldydbworzfocfdetmzbonjrsnesesfliolvhuytdtctqkpwdizdfihxboyqwsbvyibixnlkwjumojwofcpwhrcthjfzlgboowiktlvupebmdpnjiigjfikaquznhhafwmdsjcenbalijavnwtrjhvltrbxpwgaxtjpqifacjzwvtwxqgeukeacnreovtdqflqhephfztgyswohqlnxrgzxzbetjahcoyxginmbamqetdwoudmxndbosvuncbaxwewdnnnkqoyyfvmwpjodehbyyiryddnraphdakjkxxwvtaeqemagsojnghcrhszsbjelnbubcvaefrlvcnvpndqqypfljbilsmgvaezzmbnaakqsgkqkpcxycrsndweiczbmpinmkndjeakpjmcswarrmqyyrgfevdhaybremdjoikhsnvxzpoiengyjftmxdqezbsixfhgadmkbsykrbvbkyitzvwdzqzskvceekxxcyploydangwfmlnzoyfpphxvqbxpgcaihkdpbnnwyahlaezfkubfbiilzyddyroihuijlbxfmnlztrntlwnboufoneevtztkmtwzuskhwpwphxhlimbbjascszxpdbzesjsjlfwvpbtdssvuyqipzrkwdwchopuqvzkmmtouzfrcziaqhsqcwgmbkwoxurdlpqmgakdnfrbquznyfuoqbtiidvxgxtfzjfjryfucapzkpmzaikxfejnhtlutjcbgtxsugqbswsjmukbrtlpunvmympmvprvckwsqbycbhqqekzeibfvcutnncqytqnkvfemmqgphoffvqgguryiourganbppoexxacdkqdbwlmooaqkymcxnhppncnocnzlpjjktoxupnwohvppuajbtiyakehnrvkaojdubqyrwnpdxqgyyziylbrswmtmaiknaxarfsbgowzhdygeclncywawioyqbpoiwdxvonujawobqpbnqicitqwixfgcabojfykbihxecevmvndvrmagsddvlxudsuxxqrxjmeruoacneswilminhbhhlacfibffmiruuhcoxyqspmrkhvtshuekxprzapqtcuhdxjlujnmddnpanmvxbobsqtyqhihlwjdjzohbnttipnpndpispighljsmizrbrqdttintwawoeveelzxkrwaqclnsirnenlnhlfybzcylvugckbdjnffxfadxxxtxnsbvdqgjddrxodxijvmilgushqxjaylimuuerffmixiecbfxnqealczwafgzrabrzyormkusgrdufycxcvirrzuygahtugulvzewzqaiybtqvtqgqkihblmspbwznyvmgxiuhccxojwsdcxnsffzgmzqmlnxklmapcsrzfvhsjpizpsdaxiidnvehxbxpfmzzuohsoumyrunoeqznoejoctkiatekkvjlczpisrmshyuzfzsxdczhqsflkgfmeuivqflzttgucmykxrjbgsvuiljyeexwhbqomdiojbeyazibcqvmcjicpjulyqklkmtmvbbheznmkrsymgutrbjliknhteasvnhqjbbvjjxsnczscglcvmtmjzcupdzyvzdbtcfvprlxxfejxlctsxocyapjpborktsfaugiruekvsefsatyzvbkowsnixapcnsbgoydpamijyjyrmjestlysdayujhtglmubnvxzddcwkxitaijgavpojrzmfnthesytkpmpytyajpcszotuydjcsqgaxackdmkaxpbqdlsfbygxxucneiqvzsfveakpwxycowkkkhxkbgfcoyyztiuejzwpltxoxbaosbjfcshfybanqxllgrsuzoixeopehumfqothhlnyphvhpikevtcalkzsbxtcnnjcmlstgofokfmdyxcuantronofvwwrgmhldysamjaodogpvdmseuecvovgebrtlbenfhtjasqzfzwphmdsysikljezvmawsmpujddsreqrzdxikfbpiqdageljvwpaeilhxugvecwqedulfovzqvxquqzuzxvsvmpjdlzbnfqdvnpsiptzktjkpxerghyygwltspjddcbbvxedyptumjtnciriankuswpsyirenhtapqtcfhoaqlwjjoninivfcrlqibouyjgmcbzqkmftglutwqwsacagnfeeoklpvslosajhtinuge',
  ),
);

ok(
  checkPalindromeFormation('pvhmupgqeltozftlmfjjde', 'yjgpzbezspnnpszebzmhvp'),
);

/*

0000 | 00000001111111 | 1122
0123 | 45678901234567 | 8901
---- | -------------- | ----
pvhm | upgqeltozftlmf | jjde
yjgp | zbezspnnpszebz | mhvp
---- | -------------- | ----
pvhm | zbezspnnpszebz | mhvp

*/

ok(
  checkPalindromeFormation(
    'aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd',
    'uvebspqckawkhbrtlqwblfwzfptanhiglaabjea',
  ),
);

/*

00000000001111111111222222222233 | 3333333
01234567890123456789012345678901 | 2345678
-------------------------------- | -------
aejbaalflrmkswrydwdkdwdyrwskmrlf | qizjezd
uvebspqckawkhbrtlqwblfwzfptanhig | laabjea
-------------------------------- | -------
aejbaalflrmkswrydwdkdwdyrwskmrlf | laabjea

*/

ok(!checkPalindromeFormation('xbdef', 'xecab'));

/*

01234
-----
xbdef
xecab

*/

ok(checkPalindromeFormation('cddbcdbdc', 'cdbccbddc'));

/*

0123 | 45678
---- | -----
cddb | cdbdc
cdbc | cbddc
---- | -----
cddb | cbddc

*/
