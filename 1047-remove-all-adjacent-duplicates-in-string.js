// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 95.21% of JavaScript online submissions
// for Remove All Adjacent Duplicates In String.
// Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions
// for Remove All Adjacent Duplicates In String.

/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = S => {
  const a = S.split('');
  let end = -1;
  for (let i = 0; i < a.length; i++)
    if (0 <= end && a[end] === a[i]) end--;
    else a[++end] = a[i];
  return a.slice(0, end + 1).join('');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'abbaca',
    expected: 'ca',
  },

  // Explanation: For example, in "abbaca" we could remove "bb" since
  // the letters are adjacent and equal, and this is the only possible
  // move. The result of this move is that the string is "aaca",
  // of which only "aa" is possible, so the final string is "ca".

  {
    input: '',
    expected: '',
  },

  {
    input: 'a',
    expected: 'a',
  },

  {
    input: 'aa',
    expected: '',
  },

  {
    input: 'aaa',
    expected: 'a',
  },

  {
    input: 'aabbccddeeffgg',
    expected: '',
  },

  {
    input: 'aabccadda',
    expected: 'b',
  },

  {
    input: 'abaca',
    expected: 'abaca',
  },

  {
    input:
      'miepavtabopghtcivgoguhgpjhiepbofvuvggfnpjllomlvuibrnulpegacebqwswjjfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivullaqkvfkeewriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvappgpdskbcfhqjggpminhcffljiljfmcekudkjnugejfucwilfvdeaosmoppujofaurvantovgdclqcfqsssvmscbsnhogkcasckdbtiuovevsramwpcojqrkqqkukuaddidifmkdrjpfvcnmihwqudfqsrgeoleefuwmmgnvlgcugouelnjidaqggafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhoneedllcflcrboofpuckusgcfroqgdcbpwskvnndrmorekebuffpnrkhrufwijbufetfjjadjlebclwigwdcmpvdjlqqlomjtooiagsiwadswcqqsclbwosdmarbooernmrfvtnnrfokbwksjaeucdscowqfgopgwqptffioviduvwwloqlodcrtdogogtkolursittcvfuewnrsmshfadnkswtqssstkfajosstdwrwgvmhuqvkguvlqovotakwhwhsgbcvffpsthlpfpwgsscmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
    expected:
      'miepavtabopghtcivgoguhgpjhiepbofvuvfnpjomlvuibrnulpegacebqwswfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivuaqkvfkwriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvagpdskbcfhqjpminhcljiljfmcekudkjnugejfucwilfvdeaosmoujofaurvantovgdclqcfqsvmscbsnhogkcasckdbtiuovevsramwpcojqrukuaidifmkdrjpfvcnmihwqudfqsrgeolfuwgnvlgcugouelnjidaqafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhondcflcrbfpuckusgcfroqgdcbpwskvdrmorekebupnrkhrufwijbufetfadjlebclwigwdcmpvdjomjtiagsiwadswcsclbwosdmarbernmrfvtrfokbwksjaeucdscowqfgopgwqptioviduvloqlodcrtdogogtkolursicvfuewnrsmshfadnkswtqstkfajotdwrwgvmhuqvkguvlqovotakwhwhsgbcvpsthlpfpwgcmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
  },
];

for ({ input, expected } of tests) {
  const output = removeDuplicates(input);
  if (expected === output) {
    console.log(`'✅ ${input}`);
  } else {
    console.log(`'🔴 ${input}`);
    console.log(`'Expected "${expected}" but got "${output}"`);
  }
}
