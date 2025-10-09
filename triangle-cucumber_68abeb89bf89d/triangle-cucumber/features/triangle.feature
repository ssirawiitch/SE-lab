Feature: Triangle Type Checker

  Scenario Outline: Determine triangle type
    Given the triangle has sides <a>, <b>, and <c>
    When I check the triangle type
    Then the result should be "<type>"

    Examples:
      | a  | b | c | type        |
      |  3 | 3 | 3 | Equilateral |
      |  5 | 5 | 3 | Isosceles   |
      |  4 | 5 | 6 | Scalene     |
      |  1 | 2 | 3 | Invalid     |
      |  0 | 5 | 5 | Invalid     |
      | -1 | 2 | 2 | Invalid     |
