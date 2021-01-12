// 8 kyu | Convert a Boolean to a String
// https://www.codewars.com/kata/551b4501ac0447318f0009cd

/*

Implement a function which convert the given boolean value into its string
representation.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

//func booleanToString(_ b: Bool) -> String {
//    return String(b);
//}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

//func booleanToString(_ b: Bool) -> String {
//    return b.description
//}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

func booleanToString(_ b: Bool) -> String {
    return "\(b)";
}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import XCTest

class SolutionTest: XCTestCase {

    func testExample1() {
        XCTAssertEqual(booleanToString(true), "true")
    }

    func testExample2() {
        XCTAssertEqual(booleanToString(false), "false")
    }
}

SolutionTest.defaultTestSuite.run();
