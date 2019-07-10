<?php

// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 312 ms, faster than 100.00% of PHP online submissions
// for Find the Town Judge.
// Memory Usage: 28.4 MB, less than 50.00% of PHP online submissions
// for Find the Town Judge.

class Solution
{

    /**
     * @param Integer $N
     * @param Integer[][] $trust
     * @return Integer
     */
    function findJudge($N, $trust)
    {
        $a = array_fill(1, $N, 0);
        foreach ($trust as $t) {
            $a[$t[0]]++;
            $a[$t[1]]--;
        }
        for ($i = 1; $i <= $N; $i++) if (-$N + 1 === $a[$i]) return $i;
        return -1;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'N' => 2,
            'trust' => [[1, 2]],
        ],
        'expected' => 2,
    ],

    [
        'input' => [
            'N' => 3,
            'trust' => [[1, 3], [2, 3]],
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'N' => 3,
            'trust' => [[1, 3], [2, 3], [3, 1]],
        ],
        'expected' => -1,
    ],

    [
        'input' => [
            'N' => 3,
            'trust' => [[1, 2], [2, 3]],
        ],
        'expected' => -1,
    ],

    [
        'input' => [
            'N' => 4,
            'trust' => [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]],
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'N' => 4,
            'trust' => [[1, 2], [1, 3], [2, 1], [2, 3], [1, 4], [4, 3], [4, 1]],
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'N' => 1,
            'trust' => [],
        ],
        'expected' => 1,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->findJudge($N, $trust);
    $name = "{$N} [" . recursive_implode($trust, ',') . ']';
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b><br></i>";
    }
}

/**
 * Recursively implodes an array with optional key inclusion
 *
 * Example of $include_keys output: key, value, key, value, key, value
 *
 * @access  public
 * @param   array   $array         multi-dimensional array to recursively implode
 * @param   string  $glue          value that glues elements together
 * @param   bool    $include_keys  include keys before their values
 * @param   bool    $trim_all      trim ALL whitespace from string
 * @return  string  imploded array
 */
function recursive_implode(array $array, $glue = ',', $include_keys = false, $trim_all = true)
{
    $glued_string = '';
    // Recursively iterates array and adds key/value to glued string
    array_walk_recursive($array, function ($value, $key) use ($glue, $include_keys, &$glued_string) {
        $include_keys and $glued_string .= $key . $glue;
        $glued_string .= $value . $glue;
    });
    // Removes last $glue from string
    strlen($glue) > 0 and $glued_string = substr($glued_string, 0, -strlen($glue));
    // Trim ALL whitespace
    $trim_all and $glued_string = preg_replace("/(\s)/ixsm", '', $glued_string);
    return (string) $glued_string;
}
