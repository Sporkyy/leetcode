<?php
/**
 * PHP version 7.2
 *
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * @category ProfessionalDevelopment
 * @package  LeetcodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC https://opensource.org/licenses/ISC
 * @link     https://github.com/Sporkyy/leetcode
 */

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * Runtime: 36 ms, faster than 98.35% of PHP online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 15.1 MB, less than 50.00% of PHP online submissions for Median of Two Sorted Arrays.
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * @category ProfessionalDevelopment
 * @package  LeetcodeProblems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC https://opensource.org/licenses/ISC
 * @link     https://github.com/Sporkyy/leetcode
 */
class Solution
{

    /**
     * Find the median of the two sorted arrays.
     *
     * @param Integer[] $nums1 The first sorted array of numbers
     * @param Integer[] $nums2 The second sorted array of numbers
     *
     * @return Float
     */
    public function findMedianSortedArrays($nums1, $nums2)
    {
        $len1 = count($nums1);
        $len2 = count($nums2);

        // Ensure $nums2 is shorter
        if ($len1 < $len2) {
            return $this->findMedianSortedArrays($nums2, $nums1);
        }

        $lo = 0;
        $hi = $len2 * 2;

        while ($lo <= $hi) {
            $mid2 = intdiv($lo + $hi, 2); // Try Cut 2
            $mid1 = $len1 + $len2 - $mid2; // Calculate Cut 1 accordingly

            // Get $l1, $r1, $l2, $r2
            $l1 = ($mid1 == 0) ? -INF : $nums1[intdiv($mid1 - 1, 2)];
            $l2 = ($mid2 == 0) ? -INF : $nums2[intdiv($mid2 - 1, 2)];
            $r1 = ($mid1 == $len1 * 2) ? INF : $nums1[intdiv($mid1, 2)];
            $r2 = ($mid2 == $len2 * 2) ? INF : $nums2[intdiv($mid2, 2)];

            // $l1's lower half is too big; need to move $mid1 left ($mid2 right)
            if ($l1 > $r2) {
                $lo = $mid2 + 1;
            }
            // $l2's lower half too big; need to move $mid2 left
            else if ($l2 > $r1) {
                $hi = $mid2 - 1;
            }
            // Otherwise, that's the right cut
            else {
                return (max($l1, $l2) + min($r1, $r2)) / 2;
            }
        }
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => '[1, 3] & [2]',
        'input' => [
            'nums1' => [1, 3],
            'nums2' => [2],
        ],
        'expected' => 2,
        // Explanation: The median is 2.0
    ],
    [
        'name' => '[1, 2] & [3, 4]',
        'input' => [
            'nums1' => [1, 2],
            'nums2' => [3, 4],
        ],
        'expected' => 2.5,
        // Explanation: The median is (2 + 3) / 2 = 2.5
    ],
    [
        'name' => '[1, 2] & []',
        'input' => [
            'nums1' => [1, 2],
            'nums2' => [],
        ],
        'expected' => 1.5,
    ],
    [
        'name' => '[3] & [-2, -1]',
        'input' => [
            'nums1' => [3],
            'nums2' => [-2, -1],
        ],
        'expected' => -1,
    ],
];

$solution = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $solution->findMedianSortedArrays($nums1, $nums2);

    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo 'Expected "', $expected, '" but got "', $output, '" instead<br>';
    }
    echo '<hr>';
}
