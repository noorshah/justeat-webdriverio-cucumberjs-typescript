import {Given,When, Then} from 'cucumber'
import HomePage from '../page-objects/home-page'
import SearchPage from '../page-objects/seach-page'


Given('I want food in {string}', function (postcode) {
  HomePage.open()
  HomePage.postCodeSearchBox.setValue(postcode)
})

When('I search for restaurants', function () {
  HomePage.submitSearch.click()
})


Then('I should see some restaurants in {string}', function (postcode) {
    expect(SearchPage.searchLocation).toHaveTextContaining(postcode)
})
