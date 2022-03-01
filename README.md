# Information
This API wrapper was made for [c99.nl](https://c99.nl) and their amazing API.
You can purchase and API key from them.

# Setup

Copy api.js to your project.
to include it in your project you need to have the axios node package.

to install this run `npm i axios --save` in your terminal.
you can also do `npm run install` if you clone the project

you can include the api file and its functions with `const api = require("./api");`

In a file called `config.json` add the variable `apikey`

like so:

```json
{
    "apikey": "api_key"
}
```
and replace `api_key` with your actual api key from [c99](https://c99.nl)

you can then call api functions with commands like

```js

api.getSubDomains("https://google.com")
    .then(data => {
        console.log(data);
    })
```

or 

```js
api.getPhoneInfo(31612345678)
    .then(data => {
        console.log(data);
    })
```

All api calls are async, therefor they can be used in an async function.