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
class Solution
{

    /**
     * Find the two numbers that sum to the target
     * Return their indices
     *
     * @param Integer[] $nums   An array of integers
     * @param Integer   $target Number to sum to
     *
     * @return Integer[]
     */
    public function twoSum($nums, $target)
    {
        for ($i = 0; $i < count($nums); $i++) {
            // echo "\$i = {$i} = {$nums[$i]} <br>";
            for ($j = 0; $j < count($nums); $j++) {
                if ($i === $j) {
                    continue;
                }
                // echo "\$j = {$j} = {$nums[$j]} <br>";
                if ($target === $nums[$i] + $nums[$j]) {
                    return [$i, $j];
                }
            }
        }
    }
}

$tests = [
    [
        'name' => '[2, 7, 11, 15], 9',
        'input' => [
            'nums' => [2, 7, 11, 15],
            'target' => 9
        ],
        'expected' => [0, 1],
    ],
    [
        'name' => '[15, 11, 7, 2], 9',
        'input' => [
          'nums' => [15, 11, 7, 2],
          'target' => 9,
        ],
        'expected' => [2, 3],
    ],
    [
        'name' => '[2, 7], 9',
        'input' => [
            'nums' => [2, 7],
            'target' => 9,
        ],
        'expected' => [0, 1],
      ],
      [
        'name' => '[7, 2], 9',
        'input' => [
            'nums' => [7, 2],
            'target' => 9,
        ],
        'expected' => [0, 1],
    ],
    [
        'name' => '[0, 1, 2, 0], 0',
        'input' => [
          'nums' => [0, 1, 2, 0],
          'target' => 0,
        ],
        'expected' => [0, 3],
    ],
];

$solution = new Solution();

echo '<pre>';
foreach ($tests as $test) {
    $output = $solution->twoSum($test['input']['nums'], $test['input']['target']);
    // TODO: Figure out how array comparison works in PHP
    if ($test['expected'] === $output) {
        echo "✅ {$test['name']}<br>";
    } else {
        echo "🔴 {$test['name']}<br>";
        echo 'Expected the below<br>';
        print_r($test['expected']);
        echo 'But got the below instead<br>';
        print_r($output);
    }
    echo('<hr>');
}
echo '</pre>';
