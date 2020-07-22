import Page from './page'

class SearchResultPage extends Page {
    get searchLocation() { return $('div.c-locationHeader.u-showAboveMid h1.c-locationHeader-title') }
    get openRestaurants(){return $('div[data-test-id="openrestaurants"]')}
    get restaurantsFound(){return $('div[data-test-id="openrestaurants"]').$$('section[data-test-id="restaurant"]')}
}

export default new SearchResultPage()
