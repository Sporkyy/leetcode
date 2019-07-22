<?php

// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 100.00% of PHP online submissions
// for Next Greater Element I.
// Memory Usage: 15.3 MB, less than 100.00% of PHP online submissions
// for Next Greater Element I.

class Solution
{

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function nextGreaterElement($nums1, $nums2)
    {
        $result = array_fill(0, count($nums1), -1);
        for ($i = 0; $i < count($nums1); $i++) {
            for ($j = 0, $ffwd = true; $j < count($nums2); $j++) {
                if (!$ffwd && $nums1[$i] < $nums2[$j]) {
                    $result[$i] = $nums2[$j];
                    break;
                } else if ($nums1[$i] === $nums2[$j]) {
                    $ffwd = false;
                }
            }
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'nums1' => [4, 1, 2],
            'nums2' => [1, 3, 4, 2],
        ],
        'expected' => [-1, 3, -1],
    ],
    [
        'input' => [
            'nums1' => [2, 4],
            'nums2' => [1, 2, 3, 4],
        ],
        'expected' => [3, -1],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->nextGreaterElement($nums1, $nums2);
    $name = json_encode($nums1) . ' ' . json_encode($nums2);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo 'Expected the below<br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'But got the below instead<br>';
        echo '<pre>', print_r($output, true), '</pre>';
    }
}
