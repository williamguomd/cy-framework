Feature: search hockey program
  
  Scenario: search hockey program
    Given the user has login to the homepage
    When the user click Canada then Ontario as location
    And the user hover onto Youth Activities
    And the user clicks Programs
    Then should have more than one holtes in the result page