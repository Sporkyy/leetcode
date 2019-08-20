<?php

// 884. Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param String $A
//      * @param String $B
//      * @return String[]
//      */
//     function uncommonFromSentences($A, $B)
//     { }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Uncommon Words from Two Sentences.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Uncommon Words from Two Sentences.

// class Solution
// {

//     /**
//      * @param String $A
//      * @param String $B
//      * @return String[]
//      */
//     function uncommonFromSentences($A, $B)
//     {
//         $A = explode(' ', $A);
//         $B = explode(' ', $B);
//         $words = [];
//         foreach ($A as $word) {
//             if (array_key_exists($word, $words)) $words[$word]++;
//             else $words[$word] = 1;
//         }
//         foreach ($B as $word) {
//             if (array_key_exists($word, $words)) $words[$word]++;
//             else $words[$word] = 1;
//         }
//         // echo '<pre>', print_r($words, true), '</pre>';
//         $words = array_filter($words, function ($instances) {
//             return 1 === $instances;
//         });
//         // echo '<pre>', print_r($words), true, '</pre>';
//         // echo '<pre>', print_r(array_keys($words), true), '</pre>';
//         return array_keys($words);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Uncommon Words from Two Sentences.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Uncommon Words from Two Sentences.

class Solution
{

    /**
     * @param String $A
     * @param String $B
     * @return String[]
     */
    function uncommonFromSentences($A, $B)
    {
        return array_keys(
            array_filter(
                array_count_values(
                    array_merge(explode(' ', $A), explode(' ', $B))
                ),
                function ($instances) {
                    return 1 === $instances;
                }
            )
        );
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'A' => 'this apple is sweet',
            'B' => 'this apple is sour',
        ],
        'expected' => ['sweet', 'sour'],
    ],

    [
        'input' => [
            'A' => 'apple apple',
            'B' => 'banana',
        ],
        'expected' => ['banana'],
    ],

    [
        'input' => [
            'A' => 'fd kss fd',
            'B' => 'fd fd kss',
        ],
        'expected' => [],
    ],

    [
        'input' => [
            'A' => 'd b zu d t',
            'B' => 'udb zu ap',
        ],
        'expected' => ['b', 't', 'udb', 'ap'],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    // echo '<pre>', print_r($expected, true), '</pre>';
    extract($input);
    $result = $s->uncommonFromSentences($A, $B);
    // echo '<pre>', print_r($result, true), '</pre>';
    $stringifiedExpected = json_encode($expected);
    $stringifiedresult = json_encode($result);
    $name = json_encode($input);
    sort($result);
    sort($expected);
    if ($result === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$stringifiedExpected}</b></i><br>";
        echo "<i>But got <b>{$stringifiedresult}</b></i><br>";
    }
    echo '<hr>';
}
