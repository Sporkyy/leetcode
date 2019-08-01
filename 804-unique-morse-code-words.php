<?php

// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 84.21% of PHP online submissions
// for Unique Morse Code Words.
// Memory Usage: 14.8 MB, less than 68.75% of PHP online submissions
// for Unique Morse Code Words.

// class Solution
// {

//     /**
//      * @param String[] $words
//      * @return Integer
//      */
//     function uniqueMorseRepresentations($words)
//     {
//         $codes = [
//             97 => '.-',
//             98 => '-...',
//             99 => '-.-.',
//             100 => '-..',
//             101 => '.',
//             102 => '..-.',
//             103 => '--.',
//             104 => '....',
//             105 => '..',
//             106 => '.---',
//             107 => '-.-',
//             108 => '.-..',
//             109 => '--',
//             110 => '-.',
//             111 => '---',
//             112 => '.--.',
//             113 => '--.-',
//             114 => '.-.',
//             115 => '...',
//             116 => '-',
//             117 => '..-',
//             118 => '...-',
//             119 => '.--',
//             120 => '-..-',
//             121 => '-.--',
//             122 => '--..',
//         ];
//         $m = [];
//         for ($i = 0, $w = ''; $i < count($words); $m[$w] = 0, $w = '', $i++)
//             for ($j = 0; $j < strlen($words[$i]); $j++)
//                 $w .= $codes[ord($words[$i][$j])];
//         return count(array_values($m));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 100.00% of PHP online submissions
// for Unique Morse Code Words.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Unique Morse Code Words.

class Solution
{

    /**
     * @param String[] $words
     * @return Integer
     */
    function uniqueMorseRepresentations($words)
    {
        $codes = [
            97 => '.-',
            98 => '-...',
            99 => '-.-.',
            100 => '-..',
            101 => '.',
            102 => '..-.',
            103 => '--.',
            104 => '....',
            105 => '..',
            106 => '.---',
            107 => '-.-',
            108 => '.-..',
            109 => '--',
            110 => '-.',
            111 => '---',
            112 => '.--.',
            113 => '--.-',
            114 => '.-.',
            115 => '...',
            116 => '-',
            117 => '..-',
            118 => '...-',
            119 => '.--',
            120 => '-..-',
            121 => '-.--',
            122 => '--..',
        ];
        $m = array_fill(0, count($words), '');
        for ($i = 0; $i < count($words); $i++)
            for ($j = 0; $j < strlen($words[$i]); $j++)
                $m[$i] .= $codes[ord($words[$i][$j])];
        return count(array_flip($m));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['gin', 'zen', 'gig', 'msg'],
        'expected' => 2,
    ],

    [
        'input' => [],
        'expected' => 0,
    ],

    [
        'input' => ['xyzzy'],
        'expected' => 1,
    ],

    [
        'input' => ['larry', 'moe', 'curly'],
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->uniqueMorseRepresentations($input);
    $name = json_encode($input);
    if ($expected === $result) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo "Expected ${expected} but got ${result}<br>";
    }
    echo '<hr>';
}
