<?php

// 942. DI String Match
// https://leetcode.com/problems/di-string-match/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for DI String Match.
// Memory Usage: 16 MB, less than 100.00% of PHP online submissions
// for DI String Match.

class Solution
{

    /**
     * @param String $S
     * @return Integer[]
     */
    function diStringMatch($S)
    {
        $result = [];
        for (list($i, $u, $d) = [0, 0, strlen($S)]; $i <= strlen($S); $i++)
            $result[$i] = strlen($S) === $i ? $u : 'I' === $S[$i] ? $u++ : $d--;
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    'IDID', // [0,4,1,3,2]
    'III', // [0,1,2,3]
    'DDI', // [3,2,0,1]
    'IDD', // [0,3,2,1]
];

function diStringMatchCheck($s, $a)
{
    for ($i = 0; $i < strlen($s); $i++) {
        if ($a[$i] < 0 || $a[$i + 1] < 0) return false;
        if (strlen($s) < $a[$i] || strlen($s) < $a[$i + 1]) return false;
        if ('D' === $s[$i] && $a[$i] < $a[$i + 1]) return false;
        else if ('I' === $s[$i] && $a[$i + 1] < $a[$i]) return false;
    }
    return $a === array_unique($a);
};

$s = new Solution();

foreach ($tests as $input) {
    $name = json_encode($input);
    $result = $s->diStringMatch($input);
    $stringifiedResult = json_encode($result);
    if (diStringMatchCheck($input, $result)) {
        echo "✅ {$name} {$stringifiedResult}<br>";
    } else {
        echo "🔴 {$name} {$stringifiedResult}<br>";
    }
    echo '<hr>';
}
