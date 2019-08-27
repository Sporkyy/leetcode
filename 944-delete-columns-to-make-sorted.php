<?php

// 944. Delete Columns to Make Sorted
// https://leetcode.com/problems/delete-columns-to-make-sorted/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param String[] $A
//      * @return Integer
//      */
//     function minDeletionSize($A)
//     { }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 100.00% of PHP online submissions
// for Delete Columns to Make Sorted.
// Memory Usage: 16.1 MB, less than 100.00% of PHP online submissions
// for Delete Columns to Make Sorted.

class Solution
{

    /**
     * @param String[] $A
     * @return Integer
     */
    function minDeletionSize($A)
    {
        $result = 0;
        for ($i = 0; $i < strlen($A[0]); $i++) {
            for ($j = 0; $j < count($A) - 1; $j++) {
                if ($A[$j + 1][$i] < $A[$j][$i]) {
                    $result++;
                    continue 2;
                }
            }
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['cba', 'daf', 'ghi'],
        'expected' => 1
    ],

    [
        'input' => ['a', 'b'],
        'expected' => 0
    ],

    [
        'input' => ['zyx', 'wvu', 'tsr'],
        'expected' => 3
    ],

    [
        'input' => ['abcdef', 'abcdef', 'abcdef'],
        'expected' => 0
    ],

    [
        'input' => ['rrjk', 'furt', 'guzm'],
        'expected' => 2
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = json_encode($input);
    $result = $s->minDeletionSize($input);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
