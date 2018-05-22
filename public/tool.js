const request = require('request');

const tool = {
  requestPromise: function(httpMethod, url, postBody) {
    return new Promise(function (resolve, reject) {
      let options = {
        url: url,
        method: httpMethod,
        json: true,
        headers: { "content-type": "application/json" },
        body: postBody
      };
      request(options, function (err, httpResponse, body) {
        if(err) {
          reject(err);
        }
        resolve(body);
      });
    })
  }
}

module.exports = tool;