<?php

// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param String[] $emails
//      * @return Integer
//      */
//     function numUniqueEmails($emails)
//     { }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 20 ms, faster than 62.50% of PHP online submissions
// for Unique Email Addresses.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Unique Email Addresses.

// class Solution
// {

//     /**
//      * @param String[] $emails
//      * @return Integer
//      */
//     function numUniqueEmails($emails)
//     {
//         for ($i = 0; $i < count($emails); $i++) {
//             $emails[$i] = explode('@', $emails[$i]);
//             $emails[$i][0] = explode('+', $emails[$i][0])[0];
//             $emails[$i][0] = implode(explode('.', $emails[$i][0]));
//             $emails[$i] = implode('@', $emails[$i]);
//         }
//         return count(array_count_values($emails));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 20 ms, faster than 62.50% of PHP online submissions
// for Unique Email Addresses.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Unique Email Addresses.

// class Solution
// {

//     /**
//      * @param String[] $emails
//      * @return Integer
//      */
//     function numUniqueEmails($emails)
//     {
//         for ($i = 0; $i < count($emails); $i++) {
//             $emails[$i] = explode('@', $emails[$i]);
//             $emails[$i][0] = explode('+', $emails[$i][0])[0];
//             $emails[$i][0] = implode(explode('.', $emails[$i][0]));
//             $emails[$i] = implode('@', $emails[$i]);
//         }
//         return count(array_unique($emails));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 20 ms, faster than 62.50% of PHP online submissions
// for Unique Email Addresses.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Unique Email Addresses.

class Solution
{

    /**
     * @param String[] $emails
     * @return Integer
     */
    function numUniqueEmails($emails)
    {
        for ($i = 0; $i < count($emails); $i++) {
            $emails[$i] = explode('@', $emails[$i]);
            $emails[$i][0] = explode('+', $emails[$i][0])[0];
            $emails[$i][0] = str_replace('.', '', $emails[$i][0]);
            $emails[$i] = $emails[$i][0] . '@' . $emails[$i][1];
        }
        return count(array_unique($emails));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'test.email+alex@leetcode.com',
            'test.e.mail+bob.cathy@leetcode.com',
            'testemail+david@lee.tcode.com',
        ],
        'expected' => 2,
    ],
    [
        'input' => ['test@foo.com'],
        'expected' => 1,
    ],
    [
        'input' => [
            'test@foo.com',
            'test+bar@foo.com',
            'test+bar+baz@foo.com',
            'test+bar+baz+quux@foo.com',
        ],
        'expected' => 1,
    ],
    [
        'input' => [
            'test@foo.com',
            'test.bar@foo.com',
            'test.bar.baz@foo.com',
            'test.bar.baz.quux@foo.com',
        ],
        'expected' => 4,
    ],
    [
        'input' => [
            'test@foo.com',
            'test+bar@foo.com',
            'test.bar@foo.com',
            'test+bar+baz@foo.com',
            'test.bar.baz@foo.com',
        ],
        'expected' => 3,
    ],
    [
        'input' => [
            'test@foo.com',
            'test@bar.com',
            'test@baz.com',
            'test@quux.com'
        ],
        'expected' => 4,
    ],
    [
        'input' => [
            'test@foo.com',
            'test@foo.bar.com',
            'test@foo.bar.baz.com',
            'test@foo.bar.baz.quux.com',
        ],
        'expected' => 4,
    ],
    [
        'input' => [
            'test@foo.com',
            'test@foo+bar.com',
            'test@foo+bar+baz.com',
            'test@foo+bar+baz+quux.com',
        ],
        'expected' => 4,
    ],
    [
        'input' => [
            'test@foo.com',
            'test@foo.bar.com',
            'test@foo+bar.com',
            'test@foo+bar+baz.com'
        ],
        'expected' => 4,
    ],
    [
        'input' => [
            'test@foo.com',
            'test@foo.com',
            'test@foo.com'
        ],
        'expected' => 1,
    ],
    [
        'input' => [],
        'expected' => 0,
    ],
    [
        'input' => [
            'test.email+alex@leetcode.com',
            'test.email.leet+alex@code.com'
        ],
        'expected' => 2,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->numUniqueEmails($input);
    $name = json_encode($input);
    if ($output === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b> but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
