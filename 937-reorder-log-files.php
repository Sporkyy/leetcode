<?php

// 937. Reorder Log Files
// https://leetcode.com/problems/reorder-log-files/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 50.00% of PHP online submissions
// for Reorder Log Files.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Reorder Log Files.

// class Solution
// {

//     /**
//      * @param String[] $logs
//      * @return String[]
//      */
//     function reorderLogFiles($logs)
//     {
//         $letterLogs = [];
//         $digitLogs = [];

//         foreach ($logs as $log) {
//             $firstSpaceIndex = strpos($log, ' ');
//             if (is_numeric(substr($log, $firstSpaceIndex + 1, 1))) {
//                 $digitLogs[] = $log;
//             } else {
//                 $letterLogs[] = [
//                     'original' => $log,
//                     'sortable' => substr($log, $firstSpaceIndex + 1) .
//                         substr($log, 0, $firstSpaceIndex),
//                 ];
//             }
//         }

//         usort($letterLogs, function ($a, $b) {
//             return strcmp($a['sortable'], $b['sortable']);
//         });

//         return array_merge(
//             array_map(function ($a) {
//                 return $a['original'];
//             }, $letterLogs),
//             $digitLogs
//         );
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 50.00% of PHP online submissions
// for Reorder Log Files.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Reorder Log Files.

class Solution
{

    function isLetterLog($log)
    {
        return 71 < ord(substr($log, strpos($log, ' ') + 1, 1));
    }

    function sortLetterLogs($a, $b)
    {
        list($aPos, $bPos) = [strpos($a, ' '), strpos($b, ' ')];
        $cmpResult = strcmp(substr($a, $aPos + 1), substr($b, $bPos + 1));
        if (0 !== $cmpResult) return $cmpResult;
        return strcmp(substr($a, 0, $aPos), substr($b, 0, $bPos));
    }

    /**
     * @param String[] $logs
     * @return String[]
     */
    function reorderLogFiles($logs)
    {
        $letterLogs = [];
        $digitLogs = [];

        foreach ($logs as $log)
            if ($this->isLetterLog($log)) $letterLogs[] = $log;
            else $digitLogs[] = $log;

        usort($letterLogs, [$this, 'sortLetterLogs']);

        return array_merge($letterLogs, $digitLogs);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'a1 9 2 3 1',
            'g1 act car',
            'zo4 4 7',
            'ab1 off key dog',
            'a8 act zoo'
        ],
        'expected' => [
            'g1 act car',
            'a8 act zoo',
            'ab1 off key dog',
            'a1 9 2 3 1',
            'zo4 4 7'
        ],
    ],

    [
        'input' => [
            'a1 9 2 3 1',
            'g1 act car',
            'zo4 4 7',
            'ab1 off key dog',
            'a8 act zoo',
            'a2 act car'
        ],
        'expected' => [
            'a2 act car',
            'g1 act car',
            'a8 act zoo',
            'ab1 off key dog',
            'a1 9 2 3 1',
            'zo4 4 7',
        ],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->reorderLogFiles($input);
    $name = json_encode($input);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i><br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo '<i>But got the below</i><br>';
        echo '<pre>', print_r($result, true), '</pre>';
    }
    echo '<hr>';
}
