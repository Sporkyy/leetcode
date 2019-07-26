<?php

// 575. Distribute Candies
// https://leetcode.com/problems/distribute-candies/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 320 ms, faster than 36.36% of PHP online submissions
// for Distribute Candies.
// Memory Usage: 16.2 MB, less than 100.00% of PHP online submissions
// for Distribute Candies.

// class Solution
// {

//     /**
//      * @param Integer[] $candies
//      * @return Integer
//      */
//     function distributeCandies($candies)
//     {
//         // 1. Count the total candies and cleave it in twain
//         $portionSize = count($candies) / 2;
//         // 2. Figure out how many unique candies there are
//         $dict = [];
//         foreach ($candies as $candy)
//             if (array_key_exists($candy, $dict)) $dict[$candy]++;
//             else $dict[$candy] = 1;
//         // 3. Count the unique candies
//         $uniqueCandiesCount = count($dict);
//         // 4. If the unique candies count
//         //    is greater than or equal to half the total candies count,
//         //    return the portion size (half the total candies count)
//         if ($portionSize <= $uniqueCandiesCount) return $portionSize;
//         // 5. If not, return the unique candies count
//         return $uniqueCandiesCount;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 320 ms, faster than 36.36% of PHP online submissions
// for Distribute Candies.
// Memory Usage: 16.5 MB, less than 100.00% of PHP online submissions
// for Distribute Candies.

class Solution
{

    /**
     * @param Integer[] $candies
     * @return Integer
     */
    function distributeCandies($candies)
    {
        return min(count($candies) / 2, count(array_unique($candies)));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [1, 1, 2, 2, 3, 3],
        'expected' => 3,
    ],
    [
        'input' => [1, 1, 2, 3],
        'expected' => 2,
    ],
    [
        'input' => [1, 1, 1, 1, 1, 1],
        'expected' => 1,
    ],
    [
        'input' => [1, 2, 3, 4, 5, 6],
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->distributeCandies($input);
    $name = json_encode($input);
    if ($expected === $output) {
        echo "✅ {$name}";
    } else {
        echo "🔴 {$name}";
        echo "<i>Expected <b>{$expected}</b> but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
