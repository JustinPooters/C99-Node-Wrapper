const api = require("../api");
const c99 = new api("api-key-here");

c99.getSubDomains("google.com")
    .then(data => {
        console.log(data);
    }
);

