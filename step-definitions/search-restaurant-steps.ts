import {Given,When, Then} from 'cucumber'
import HomePage from '../page-objects/home-page'
import SearchPage from '../page-objects/search-page'
import { baseURL } from '../support/environment';


Given('I want food in {string}', function (postcode) {
  HomePage.open()
  HomePage.postCodeSearchBox.clearValue()
  HomePage.postCodeSearchBox.setValue(postcode)
})

When('I search for restaurants', function () {
  HomePage.submitSearch.click()
})


Then('I should see some restaurants in {string}', function (postcode) {
  expect(SearchPage.searchLocation).toHaveTextContaining(postcode)
  expect(SearchPage.restaurantsFound).toBeElementsArrayOfSize({ gte: 1 })
})


Given('I search for takeways around {string}', function (postcode) {
  HomePage.searchLocalRestaurants(postcode)
})

When('I change location for my search', function () {
  SearchPage.changeLocationForTakeAway()
})

Then('I land on the home page', function () {
  browser.waitUntil(()=>browser.getUrl()==`${baseURL}`,{timeout: 10000,timeoutMsg:'not landed on home page after 10s'})
  expect(browser.getUrl()).toEqual(`${baseURL}`)
})