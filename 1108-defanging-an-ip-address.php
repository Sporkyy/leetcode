<?php

// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Solution
{

    /**
     * @param String $address
     * @return String
     */
    function defangIPaddr($address)
    {
        return str_replace('.', '[.]', $address);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => '1.1.1.1',
        'expected' => '1[.]1[.]1[.]1',
    ],
    [
        'input' => '255.100.50.0',
        'expected' => '255[.]100[.]50[.]0',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->defangIPaddr($input);
    if ($expected === $output) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "Expected <b>{$expected}</b>, but got <b>${output}</b><br>";
    }
    echo '<hr>';
}
