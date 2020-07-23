import {Given,When, Then} from 'cucumber'
import _contains from 'underscore'
import {assert} from 'chai'
import HomePage from '../page-objects/home-page'
import SearchPage from '../page-objects/search-page'
let filteredCuisine=''

Given('I have some restaurants available in my local vicinity', function () {
    HomePage.searchLocalRestaurants('RH6 8GR')
})

When('I filter them by a cuisine', function () {
    filteredCuisine=SearchPage.filterByCuisine()
})

Then('I should see relevant results', function () {
    var openRestaurantsCuisines=SearchPage.restaurantCuisineComparison()
    assert.isTrue(_contains.contains(openRestaurantsCuisines,filteredCuisine),`${openRestaurantsCuisines} contains ${filteredCuisine}`)
})
