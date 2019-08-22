<?php

// 922. Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 20.00% of PHP online submissions
// for Sort Array By Parity II.
// Memory Usage: 18.2 MB, less than 100.00% of PHP online submissions
// for Sort Array By Parity II.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortArrayByParityII($A)
//     {
//         $result = array_fill(0, count($A), 0);
//         for ($i = 0, $e = 0, $o = 1; $i < count($A); $i++)
//             if ($A[$i] & 1) {
//                 $result[$o] = $A[$i];
//                 $o += 2;
//             } else {
//                 $result[$e] = $A[$i];
//                 $e += 2;
//             }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 67.74% of PHP online submissions
// for Sort Array By Parity II.
// Memory Usage: 18.4 MB, less than 100.00% of PHP online submissions
// for Sort Array By Parity II.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortArrayByParityII($A)
//     {
//         list($e, $o) = [0, 1];
//         while ($e < count($A) && $o < count($A)) {
//             if ($A[$e] & 1 && !($A[$o] & 1)) {
//                 list($A[$e], $A[$o]) = [$A[$o], $A[$e]];
//                 list($e, $o) = [$e + 2, $o + 2];
//             } else {
//                 if (!($A[$e] & 1)) $e += 2;
//                 if ($A[$o] & 1) $o += 2;
//             }
//         }
//         return $A;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.10% of PHP online submissions
// for Sort Array By Parity II.
// Memory Usage: 18.5 MB, less than 100.00% of PHP online submissions
// for Sort Array By Parity II.

class Solution
{

    /**
     * @param Integer[] $A
     * @return Integer[]
     */
    function sortArrayByParityII($A)
    {
        list($e, $o) = [0, 1];
        while ($e < count($A) && $o < count($A)) {
            if ($A[$e] & 1 && !($A[$o] & 1)) {
                $tmp = $A[$e];
                $A[$e] = $A[$o];
                $A[$o] = $tmp;
                $e += 2;
                $o += 2;
            } else {
                if (!($A[$e] & 1)) $e += 2;
                if ($A[$o] & 1) $o += 2;
            }
        }
        return $A;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [2, 3],
    ],

    [
        'input' => [1, 2],
    ],

    [
        'input' => [4, 2, 5, 7],
    ],

    [
        'input' => [4, 9, 8, 5, 7, 2],
    ],

    [
        'input' => [1, 2, 3, 3, 2, 3, 0, 4],
    ],
];

function doesKeyParityMatchValueParity($a)
{
    foreach ($a as $i => $n) if (($i & 1) !== ($n & 1)) return false;
    return true;
}

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->sortArrayByParityII($input);
    $name = json_encode($input);
    if (doesKeyParityMatchValueParity($result)) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Got the Below</i><br>';
        echo '<pre>', print_r($result, true), '</pre>';
    }
    echo '<hr>';
}
