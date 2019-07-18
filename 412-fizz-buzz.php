<?php

// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 83.53% of PHP online submissions
// for Fizz Buzz.
// Memory Usage: 20.4 MB, less than 15.38% of PHP online submissions
// for Fizz Buzz.

// class Solution
// {

//     /**
//      * @param Integer $n
//      * @return String[]
//      */
//     function fizzBuzz($n)
//     {
//         $result = array_fill(1, $n, 'Fizz');
//         foreach ($result as $key => $value) {
//             if (0 == $key % 15) $result[$key] .= 'Buzz';
//             else if (0 === $key % 5) $result[$key] = 'Buzz';
//             else if (0 !== $key % 3) $result[$key] = "{$key}";
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 97.65% of PHP online submissions
// for Fizz Buzz.
// Memory Usage: 18.1 MB, less than 92.31% of PHP online submissions
// for Fizz Buzz.

// class Solution
// {

//     /**
//      * @param Integer $n
//      * @return String[]
//      */
//     function fizzBuzz($n)
//     {
//         $result = array_fill(1, $n, 'Fizz');
//         foreach ($result as $key => $value) {
//             if (0 == $key % 15) $result[$key] = 'FizzBuzz';
//             else if (0 === $key % 5) $result[$key] = 'Buzz';
//             else if (0 !== $key % 3) $result[$key] = "{$key}";
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// Memory Usage: 17.9 MB, less than 100.00% of PHP online submissions

class Solution
{

    /**
     * @param Integer $n
     * @return String[]
     */
    function fizzBuzz($n)
    {
        $result = array_fill(1, $n, 'Fizz');
        for ($i = 1; $i <= $n; $i++) {
            if (0 == $i % 15) $result[$i] = 'FizzBuzz';
            else if (0 === $i % 5) $result[$i] = 'Buzz';
            else if (0 !== $i % 3) $result[$i] = "{$i}";
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 15,
        'expected' => [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ],
    ],
    [
        'input' => 1,
        'expected' => ['1'],
    ],
    [
        'input' => 3,
        'expected' => ['1', '2', 'Fizz'],
    ],
    [
        'input' => 16,
        'expected' => [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
            '16',
        ],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->fizzBuzz($input);
    if (implode(',', $expected) == implode(',', $output)) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo 'Expected the below<br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'But got the below instead<br>';
        echo '<pre>', print_r($output, true), '</pre>';
    }
    echo '<hr>';
}
