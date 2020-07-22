import Page from './page'


class SearchResultPage extends Page {
    get searchLocation() { return $('div.c-locationHeader.u-showAboveMid h1.c-locationHeader-title') }
}

export default new SearchResultPage()
