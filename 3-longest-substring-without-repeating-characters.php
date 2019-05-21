<?php
/**
 * PHP version 7.2
 *
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @category LeetCode
 * @package  LeetCode_Problems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy/leetcode
 */

/**
 * Solution
 *
 * Runtime: 12 ms, faster than 100.00% of PHP online submissions
 * Memory Usage: 15 MB, less than 63.04% of PHP online submissions
 *
 * @category LeetCode
 * @package  LeetCode_Problems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy/leetcode
 */
class Solution
{

    /**
     * Find the length of the longest substring without repeating characters
     *
     * @param String $s The string to examine
     *
     * @return Integer
     */
    function lengthOfLongestSubstring($s)
    {
        $len = strlen($s);
        if ($len < 2) {
            return $len;
        }

        $sub = $s[0];
        $result = 1;

        for ($i = 1; $i < $len; $i++) {
            $char = $s[$i];
            // echo '$char = ', $char, '<br>';
            $pos = strpos($sub, $char);
            // echo '$pos: ', $pos, '<br>';
            $sub .= $char;
            // echo 'before: ', $sub, '<br>';
            if (false !== $pos) {
                $sub = substr($sub, $pos + 1);
            }
            // echo 'after: ', $sub, '<br>';
            $subLen = strlen($sub);
            if ($result < $subLen) {
                $result = $subLen;
            }
            // echo '<hr>';
        }

        // echo $sub, '<br>';

        return $result;
    }
}

$tests = [
    [
        'name' => 'abcabcbb',
        'input' => "abcabcbb",
        'expected' => 3
        // Explanation: The answer is "abc", with the length of 3.
    ],
    [
        'name' => 'bbbbb',
        'input' => "bbbbb",
        'expected' => 1
        // Explanation: The answer is "b", with the length of 1.
    ],
    [
        'name' => 'pwwkew',
        'input' => "pwwkew",
        'expected' => 3
        // Explanation: The answer is "wke", with the length of 3.
    ],
    [
        'name' => 'blank',
        'input' => '',
        'expected' => 0,
    ],
    [
        'name' => 'au',
        'input' => 'au',
        'expected' => 2,
    ],
    [
        'name' => 'dvdf',
        'input' => 'dvdf',
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->lengthOfLongestSubstring($input);
    if ($expected === $output) {
        echo "✅ $name<br>";
    } else {
        echo "🔴 $name<br>";
        echo "Expected \"{$expected}\" but got \"{$output}\" instead<br>";
    }
    echo "<hr>";
}
