const request = require('request');

var getWeather = (lat, lng, callback) => {
        request({
            url: `https://api.darksky.net/forecast/0e9b379193d7cbd15d39f1063e679147/${lat},${lng}`, // ${},${}`,
            json: true
        }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.')
        }
    });
};

module.exports.getWeather = getWeather;
