Feature: User is able to login to CA

  Scenario: As a user, I can signup to CA
    Given I am on the Home page
    And I navigate to Signup Page
    When I signup with valid username and password
    Then I see user session

  Scenario: As a user, I can change my avatar
    Given I navigate to settings page
    Then I upload a new avatar
