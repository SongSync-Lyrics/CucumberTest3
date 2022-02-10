Feature: As a user, I would like to access the app over the internet, so that I can use the app anytime I want

  Scenario: I am a user
    Given I am a user
    When the website is up
    Then I can find it online to use

  Scenario: I am a user
    Given I am a user
    When the website is down
    Then I can't find it online to use