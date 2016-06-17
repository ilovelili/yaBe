// First, make a string format helper
// sample usage: '{0}, {1}'.format('Hello', 'World');
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

// api url template
var requestUrltemplates = {
    // http://developer.ebay.com/Devzone/finding/Concepts/MakingACall.html
    // success pattern
    /*
    http://svcs.ebay.com/services/search/FindingService/v1
    ?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords
    &SERVICE-VERSION=1.12.0&SECURITY-APPNAME=MinJu-Test-PRD-55a615465-af72bd2f
    &RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=[newton,lagrange]
     */

    // omit SSL just for convenience
    // response content type set to JSON
    findItemsByKeywordsTemplate: `
        http://svcs.ebay.com/services/search/FindingService/v1
        ?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords
        &SERVICE-VERSION=1.12.0&SECURITY-APPNAME=MinJu-Test-PRD-55a615465-af72bd2f
        &RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=[{0}]
    `,
};

exports.buildFindItemsRequest =  function (keywords) {
    return requestUrltemplates.findItemsByKeywordsTemplate.format(keywords);    
};