<?php

// 682. Baseball Game
// https://leetcode.com/problems/baseball-game/

// Integer (one round's score):
//   Directly represents the number of points you get in this round.
//
// + (one round's score):
//   Represents that the points you get in this round are the sum of
//   the last two valid round's points.
//
// D (one round's score):
//   Represents that the points you get in this round are the
//   doubled data of the last valid round's points.
//
// C (an operation, which isn't a round's score)
//   Represents the last valid round's points you get were invalid
//   and should be removed.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 71.43% of PHP online submissions
// for Baseball Game.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Baseball Game.

// class Solution
// {

//     /**
//      * @param String[] $ops
//      * @return Integer
//      */
//     function calPoints($ops)
//     {

//         $rounds = [];
//         foreach ($ops as $op) {
//             switch ($op) {
//                 case 'C':
//                     array_pop($rounds);
//                     break;
//                 case 'D':
//                     array_push($rounds, 2 * $rounds[count($rounds) - 1]);
//                     break;
//                 case '+':
//                     array_push($rounds, $rounds[count($rounds) - 1] + $rounds[count($rounds) - 2]);
//                     break;
//                 default:
//                     array_push($rounds, intval($op, 10));
//                     break;
//             }
//         }

//         return array_sum($rounds);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 71.43% of PHP online submissions
// for Baseball Game.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Baseball Game.

class Solution
{

    /**
     * @param String[] $ops
     * @return Integer
     */
    function calPoints($ops)
    {
        $result = 0;
        for ($i = 0, $nest = []; $i < count($ops); $i++) {
            $score = 0;
            switch ($ops[$i]) {
                case 'C':
                    $result -= array_pop($nest);
                    continue 2;
                case 'D':
                    $score = 2 * $nest[count($nest) - 1];
                    break;
                case '+':
                    $score = $nest[count($nest) - 1] + $nest[count($nest) - 2];
                    break;
                default:
                    $score = intval($ops[$i]);
                    break;
            }
            $result += $score;
            array_push($nest, $score);
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['5', '2', 'C', 'D', '+'],
        'expected' => 30,
    ],

    [
        'input' => ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
        'expected' => 27,
    ],

    [
        'input' => ['36', '28', '70', '65', 'C', '+', '33', '-46', '84', 'C'],
        'expected' => 219,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->calPoints($input);
    $name = implode(', ', $input);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected <b>{$expected}</b>, but got <b>{$result}</b><br>";
    }
    echo '<hr>';
}
