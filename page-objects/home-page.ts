import Page from './page'

class HomePage extends Page {
    
    get postCodeSearchBox () { return $('input[data-test-id="address-box-input"]') }
    get submitSearch(){return $('button[data-test-id=find-restaurants-button]')}

    open () {
        return super.open('')
    }

    searchLocalRestaurants(postcode: string){
        this.open()
        browser.refresh()
        this.postCodeSearchBox.setValue(postcode)
        this.submitSearch.click()
       
    }

    

}

export default new HomePage()
