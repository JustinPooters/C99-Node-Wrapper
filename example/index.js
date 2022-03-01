const api = require("../api");

//Log data in array format
api.getSubDomains("google.com")
    .then(data => {
        data.subdomains.forEach(subdomain => {
            console.log(subdomain);
        })
    });

// Log data with forEach();
api.getSubDomains("google.com")
    .then(data => {
        data.subdomains.forEach(subdomain => {
            console.log(subdomain);
        })
    });

// Get information on the phone number 31612345678
api.getPhoneInfo("31612345678")
    .then(data => {
        console.log(data);
    });