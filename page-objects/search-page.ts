import Page from './page'

class SearchResultPage extends Page {
    
    get searchLocation() { return $('div.c-locationHeader.u-showAboveMid h1.c-locationHeader-title') }
    get openRestaurants(){return $('div[data-test-id="openrestaurants"]')}
    get restaurantsFound(){return $('div[data-test-id="openrestaurants"]').$$('section[data-test-id="restaurant"]')}
    get cuisineFilters(){return $$('div[data-test-id="all-cuisines-sidebar"] span[data-test-id=filter_cuisine]')}
    get openRestaurantsCuisine(){return $$('p[data-test-id="restaurant-cuisines"]')}
    get viewMoreCuisineFilters(){return $('button[data-test-id="view_more"]')}
    get changeLocation(){return $("(//*[contains(@class, 'c-locationHeader-link') and text() = 'change location'])[1]")}
    get searchForDishes(){ return $('input[data-test-id="unified-input-box"]')}


    filterByCuisine(){
        var filters= this.cuisineFilters 
        var noOfFilters=this.cuisineFilters.length
        if(noOfFilters>10){noOfFilters=5}
        const rand=Math.floor(Math.random() * noOfFilters)
        var randomfilterCuisine=filters[rand].$('label a').getText().toLowerCase()
        filters[rand].waitForDisplayed({timeout: 60000,
         timeoutMsg: `filter ${randomfilterCuisine} with html ${filters[rand].getHTML()} is not clickable after  6s`})
        filters[rand].click()

        return randomfilterCuisine
     }

     restaurantCuisineComparison(){
         var restCuisine=this.openRestaurantsCuisine
         var cuisine=restCuisine.map(food => food.getAttribute('data-cuisine-names').toLowerCase().split(','))
         return cuisine[0]
     
     }

     changeLocationForTakeAway(){
        browser.waitUntil(()=>this.changeLocation.isClickable(),{timeout: 50000 ,timeoutMsg: 'location cant be changed after 3s'})
        this.changeLocation.click()
     }
}

export default new SearchResultPage()

