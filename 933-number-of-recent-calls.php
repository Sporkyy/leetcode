<?php

// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class RecentCounter
// {
//     /**
//      */
//     function __construct()
//     { }

//     /**
//      * @param Integer $t
//      * @return Integer
//      */
//     function ping($t)
//     { }
// }

/**
 * Your RecentCounter object will be instantiated and called as such:
 * $obj = RecentCounter();
 * $ret_1 = $obj->ping($t);
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// class RecentCounter
// {
//     private $pings = [];

//     /**
//      */
//     function __construct()
//     { }

//     /**
//      * @param Integer $t
//      * @return Integer
//      */
//     function ping($t)
//     {
//         array_push($this->pings, $t);
//         $length = count(array_filter($this->pings, function ($ping) use ($t) {
//             return null !== $ping && $t - 3000 <= $ping;
//         }));
//         return 0 === $length ? null : $length;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 440 ms, faster than 33.33% of PHP online submissions
// for Number of Recent Calls.
// Memory Usage: 26.1 MB, less than 100.00% of PHP online submissions
// for Number of Recent Calls.

class RecentCounter
{
    private $pings = [];

    /**
     */
    function __construct()
    { }

    /**
     * @param Integer $t
     * @return Integer
     */
    function ping($t)
    {
        // echo "t = {$t}<br>";
        // echo '<pre>', print_r($this->pings), '</pre>';
        if (null !== $t) {
            array_push($this->pings, $t);
        }
        // echo '<pre>', print_r($this->pings), '</pre>';
        $min = $t - 3000;
        // echo 'min = ', $min, '<br>';
        $offset = 0;
        // for ($i = 0; $i < count($this->pings); $i++) {
        //     if ($min < $this->pings[$i]) break;
        //     $offset++;
        // }
        if (0 < count($this->pings)) {
            while (array_key_exists($offset, $this->pings) && $this->pings[$offset] < $min) $offset++;
            // echo 'pings = ', json_encode($this->pings), '<br>';
            // echo 'offset = ', $offset, '<br>';
            $this->pings = array_slice($this->pings, $offset);
        }
        $length = count($this->pings);
        // echo '<hr>';
        return 0 === $length ? null : $length;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'pings' => ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
            'times' => [null, 1, 100, 3001, 3002],
        ],
        'expected' => [null, 1, 2, 3, 3],
    ],

    [
        'input' => [
            'pings' => ['RecentCounter', 'ping', 'ping', 'ping', 'ping', 'ping'],
            'times' => [null, 642, 1849, 4921, 5936, 5957],
        ],
        'expected' => [null, 1, 2, 1, 2, 3],
    ],
];

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $result = [];
    for ($i = 0; $i < count($pings); $i++) {
        $ping = $pings[$i];
        // echo $ping, '<br>';
        $time = $times[$i];
        // echo $time, '<br>';
        if ('RecentCounter' === $ping) {
            $rc = new RecentCounter();
        }
        array_push($result, $rc->ping($time));
    }

    // echo '<pre>', print_r($result, true), '</pre>';

    $stringifiedTimes = json_encode($times);
    $stringifiedPings = json_encode($pings);
    $name = "pings = {$stringifiedPings}, times = {$stringifiedTimes}";

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
