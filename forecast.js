const request = require('request');

const forecast = (latitude, longitude, callback) => {

    // url with custom latitude and longitude
    const url = 'https://api.darksky.net/forecast/8bb0cf41cc820fbea7f5d6cdff6f6a0c/' + latitude + ',' + longitude;

    request({ url, json: true}, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services', undefined);
        }
        
        // same as response.body.error
        else if (body.error) {
            callback('Unable to find a location. Try again.', undefined)
        }

        else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + ". There is a " + body.currently.precipProbability + "% of rain.");
            
        }
    });

};

module.exports = forecast;
  