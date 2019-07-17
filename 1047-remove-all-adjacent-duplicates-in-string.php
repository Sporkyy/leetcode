<?php

// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 24 ms, faster than 33.33% of PHP online submissions
// for Remove All Adjacent Duplicates In String.
// Memory Usage: 15.1 MB, less than 100.00% of PHP online submissions
// for Remove All Adjacent Duplicates In String.

// class Solution
// {

//     /**
//      * @param String $S
//      * @return String
//      */
//     function removeDuplicates($S)
//     {
//         if (strlen($S) < 2) return $S;
//         $result = $S[0];
//         for ($i = 1; $i < strlen($S); $i++) {
//             if (0 < strlen($result) && $result[strlen($result) - 1] === $S[$i]) {
//                 $result = substr($result, 0, strlen($result) - 1);
//             } else {
//                 $result .= $S[$i];
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 644 ms, faster than 33.33% of PHP online submissions
// for Remove All Adjacent Duplicates In String.
// Memory Usage: 18.9 MB, less than 100.00% of PHP online submissions
// for Remove All Adjacent Duplicates In String.

// class Solution
// {

//     /**
//      * @param String $S
//      * @return String
//      */
//     function removeDuplicates($S)
//     {
//         if (strlen($S) < 2) return $S;
//         $a = str_split($S);
//         $result = [];
//         array_push($result, $a[0]);
//         for ($i = 1; $i < count($a); $i++) {
//             if (0 < count($result) && $result[count($result) - 1] === $a[$i]) {
//                 $result = array_slice($result, 0, count($result) - 1);
//             } else {
//                 $result[] = $a[$i];
//             }
//         }
//         return join($result);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 36 ms, faster than 72.41% of PHP online submissions
// for Remove All Adjacent Duplicates In String.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Remove All Adjacent Duplicates In String.

class Solution
{

    /**
     * @param String $S
     * @return String
     */
    function removeDuplicates($S)
    {
        $end = -1;
        for ($i = 0; $i < strlen($S); $i++)
            if (0 <= $end && $S[$end] === $S[$i]) $end--;
            else $S[++$end] = $S[$i];
        return substr($S, 0, $end + 1);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 'abbaca',
        'expected' => 'ca',
        // Explanation: For example, in "abbaca" we could remove "bb" since
        // the letters are adjacent and equal, and this is the only possible
        // move. The result of this move is that the string is "aaca",
        // of which only "aa" is possible, so the final string is "ca".
    ],
    [
        'input' => '',
        'expected' => '',
    ],
    [
        'input' => 'a',
        'expected' => 'a',
    ],
    [
        'input' => 'aa',
        'expected' => '',
    ],
    [
        'input' => 'aaa',
        'expected' => 'a',
    ],
    [
        'input' => 'aabbccddeeffgg',
        'expected' => '',
    ],
    [
        'input' => 'aabccadda',
        'expected' => 'b',
    ],
    [
        'input' => 'abaca',
        'expected' => 'abaca',
    ],
    [
        'input' => 'miepavtabopghtcivgoguhgpjhiepbofvuvggfnpjllomlvuibrnulpegacebqwswjjfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivullaqkvfkeewriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvappgpdskbcfhqjggpminhcffljiljfmcekudkjnugejfucwilfvdeaosmoppujofaurvantovgdclqcfqsssvmscbsnhogkcasckdbtiuovevsramwpcojqrkqqkukuaddidifmkdrjpfvcnmihwqudfqsrgeoleefuwmmgnvlgcugouelnjidaqggafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhoneedllcflcrboofpuckusgcfroqgdcbpwskvnndrmorekebuffpnrkhrufwijbufetfjjadjlebclwigwdcmpvdjlqqlomjtooiagsiwadswcqqsclbwosdmarbooernmrfvtnnrfokbwksjaeucdscowqfgopgwqptffioviduvwwloqlodcrtdogogtkolursittcvfuewnrsmshfadnkswtqssstkfajosstdwrwgvmhuqvkguvlqovotakwhwhsgbcvffpsthlpfpwgsscmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
        'expected' => 'miepavtabopghtcivgoguhgpjhiepbofvuvfnpjomlvuibrnulpegacebqwswfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivuaqkvfkwriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvagpdskbcfhqjpminhcljiljfmcekudkjnugejfucwilfvdeaosmoujofaurvantovgdclqcfqsvmscbsnhogkcasckdbtiuovevsramwpcojqrukuaidifmkdrjpfvcnmihwqudfqsrgeolfuwgnvlgcugouelnjidaqafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhondcflcrbfpuckusgcfroqgdcbpwskvdrmorekebupnrkhrufwijbufetfadjlebclwigwdcmpvdjomjtiagsiwadswcsclbwosdmarbernmrfvtrfokbwksjaeucdscowqfgopgwqptioviduvloqlodcrtdogogtkolursicvfuewnrsmshfadnkswtqstkfajotdwrwgvmhuqvkguvlqovotakwhwhsgbcvpsthlpfpwgcmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->removeDuplicates($input);
    if ($expected === $output) {
        echo '✅ ', $input, '<br>';
    } else {
        echo '🔴 ', $input, '<br>';
        echo 'Expected "', $expected, '" but got "', $output, '"';
    }
    echo '<hr>';
}
