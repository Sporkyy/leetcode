<?php

// 1013. Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 100.00% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 21.8 MB, less than 27.78% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Boolean
//      */
//     function canThreePartsEqualSum($A)
//     {
//         $total = array_reduce($A, function ($arr, $curr) {
//             return $arr + $curr;
//         }, 0);
//         if (0 !== $total % 3) return false;
//         $target = $total / 3;
//         list($sum, $count, $pos) = [0, 0, -1];
//         while ($pos < count($A) - 1) {
//             $sum += $A[++$pos];
//             if ($target === $sum) list($sum, $count) = [0, $count + 1];
//         }
//         return 3 === $count;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 90.48% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 21.7 MB, less than 38.89% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.

// class Solution
// {
//     /**
//      * @param Integer[] $A
//      * @return Boolean
//      */
//     function canThreePartsEqualSum($A)
//     {
//         $target = array_sum($A) / 3;
//         $sum = 0;
//         for ($i = 0; $i < count($A); $i++) {
//             $sum += $A[$i];
//             if ($target === $sum) $sum = 0;
//         }
//         return 0 === $sum;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 128 ms, faster than 61.90% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 21.7 MB, less than 44.44% of PHP online submissions
// for Partition Array Into Three Parts With Equal Sum.

class Solution
{
    /**
     * @param Integer[] $A
     * @return Boolean
     */
    function canThreePartsEqualSum($A)
    {
        $target = array_sum($A) / 3;
        list($left, $right) = [0, count($A) - 1];
        list($lsum, $rsum) = [$A[$left], $A[$right]];
        $i = -1;
        while ($left < $right && $i++ < count($A) - 1) {
            if ($target !== $lsum) $lsum += $A[++$left];
            if ($target !== $rsum) $rsum += $A[--$right];
        }
        return $left < $right;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$s = new Solution();

$tests = [
    [
        'input' => [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
        'expected' => true,
    ],
    // [0 + 2 + 1] = 3
    // [-6 + 6 - 7 + 9 + 1] = 3
    // [2 + 0 + 1] = 3
    [
        'input' => [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
        'expected' => false,
    ],
    [
        'input' => [3, 3, 6, 5, -2, 2, 5, 1, -9, 4],
        'expected' => true,
    ],
    // [3 + 3] = 6
    // [6] = 6
    // [5 - 2 + 2 + 5 + 1 - 9 + 4] = 6
    [
        'input' => [3, 3, 6, 5, -2, 2, 5, 1, -9, 3],
        'expected' => false,
    ],
    [
        'input' => [3, 3],
        'expected' => false,
    ],
    [
        'input' => [18, 12, -18, 18, -19, -1, 10, 10],
        'expected' => true,
    ],
    // [18, 12, -18, 18, -19, -1] = 10
    // [10] = 10
    // [10] = 10
    [
        'input' => [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
        'expected' => false,
    ],
    [
        'input' => [14, 6, -10, 2, 18, -7, -4, 11],
        'expected' => false
    ]
];

foreach ($tests as $test) {
    extract($test);
    $output = $s->canThreePartsEqualSum($input);
    if ($expected === $output) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
