Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  I want to be able to find restaurants in my area

Scenario: Search for restaurants in an area
  Given I want food in "AR51 1AA"
  When I search for restaurants
  Then I should see some restaurants in "AR51 1AA"

  Scenario: Edit search on search results page
    Given I search for takeways around "RH6 8GR"
    When I change location for my search
    Then I land on the home page
  
