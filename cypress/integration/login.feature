Feature: login to the homepage
  
  Scenario: login to CoolHockey homepage
    Given the user has navigated to CoolHockey website homepage
    When the user enters username and password
    And the user clicks submit button
    Then the user name should be presented on the screen