<?php

// 657. Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 24 ms, faster than 65.57% of PHP online submissions
// for Robot Return to Origin.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Robot Return to Origin.

// class Solution
// {

//     /**
//      * @param String $moves
//      * @return Boolean
//      */
//     function judgeCircle($moves)
//     {
//         $n = 0;
//         for ($i = strlen($moves); 0 < $i; $i--) {
//             switch ($moves[$i - 1]) {
//                 case 'U':
//                     $n++;
//                     $n++;
//                     break;
//                 case 'D':
//                     $n--;
//                     $n--;
//                     break;
//                 case 'R':
//                     $n++;
//                     break;
//                 case 'L':
//                     $n--;
//                     break;
//             }
//         }
//         return 0 === $n;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 85.25% of PHP online submissions
// for Robot Return to Origin.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Robot Return to Origin.

// class Solution
// {

//     /**
//      * @param String $moves
//      * @return Boolean
//      */
//     function judgeCircle($moves)
//     {
//         $n = 0;
//         for ($i = strlen($moves) - 1; 0 <= $i; $i--) {
//             switch ($moves[$i]) {
//                 case 'U':
//                     $n += 2;
//                     break;
//                 case 'D':
//                     $n -= 2;
//                     break;
//                 case 'R':
//                     $n++;
//                     break;
//                 case 'L':
//                     $n--;
//                     break;
//             }
//         }
//         return 0 === $n;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 86.89% of PHP online submissions
// for Robot Return to Origin.
// Memory Usage: 16.4 MB, less than 7.14% of PHP online submissions
// for Robot Return to Origin.

// class Solution
// {

//     /**
//      * @param String $moves
//      * @return Boolean
//      */
//     function judgeCircle($moves)
//     {
//         $len = strlen($moves);
//         if (0 === $len) return true;
//         if (1 === $len % 2) return false;
//         $d = [
//             'DD' => -4,
//             'DL' => -3,
//             'LD' => -3,
//             'LL' => -2,
//             'RD' => -1,
//             'DR' => -1,
//             'UD' => 0,
//             'DU' => 0,
//             'RL' => 0,
//             'LR' => 0,
//             'UL' => 1,
//             'LU' => 1,
//             'RR' => 2,
//             'UR' => 3,
//             'RU' => 3,
//             'UU' => 4,
//         ];
//         $n = 0;
//         for ($i = 0, $j = $len / 2; $j < $len; $i++, $j++) $n += $d[$moves[$i] . $moves[$j]];
//         return 0 === $n;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 86.89% of PHP online submissions
// for Robot Return to Origin.
// Memory Usage: 16.4 MB, less than 7.14% of PHP online submissions
// for Robot Return to Origin.

// class Solution
// {

//     /**
//      * @param String $moves
//      * @return Boolean
//      */
//     function judgeCircle($moves)
//     {
//         return strlen(str_replace('D', '', $moves)) === strlen(str_replace('U', '', $moves))
//             && strlen(str_replace('L', '', $moves)) === strlen(str_replace('R', '', $moves));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 98.36% of PHP online submissions
// for Robot Return to Origin.
// Memory Usage: 16.5 MB, less than 7.14% of PHP online submissions
// for Robot Return to Origin.

class Solution
{

    /**
     * @param String $moves
     * @return Boolean
     */
    function judgeCircle($moves)
    {
        return substr_count($moves, 'U') === substr_count($moves, 'D')
            && substr_count($moves, 'R') === substr_count($moves, 'L');
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 'UD',
        'expected' => true
    ],
    [
        'input' => 'LL',
        'expected' => false
    ],
    [
        'input' => 'LDRRUULLDR',
        'expected' => true
    ],
    [
        'input' => '',
        'expected' => true
    ],
    [
        'input' => 'U',
        'expected' => false
    ],
    [
        'input' => 'LDRRLRUULR',
        'expected' => false
    ],
    [
        'input' => 'RLUURDDDLU',
        'expected' => true
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->judgeCircle($input);
    if ($expected === $output) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
