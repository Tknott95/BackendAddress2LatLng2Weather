const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Error: ${error} - went wrong connecting with the google servers.`);
    } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to locate the address provided.')
    } else if (body.status === 'OK' ) {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longititude:body.results[0].geometry.location.lng
        });
        // console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(`Lat: ${body.results[0].geometry.location.lat} Lng: ${body.results[0].geometry.location.lng}`);
    }
    });
};

module.exports.geocodeAddress = geocodeAddress;