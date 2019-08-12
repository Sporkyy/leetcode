<?php

// 985. Sum of Even Numbers After Queries
// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 284 ms, faster than 20.00% of PHP online submissions
// for Sum of Even Numbers After Queries.
// Memory Usage: 28.7 MB, less than 100.00% of PHP online submissions
// for Sum of Even Numbers After Queries.

// class Solution
// {

//     function isEven($n)
//     {
//         return 0 === $n % 2;
//     }

//     /**
//      * @param Integer[] $A
//      * @param Integer[][] $queries
//      * @return Integer[]
//      */
//     function sumEvenAfterQueries($A, $queries)
//     {
//         $acc = array_reduce($A, function ($acc, $curr) {
//             return $this->isEven($curr) ? $acc + $curr : $acc;
//         }, 0);
//         return array_map(function ($a) use (&$A, &$acc) {
//             list($addend, $index) = $a;
//             list($oldValue, $newValue) = [$A[$index], $A[$index] + $addend];
//             $A[$index] = $newValue;
//             list($wasEven, $isNowEven) = [$this->isEven($oldValue), $this->isEven($newValue)];
//             if ($wasEven && $isNowEven) $acc += $newValue - $oldValue;
//             else if ($wasEven && !$isNowEven) $acc -= $oldValue;
//             else if ($isNowEven) $acc += $newValue;
//             return $acc;
//         }, $queries);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 336 ms, faster than 20.00% of PHP online submissions
// for Sum of Even Numbers After Queries.
// Memory Usage: 28.6 MB, less than 100.00% of PHP online submissions
// for Sum of Even Numbers After Queries.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer[][] $queries
//      * @return Integer[]
//      */
//     function sumEvenAfterQueries($A, $queries)
//     {
//         $acc = array_reduce($A, function ($acc, $curr) {
//             return 0 === $curr % 2 ? $acc + $curr : $acc;
//         }, 0);
//         return array_map(function ($a) use (&$A, &$acc) {
//             list($addend, $index) = $a;
//             list($oldValue, $newValue) = [$A[$index], $A[$index] + $addend];
//             $A[$index] = $newValue;
//             list($wasEven, $isNowEven) = [0 === $oldValue % 2, 0 === $newValue % 2];
//             if ($wasEven && $isNowEven) $acc += $newValue - $oldValue;
//             else if ($wasEven && !$isNowEven) $acc -= $oldValue;
//             else if ($isNowEven) $acc += $newValue;
//             return $acc;
//         }, $queries);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 212 ms, faster than 60.00% of PHP online submissions
// for Sum of Even Numbers After Queries.
// Memory Usage: 29 MB, less than 100.00% of PHP online submissions
// for Sum of Even Numbers After Queries.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer[][] $queries
//      * @return Integer[]
//      */
//     function sumEvenAfterQueries($A, $queries)
//     {
//         $cumSum = 0;
//         foreach ($A as $num) if (0 === $num % 2) $cumSum += $num;
//         for ($i = 0; $i < count($queries); $i++) {
//             list($addend, $index) = $queries[$i];
//             $oldValue = $A[$index];
//             $newValue = $oldValue + $addend;
//             if (!($oldValue & 1)) $cumSum -= $oldValue;
//             if (!($newValue & 1)) $cumSum += $newValue;
//             $A[$index] = $newValue;
//             $queries[$i] = $cumSum;
//         }
//         return $queries;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 252 ms, faster than 20.00% of PHP online submissions
// for Sum of Even Numbers After Queries.
// Memory Usage: 29.1 MB, less than 100.00% of PHP online submissions
// for Sum of Even Numbers After Queries.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer[][] $queries
//      * @return Integer[]
//      */
//     function sumEvenAfterQueries($A, $queries)
//     {
//         $cumSum = 0;
//         foreach ($A as $num) if (!($num & 1)) $cumSum += $num;
//         for ($i = 0; $i < count($queries); $i++) {
//             list($addend, $index) = $queries[$i];
//             $oldValue = $A[$index];
//             $newValue = $oldValue + $addend;
//             if (!($oldValue & 1)) $cumSum -= $oldValue;
//             if (!($newValue & 1)) $cumSum += $newValue;
//             $A[$index] = $newValue;
//             $queries[$i] = $cumSum;
//         }
//         return $queries;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 224 ms, faster than 60.00% of PHP online submissions
// for Sum of Even Numbers After Queries.
// Memory Usage: 28.6 MB, less than 100.00% of PHP online submissions
// for Sum of Even Numbers After Queries.

class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function sumEvenAfterQueries($A, $queries)
    {
        $cumSum = array_reduce($A, function ($acc, $curr) {
            return !($curr & 1) ? $acc + $curr : $acc;
        }, 0);
        return array_map(function ($query) use (&$A, &$cumSum) {
            list($addend, $index) = $query;
            $oldValue = $A[$index];
            $newValue = $oldValue + $addend;
            if (!($oldValue & 1)) $cumSum -= $oldValue;
            if (!($newValue & 1)) $cumSum += $newValue;
            $A[$index] = $newValue;
            return $cumSum;
        }, $queries);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'A' => [1, 2, 3, 4],
            'queries' => [[1, 0], [-3, 1], [-4, 0], [2, 3]],
        ],
        'expected' => [8, 6, 2, 4],
    ],

    [
        'input' => [
            'A' => [1],
            'queries' => [[4, 0]],
        ],
        'expected' => [0],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $result = $s->sumEvenAfterQueries($A, $queries);
    $name = 'A = ' . json_encode($A) . ', queries = ' . json_encode($queries);
    if ($expected === $result) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo '<i>Expected the below</i><br>';
        echo '<b>', json_encode($expected), '</b><br>';
        echo '<i>But got the below</i><br>';
        echo '<b>', json_encode($result), '</b><br>';
    }
    echo '<hr>';
};
