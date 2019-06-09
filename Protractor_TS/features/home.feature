Feature: Validate the calculator app
    Check the element name on the home page

    @calculator
    Scenario Outline: Calculate the add functionality testing
        Given Landing on the home page
        When I enter the number '<first>' and '<second>'
        And Click on the submit button
        Then This '<result>' is the total number

    # Scenario: Calculate the add functionality testing
    #    Given Landing on the home page
    #    When I enter the number '8' and '7'
    #    And Click on the submit button
    #    Then The result is a total number

Examples:
| first | second |  result  |
| 3     | 6      |  8       |
| 8     | 8      |  16      |