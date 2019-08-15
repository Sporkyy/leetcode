<?php

// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 57.41% of PHP online submissions
// for N-Repeated Element in Size 2N Array.
// Memory Usage: 16.2 MB, less than 100.00% of PHP online submissions
// for N-Repeated Element in Size 2N Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer
//      */
//     function repeatedNTimes($A)
//     {
//         for ($i = 0; $i < count($A); $i += 4) {
//             list($a, $b, $c, $d) = [$A[$i], $A[$i + 1], $A[$i + 2], $A[$i + 3]];
//             if ($a === $b) return $a;
//             if ($a === $c) return $a;
//             if ($a === $d) return $a;
//             if ($b === $c) return $b;
//             if ($b === $d) return $b;
//             if ($c === $d) return $c;
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 81.48% of PHP online submissions
// for N-Repeated Element in Size 2N Array.
// Memory Usage: 16.2 MB, less than 100.00% of PHP online submissions
// for N-Repeated Element in Size 2N Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer
//      */
//     function repeatedNTimes($A)
//     {
//         for ($i = 0; $i < count($A); $i += 4) {
//             $a = $A[$i];
//             $b = $A[$i + 1];
//             if ($a === $b) return $a;
//             if (array_key_exists($i + 2, $A)) {
//                 $c = $A[$i + 2];
//                 $d = $A[$i + 3];
//                 if ($a === $c) return $a;
//                 if ($a === $d) return $a;
//                 if ($b === $c) return $b;
//                 if ($b === $d) return $b;
//                 if ($c === $d) return $c;
//             }
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 81.48% of PHP online submissions
// for N-Repeated Element in Size 2N Array.
// Memory Usage: 16.2 MB, less than 100.00% of PHP online submissions
// for N-Repeated Element in Size 2N Array.

class Solution
{

    /**
     * @param Integer[] $A
     * @return Integer
     */
    function repeatedNTimes($A)
    {
        for ($i = 0; $i < count($A); $i += 4) {
            list($a, $b) = [$A[$i], $A[$i + 1]];
            if ($a === $b) return $a;
            if ($i < count($A) - 2) {
                list($c, $d) = [$A[$i + 2], $A[$i + 3]];
                if ($a === $c) return $a;
                if ($a === $d) return $a;
                if ($b === $c) return $b;
                if ($b === $d) return $b;
                if ($c === $d) return $c;
            }
        }
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [1, 2, 3, 3],
        'expected' => 3,
    ],

    [
        'input' => [2, 1, 2, 5, 3, 2],
        'expected' => 2,
    ],

    [
        'input' => [5, 1, 5, 2, 5, 3, 5, 4],
        'expected' => 5,
    ],

    [
        'input' => [1, 3, 5, 2, 2, 2],
        'expected' => 2,
    ],

    [
        'input' => [0, 0, 0, 0, 8, 0, 2, 3, 0, 1, 7, 6, 0, 4, 9, 0],
        'expected' => 0,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->repeatedNTimes($input);
    $name = json_encode($input);
    if ($result === $expected) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo "<i>Expected <b>${expected}</b> but got <b>${result}</b></i><br>";
    }
    echo '<hr>';
}
