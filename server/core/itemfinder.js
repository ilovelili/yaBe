var request = require('request'),
    requestbuilder = require('../utils/requestbuilder');

exports.findItemsByKeywords = function (req, res) {
    var keywords = req.params.keywords;
    if (!keywords) return null;

    var requestUrl = requestbuilder.buildFindItemsRequest(keywords);

    request
        .get(requestUrl)
        .on('error', function (err) {
            console.log(err);
        })
        .on('response', function (response) {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);            
        });
};