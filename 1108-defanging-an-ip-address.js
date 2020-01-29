// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 50.52% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.replace(/\./g, '[.]');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(defangIPaddr('1.1.1.1'), '1[.]1[.]1[.]1');

strictEqual(defangIPaddr('255.100.50.0'), '255[.]100[.]50[.]0');
