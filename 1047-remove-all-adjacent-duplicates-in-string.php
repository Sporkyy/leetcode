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

// Runtime: 24 ms, faster than 33.33% of PHP online submissions
// for Remove All Adjacent Duplicates In String.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
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
        for ($i = 0; $i < strlen($S); $i++) {
            if (0 <= $end && $S[$end] === $S[$i]) {
                $end--;
            } else {
                $S[++$end] = $S[$i];
            }
        }
        return substr($S, 0, $end + 1);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => 'abbaca',
        'input' => 'abbaca',
        'expected' => 'ca',
        // Explanation: For example, in "abbaca" we could remove "bb" since
        // the letters are adjacent and equal, and this is the only possible
        // move. The result of this move is that the string is "aaca",
        // of which only "aa" is possible, so the final string is "ca".
    ],
    [
        'name' => '',
        'input' => '',
        'expected' => '',
    ],
    [
        'name' => 'a',
        'input' => 'a',
        'expected' => 'a',
    ],
    [
        'name' => 'aa',
        'input' => 'aa',
        'expected' => '',
    ],
    [
        'name' => 'aaa',
        'input' => 'aaa',
        'expected' => 'a',
    ],
    [
        'name' => 'aabbccddeeffgg',
        'input' => 'aabbccddeeffgg',
        'expected' => '',
    ],
    [
        'name' => 'aabccadda',
        'input' => 'aabccadda',
        'expected' => 'b',
    ],
    [
        'name' => 'abaca',
        'input' => 'abaca',
        'expected' => 'abaca',
    ],
    [
        'name' => 'Really Long',
        'input' => 'miepavtabopghtcivgoguhgpjhiepbofvuvggfnpjllomlvuibrnulpegacebqwswjjfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivullaqkvfkeewriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvappgpdskbcfhqjggpminhcffljiljfmcekudkjnugejfucwilfvdeaosmoppujofaurvantovgdclqcfqsssvmscbsnhogkcasckdbtiuovevsramwpcojqrkqqkukuaddidifmkdrjpfvcnmihwqudfqsrgeoleefuwmmgnvlgcugouelnjidaqggafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhoneedllcflcrboofpuckusgcfroqgdcbpwskvnndrmorekebuffpnrkhrufwijbufetfjjadjlebclwigwdcmpvdjlqqlomjtooiagsiwadswcqqsclbwosdmarbooernmrfvtnnrfokbwksjaeucdscowqfgopgwqptffioviduvwwloqlodcrtdogogtkolursittcvfuewnrsmshfadnkswtqssstkfajosstdwrwgvmhuqvkguvlqovotakwhwhsgbcvffpsthlpfpwgsscmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
        'expected' => 'miepavtabopghtcivgoguhgpjhiepbofvuvfnpjomlvuibrnulpegacebqwswfsevmnpcathldtkomiubnisfawbshbmswnjlcdocowvqhwivuaqkvfkwriauouartlhotuctwhwlvecgaolbctivbdjrsqfwacvsnpjhouvagpdskbcfhqjpminhcljiljfmcekudkjnugejfucwilfvdeaosmoujofaurvantovgdclqcfqsvmscbsnhogkcasckdbtiuovevsramwpcojqrukuaidifmkdrjpfvcnmihwqudfqsrgeolfuwgnvlgcugouelnjidaqafhmoskmdnlfirngbqhfsfcfcfiwqkunrkfcseluhoshagnlhondcflcrbfpuckusgcfroqgdcbpwskvdrmorekebupnrkhrufwijbufetfadjlebclwigwdcmpvdjomjtiagsiwadswcsclbwosdmarbernmrfvtrfokbwksjaeucdscowqfgopgwqptioviduvloqlodcrtdogogtkolursicvfuewnrsmshfadnkswtqstkfajotdwrwgvmhuqvkguvlqovotakwhwhsgbcvpsthlpfpwgcmcbgohsilwgknhwkpfdiurhtlcsahuhvmlkte',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    $name = $test['name'];
    $input = $test['input'];
    $expected = $test['expected'];
    $output = $s->removeDuplicates($input);
    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo 'Expected "', $expected, '" but got "', $output, '"';
    }
    echo '<hr>';
}
