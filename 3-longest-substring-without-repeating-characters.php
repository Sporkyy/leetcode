<?php
/**
 * PHP version 7.2
 */


class Solution
{

    /**
     * @param String $s The string to examine
     *
     * @return Integer
     */
    function lengthOfLongestSubstring($s)
    {
        echo $s, '<br>';
        $map = [];
        for ($i = 0; $i < strlen($s); $i++) {
            echo $s[$i], '<br>';
        }
    }
}

$tests = [
    [
        'name' => 'Example 1',
        'input' => "abcabcbb",
        'expected' => 3
        // Explanation: The answer is "abc", with the length of 3.
    ],
    [
        'name' => 'Example 2',
        'input' => "bbbbb",
        'expected' => 1
        // Explanation: The answer is "b", with the length of 1.
    ],
    [
        'name' => 'Example 3',
        'input' => "pwwkew",
        'expected' => 3
        // Explanation: The answer is "wke", with the length of 3.
    ],
];

$solution = new Solution();

foreach ($tests as $test) {
    $name = $test['name'];
    $input = $test['input'];
    $expected = $test['expected'];
    $output = $solution->lengthOfLongestSubstring($input);
    if ($expected === $output) {
        echo "✅ $name<br>";
    } else {
        echo "🔴 $name<br>";
        echo "Expected \"$expected\" but got \"$output\" instead<br>";
        echo "<hr>";
    }
}
