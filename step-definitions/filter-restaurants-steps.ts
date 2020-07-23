import {Given,When, Then} from 'cucumber'
import HomePage from '../page-objects/home-page'
import SearchPage from '../page-objects/seach-page'
let filteredCuisine=''

Given('I have some restaurants available in my local vicinity', function () {
    HomePage.searchLocalRestaurants('RH6 8GR')
})

When('I filter them by a cuisine', function () {
    filteredCuisine=SearchPage.filterByCuisine()
})

Then('I should see relevant results', function () {
    var cuisineOpenRestaurants=SearchPage.restaurantCuisineComparison()
    console.log(cuisineOpenRestaurants)
    expect(cuisineOpenRestaurants)
})
