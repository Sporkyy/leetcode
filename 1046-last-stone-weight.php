<?php

// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 50.00% of PHP online submissions
// for Last Stone Weight.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Last Stone Weight.

// class Solution
// {

//     /**
//      * @param Integer[] $stones
//      * @return Integer
//      */
//     function lastStoneWeight($stones)
//     {
//         $count = count($stones);
//         while (1 < $count) {
//             sort($stones, SORT_NUMERIC);
//             $stones[--$count - 1] = array_pop($stones) - $stones[$count - 1];
//         }
//         return max($stones);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Last Stone Weight.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Last Stone Weight.

// class Solution
// {

//     /**
//      * @param Integer[] $stones
//      * @return Integer
//      */
//     function lastStoneWeight($stones)
//     {
//         while (1 < count($stones)) {
//             rsort($stones, SORT_NUMERIC);
//             if ($stones[0] === $stones[1]) {
//                 $stones = array_slice($stones, 2, count($stones));
//             } else if ($stones[0] < $stones[1]) {
//                 $stones[0] = $stones[1] - array_shift($stones);
//             } else {
//                 $stones[0] = array_shift($stones) - $stones[0];
//             }
//         }
//         return $stones[0] ?? 0;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Last Stone Weight.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Last Stone Weight.

// class Solution
// {

//     /**
//      * @param Integer[] $stones
//      * @return Integer
//      */
//     function lastStoneWeight($stones)
//     {
//         while (1 < count($stones)) {
//             rsort($stones, SORT_NUMERIC);
//             $stones[0] = $stones[0] - $stones[1];
//             unset($stones[1]);
//         }
//         return max($stones);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Last Stone Weight.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Last Stone Weight.

// class Solution
// {

//     /**
//      * @param Integer[] $stones
//      * @return Integer
//      */
//     function lastStoneWeight($stones)
//     {
//         while (1 < count($stones)) {
//             rsort($stones, SORT_NUMERIC);
//             $outcome = array_shift($stones) - array_shift($stones);
//             if (0 < $outcome) array_push($stones, $outcome);
//         }
//         return $stones[0] ?? 0;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Last Stone Weight.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Last Stone Weight.

class Solution
{

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeight($stones)
    {
        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_DATA);
        foreach ($stones as $stone) $pq->insert($stone, $stone);
        while (1 < $pq->count()) {
            $outcome = $pq->extract() - $pq->extract();
            if (0 < $outcome) $pq->insert($outcome, $outcome);
        }
        return $pq->current() ?? 0;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => '2, 7, 4, 1, 8, 1',
        'input' => [2, 7, 4, 1, 8, 1],
        'expected' => 1,
        // Explanation:
        // We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
        // we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
        // we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
        // we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
    ],
    [
        'name' => '1',
        'input' => [1],
        'expected' => 1,
    ],
    [
        'name' => '1, 1',
        'input' => [1, 1],
        'expected' => 0,
    ],
    [
        'name' => '1, 2',
        'input' => [1, 2],
        'expected' => 1,
    ],
    [
        'name' => '1, 3',
        'input' => [1, 3],
        'expected' => 2,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);

    $output = $s->lastStoneWeight($input);

    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo 'Expected "', $expected, '", but got "', $output, '"', '<br>';
    }

    echo '<hr>';
}
