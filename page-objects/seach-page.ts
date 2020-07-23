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
        const rand=Math.floor(Math.random() * noOfFilters)+1
        filters[rand].scrollIntoView()
        var randomfilterCuisine=filters[rand].$('input').getAttribute('data-filter-id')
        filters[rand].waitForDisplayed({timeout: 60000,
         timeoutMsg: `filter ${randomfilterCuisine} with html ${filters[rand].getHTML()} is not clickable after  1 min`})
        filters[rand].click()

        return randomfilterCuisine
     }

     restaurantCuisineComparison(){
            var restCuisine=this.openRestaurantsCuisine
            var cuisine=[]
            for(var i=0;i<this.openRestaurantsCuisine.length;i++){
                cuisine.push(restCuisine[i].getAttribute('data-cuisine-names'))
            }

             console.log(cuisine)
             return cuisine
     }

     changeLocationForTakeAway(){
        browser.waitUntil(()=>this.changeLocation.isClickable(),{timeout: 20000 ,timeoutMsg: 'location cant be changed after 2s'})
        this.changeLocation.click()
     }
}

export default new SearchResultPage()

