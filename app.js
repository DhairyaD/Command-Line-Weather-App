const geocode = require('./geocoding.js');
const forecast = require('./forecast.js');

// passed in location from command line
const location = process.argv[2]; 

// geocode(location, callback)
// destructing data object to get latitude, longtiude and location properties from it
geocode(location, (error, { latitude, longitude, location } ) => {

    // not enough args 
    if (process.argv.length < 3) {
        return console.log("Please provide a location.");
    }

    // too many args
    else if (process.argv.length > 3) {
        return console.log("Too many arguments provided.");
    }

    // actually run geocode
    else {
        if (error){
            return console.log(error);
        }

        // forecast(latitude, longitude, callback)
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            // when both requests worked
            console.log(location);
            // has the summary, temp and prob of precip
            console.log(forecastData);
        });
    }
});

