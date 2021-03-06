<?php

/**
 * PHP version 7.2
 *
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * @category ProfessionalDevelopment
 * @package  LeetCodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Given an array of integers, return indices of the two
 * numbers such thatthey add up to a specific target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Runtime: 2872 ms, faster than 5.48% of PHP online submissions for Two Sum.
 * Memory Usage: 15.6 MB, less than 94.34% of PHP online submissions for Two Sum.
 *
 * @category ProfessionalDevelopment
 * @package  LeetCodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */
// class Solution
// {
//     /**
//      * Find the two numbers that sum to the target
//      * Return their indices
//      *
//      * @param Integer[] $nums   An array of integers
//      * @param Integer   $target Number to sum to
//      *
//      * @return Integer[]
//      */
//     public function twoSum($nums, $target)
//     {
//         for ($i = 0; $i < count($nums); $i++) {
//             // echo "\$i = {$i} = {$nums[$i]} <br>";
//             for ($j = 0; $j < count($nums); $j++) {
//                 if ($i === $j) {
//                     continue;
//                 }
//                 // echo "\$j = {$j} = {$nums[$j]} <br>";
//                 if ($target === $nums[$i] + $nums[$j]) {
//                     return [$i, $j];
//                 }
//             }
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Given an array of integers, return indices of the two
 * numbers such thatthey add up to a specific target.
 *
 * Runtime: 20 ms, faster than 83.86% of PHP online submissions for Two Sum.
 * Memory Usage: 16.1 MB, less than 16.04% of PHP online submissions for Two Sum.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * @category ProfessionalDevelopment
 * @package  LeetCodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */
// class Solution
// {
//     /**
//      * Find the two numbers that sum to the target
//      * Return their indices
//      *
//      * @param Integer[] $nums   An array of integers
//      * @param Integer   $target Number to sum to
//      *
//      * @return Integer[]
//      */
//     public function twoSum($nums, $target)
//     {
//         $indicies = [];
//         for ($i = 0; $i < count($nums); $i++) {
//             $indicies[$nums[$i]] = $i;
//         }
//         // print_r($indicies);
//         for ($i = 0; $i < count($nums); $i++) {
//             $num2 = $target - $nums[$i];
//             // print("\$num2 = $num2<br>");
//             $i2 = $indicies[$num2] ?? null;
//             // print("\$i2 = $i2");
//             if (! is_null($i2) && $i !== $i2) {
//                 return [$i, $i2];
//             }
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 24 ms, faster than 79.25% of PHP online submissions
// for Two Sum.
// emory Usage: 16.5 MB, less than 5.19% of PHP online submissions
// for Two Sum.

/**
 * Given an array of integers, return indices of the two
 * numbers such thatthey add up to a specific target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * @category ProfessionalDevelopment
 * @package  LeetCodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */
// class Solution
// {
//     /**
//      * Find the two numbers that sum to the target
//      * Return their indices
//      *
//      * @param Integer[] $nums   An array of integers
//      * @param Integer   $target Number to sum to
//      *
//      * @return Integer[]
//      */
//     public function twoSum($nums, $target)
//     {
//         $numsFlipped = array_flip($nums);
//         foreach ($nums as $index1 => $num1) {
//             $num2 = $target - $num1;
//             $index2 = $numsFlipped[$num2] ?? null;
//             if (!is_null($index2) && $index1 !== $index2) {
//                 return [$index1, $index2];
//             }
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 93.96% of PHP online submissions
// for Two Sum.
// Memory Usage: 16 MB, less than 9.68% of PHP online submissions
// for Two Sum.

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target)
    {
        $dict = [];
        for ($i = 0; $i < count($nums); $i++) {
            $need = $target - $nums[$i];
            if (array_key_exists($need, $dict)) return [$dict[$need], $i];
            $dict[$nums[$i]] = $i;
        }
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'nums' => [2, 7, 11, 15],
            'target' => 9
        ],
        'expected' => [0, 1],
    ],
    [
        'input' => [
            'nums' => [15, 11, 7, 2],
            'target' => 9,
        ],
        'expected' => [2, 3],
    ],
    [
        'input' => [
            'nums' => [2, 7],
            'target' => 9,
        ],
        'expected' => [0, 1],
    ],
    [
        'input' => [
            'nums' => [7, 2],
            'target' => 9,
        ],
        'expected' => [0, 1],
    ],
    [
        'input' => [
            'nums' => [0, 1, 2, 0],
            'target' => 0,
        ],
        'expected' => [0, 3],
    ],
    [
        'input' => [
            'nums' => [3, 2, 4],
            'target' => 6,
        ],
        'expected' => [1, 2],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $name = json_encode('nums=' . json_encode($nums) . 'target=' . json_encode($target));
    $output = $s->twoSum($nums, $target);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo 'Expected the below<br>';
        print_r($expected);
        echo 'But got the below instead<br>';
        print_r($output);
    }
    echo '<hr>';
}
