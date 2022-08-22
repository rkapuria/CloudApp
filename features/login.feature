Feature: User is able to login to CA

  Scenario: As a user I can log into CA
    Given I am on the Home page
    And I navigate to Login Page
    When I login with valid username and password
    Then I see user session

  Scenario: As a user I can log out of CA
    When I logout from CA
    Then I see user session logged out