// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 95.21% of JavaScript online submissions
// Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {string}
//  */
// const removeDuplicates = S => {
//   const a = S.split('');
//   let end = -1;
//   for (let i = 0; i < a.length; i++)
//     if (0 <= end && a[end] === a[i]) end--;
//     else a[++end] = a[i];
//   return a.slice(0, end + 1).join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 664 ms, faster than 8.35% of JavaScript online submissions
// Memory Usage: 123.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @return {string}
//  */
// const removeDuplicates = str => {
//   for (let i = 0; i < str.length - 1; i++)
//     if (str[i] === str[i + 1])
//       return removeDuplicates(str.slice(0, i).concat(str.slice(i + 2)));
//   return str;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 71.84% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str
 * @return {string}
 */
const removeDuplicates = str => {
  let res = '';
  for (let i = 0; i < str.length; i++)
    if (str[i] === str[i + 1]) i++;
    else res += str[i];
  return str.length === res.length ? res : removeDuplicates(res);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(removeDuplicates('abbaca'), 'ca');

// Explanation: For example, in "abbaca" we could remove "bb" since
// the letters are adjacent and equal, and this is the only possible
// move. The result of this move is that the string is "aaca",
// of which only "aa" is possible, so the final string is "ca".

strictEqual(removeDuplicates(''), '');

strictEqual(removeDuplicates('a'), 'a');

strictEqual(removeDuplicates('aa'), '');

strictEqual(removeDuplicates('aaa'), 'a');

strictEqual(removeDuplicates('aabbccddeeffgg'), '');

strictEqual(removeDuplicates('aabccadda'), 'b');

strictEqual(removeDuplicates('abaca'), 'abaca');

strictEqual(
  removeDuplicates(
    'miepavtabopghtcivgoguhgpjhiepbofvuvggfnpjllomlvuibrnulpegacebqwswjjfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivullaqkvfkeewriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvappgpdskbcfhqjggpminhcffljiljfmcekudkjnugejfucwilfvdeaosmoppujofaurvantovgdclqcfqsssvmscbsnhogkcasckdbtiuovevsramwpcojqrkqqkukuaddidifmkdrjpfvcnmihwqudfqsrgeoleefuwmmgnvlgcugouelnjidaqggafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhoneedllcflcrboofpuckusgcfroqgdcbpwskvnndrmorekebuffpnrkhrufwijbufetfjjadjlebclwigwdcmpvdjlqqlomjtooiagsiwadswcqqsclbwosdmarbooernmrfvtnnrfokbwksjaeucdscowqfgopgwqptffioviduvwwloqlodcrtdogogtkolursittcvfuewnrsmshfadnkswtqssstkfajosstdwrwgvmhuqvkguvlqovotakwhwhsgbcvffpsthlpfpwgsscmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
  ),
  'miepavtabopghtcivgoguhgpjhiepbofvuvfnpjomlvuibrnulpegacebqwswfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivuaqkvfkwriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvagpdskbcfhqjpminhcljiljfmcekudkjnugejfucwilfvdeaosmoujofaurvantovgdclqcfqsvmscbsnhogkcasckdbtiuovevsramwpcojqrukuaidifmkdrjpfvcnmihwqudfqsrgeolfuwgnvlgcugouelnjidaqafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhondcflcrbfpuckusgcfroqgdcbpwskvdrmorekebupnrkhrufwijbufetfadjlebclwigwdcmpvdjomjtiagsiwadswcsclbwosdmarbernmrfvtrfokbwksjaeucdscowqfgopgwqptioviduvloqlodcrtdogogtkolursicvfuewnrsmshfadnkswtqstkfajotdwrwgvmhuqvkguvlqovotakwhwhsgbcvpsthlpfpwgcmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
);
