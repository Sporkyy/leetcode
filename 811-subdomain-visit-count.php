<?php

// 811. Subdomain Visit Count
// https://leetcode.com/problems/subdomain-visit-count/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 85.71% of PHP online submissions
// for Subdomain Visit Count.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Subdomain Visit Count.

// class Solution
// {

//     /**
//      * @param String[] $cpdomains
//      * @return String[]
//      */
//     function subdomainVisits($cpdomains)
//     {
//         $dict = [];
//         foreach ($cpdomains as $cpdomain) {
//             list($num, $hostname) = explode(' ', $cpdomain);
//             $domains = array_reverse(explode('.', $hostname));
//             $memo = '';
//             foreach ($domains as $domain) {
//                 if (0 === strlen($memo)) {
//                     $memo = $domain;
//                 } else {
//                     $memo = "{$domain}.{$memo}";
//                 }
//                 if (!array_key_exists($memo, $dict)) $dict[$memo] = 0;
//                 $dict[$memo] += $num;
//             }
//         }
//         $result = [];
//         foreach ($dict as $key => $value) {
//             $result[] = "{$value} ${key}";
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 85.71% of PHP online submissions
// for Subdomain Visit Count.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Subdomain Visit Count.

class Solution
{

    /**
     * @param String[] $cpdomains
     * @return String[]
     */
    function subdomainVisits($cpdomains)
    {
        $dict = [];
        foreach ($cpdomains as $cpdomain) {
            list($num, $hostname) = explode(' ', $cpdomain);
            $domains = array_reverse(explode('.', $hostname));
            $memo = '';
            foreach ($domains as $domain) {
                $memo = strlen($memo) ? "{$domain}.{$memo}" : $domain;
                if (!array_key_exists($memo, $dict)) $dict[$memo] = 0;
                $dict[$memo] += $num;
            }
        }
        $result = [];
        foreach ($dict as $key => $value) $result[] = "{$value} ${key}";
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [

    [
        'input' => ['9001 discuss.leetcode.com'],
        'expected' => ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'],
    ],

    [
        'input' => ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'],
        'expected' => [
            '901 mail.com',
            '50 yahoo.com',
            '900 google.mail.com',
            '5 wiki.org',
            '5 org',
            '1 intel.mail.com',
            '951 com',
        ],
    ],

];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->subdomainVisits($input);
    $name = implode(', ', $input);
    if ($result === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo  '<i>But got the below</i>';
        echo '<pre>', print_r($result, true), '</pre>';
    }
    echo '<hr>';
}
