Feature: Filter restaurants based Cuisine
  So that I can order food
  that satisfies my craving
  
  Scenario: Filter restaurants based on a cuisine I am craving
    Given I have some restaurants available in my local vicinity
    When I filter them by a cuisine
    Then I should see relevant results