<?php

// 893. Groups of Special-Equivalent Strings
// https://leetcode.com/problems/groups-of-special-equivalent-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param String[] $A
//      * @return Integer
//      */
//     function numSpecialEquivGroups($A)
//     {
//         for ($i = 0; $i < count($A); $i++) {
//             $evens = [];
//             $odds = [];
//             for ($j = 0; $j < strlen($A[$i]); $j++)
//                 if ($j & 1) $odds[] = $A[$i][$j];
//                 else $evens[] = $A[$i][$j];
//             for ($j = 0; $j < count($evens); $j++) {

//             }
//         }
//         // for ($j = 97; $j <= 122; $j++) {

//         // }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param String[] $A
//      * @return Integer
//      */
//     function numSpecialEquivGroups($A)
//     {
//         // $normalized = array_map(function ($a) {
//         //     // echo ord($a), '<br>';
//         //     $vessel = 0;
//         //     $vessel |= 1 << ord($a) - 97;
//         //     echo decbin($vessel), '<br>';
//         // }, $A);
//         // $normalized = array_map(function ($a) {
//         //     $eo = str_repeat('0', strlen($a));
//         //     for ($i = 0, $j = floor(strlen($a) / 2); $i < $j; $i++, $j--) {
//         //         $eo[$i]
//         //     }
//         // }, $A);
//         // $normalized = array_map(function ($a) {
//         //     for ($i = 0, $up = 0, $down = intval(strlen($a) / 2) - 1; $i < strlen($a); $i++) {
//         //         if ($i & 1) {
//         //             echo $a[$i + $down], '<br>';
//         //             $down--;
//         //         } else {
//         //             echo $a[$i - $up], '<br>';
//         //             $up++;
//         //         }
//         //         // echo $a[$i], '<br>';
//         //         // $evens |= 1 << ord($a[$i]) - 97;
//         //         // echo $a[strlen($a) - $i - 1], '<br>';
//         //         // $odds |= 1 << ord($a[strlen($a) - $i - 1]) - 97;
//         //     }
//         //     echo '<hr>';
//         //     // echo bindec($evens), '<br>';
//         //     // echo bindec($odds), '<br>';
//         // }, $A);
//         $normalized = array_map(function ($a) {
//             $sorted = array_fill(0, 56, 0);
//             for ($i = 0; $i < strlen($a); $i++)
//                 if ($i & 1) $sorted[26 + (ord($a[$i]) - 97)]++;
//                 else $sorted[ord($a[$i]) - 97]++;
//             // echo json_encode($sorted), '<br>';
//             // echo '<hr>';
//             return implode($sorted);
//         }, $A);

//         echo '<pre>', print_r($normalized), '</pre>';

//         return count(array_unique($normalized));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Groups of Special-Equivalent Strings.
// Memory Usage: 15.3 MB, less than 100.00% of PHP online submissions
// for Groups of Special-Equivalent Strings.

class Solution
{

    /**
     * @param String[] $A
     * @return Integer
     */
    function numSpecialEquivGroups($A)
    {
        return count(array_unique(array_map(function ($a) {
            $sorted = array_fill(97, 56, 0);
            for ($i = 0; $i < strlen($a); $i++)
                if ($i & 1) $sorted[ord($a[$i]) + 26]++;
                else $sorted[ord($a[$i])]++;
            return implode($sorted);
        }, $A)));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 0 | 0 | 0 - 0
// 1 | 2 | 1 + 1
// 2 | 1 | 2 - 1

// 0 | 0 | 0 - 0
// 1 | 2 | 1 + 1
// 2 | 1 | 2 - 1
// 3 | 3 | 3 + 0

// 0 | 0 | 0 - 0
// 1 | 3 | 1 + 2
// 2 | 1 | 2 - 1
// 3 | 4 | 3 + 1
// 4 | 2 | 4 - 2

// 0 | 0 | 0 - 0
// 1 | 3 | 1 + 2
// 2 | 1 | 2 - 1
// 3 | 4 | 3 + 1
// 4 | 2 | 4 - 2
// 5 | 5 | 5 + 0

$tests = [
    [
        'input' => ['a', 'b', 'c', 'a', 'c', 'c'],
        'expected' => 3,
    ],

    [
        'input' => ['aa', 'bb', 'ab', 'ba'],
        'expected' => 4,
    ],

    [
        'input' => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
        'expected' => 3,
    ],

    [
        'input' => ['abcd', 'cdab', 'adcb', 'cbad'],
        'expected' => 1,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->numSpecialEquivGroups($input);
    $name = json_encode($input);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
