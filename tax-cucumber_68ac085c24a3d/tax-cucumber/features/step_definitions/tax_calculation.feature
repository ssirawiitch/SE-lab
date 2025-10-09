Feature: Personal Income Tax Calculation
  To verify the correctness of the tax calculation program
  As a user
  I want to calculate tax based on my income and deductions

  Scenario: Net income does not exceed 150,000 THB (0% rate)
    Given a gross income of 210000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 150000
    And tax should be 0

  Scenario: Net income is in the range of 150,001 - 300,000 THB (5% rate)
    Given a gross income of 360000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 300000
    And tax should be 7500

  Scenario: Net income is in the range of 300,001 - 500,000 THB (10% rate)
    Given a gross income of 560000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 500000
    And tax should be 27500

  Scenario: Net income is in the range of 500,001 - 750,000 THB (15% rate)
    Given a gross income of 810000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 750000
    And tax should be 65000

  Scenario: Net income is in the range of 750,001 - 1,000,000 THB (20% rate)
    Given a gross income of 1060000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 1000000
    And tax should be 115000

  Scenario: Net income is in the range of 1,000,001 - 2,000,000 THB (25% rate)
    Given a gross income of 2060000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 2000000
    And tax should be 365000

  Scenario: Net income is in the range of 2,000,001 - 5,000,000 THB (30% rate)
    Given a gross income of 5060000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 5000000
    And tax should be 1265000

  Scenario: Net income is in the range of 5,000,001 - 10,000,000 THB (35% rate)
    Given a gross income of 10060000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 10000000
    And tax should be 3015000

  Scenario: Net income is over 10,000,000 THB (37% rate)
    Given a gross income of 11060000
    And deductions:
      | personal | 60000 |
    When I calculate tax
    Then the taxable income should be 11000000
    And tax should be 3385000

  Scenario: Case with multiple deductions
    Given a gross income of 1000000
    And deductions:
      | personal       | 60000 |
      | parents_count  | 2     |
      | parents_per    | 30000 |
      | children_count | 1     |
      | children_per   | 30000 |
    When I calculate tax
    Then the taxable income should be 850000
    And tax should be 85000