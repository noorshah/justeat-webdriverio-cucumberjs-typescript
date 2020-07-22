import Page from './page'

class HomePage extends Page {
    
    get postCodeSearchBox () { return $('input[data-test-id="address-box-input"]') }
    get submitSearch(){return $('button[data-test-id=find-restaurants-button]')}
    

    open () {
        return super.open('')
    }

}

export default new HomePage()
