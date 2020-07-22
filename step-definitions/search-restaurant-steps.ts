import {Given,When, Then} from 'cucumber'
import HomePage from '../pageobjects/home.page'


Given('I want food in {string}', function (string) {
  HomePage.open()
})

When('I search for restaurants', function () {

})


Then('I should see some restaurants in {string}', function (string) {
    
})
