# c99 API Wrapper

This API wrapper was made for [c99.nl](https://c99.nl) and their amazing API.
You can purchase and API key from them.

## Installation

First, ensure you have Node.js installed. Then, install axios if you haven't already:

```bash
npm install axios
```

Next, save the provided `c99.js` file in your project directory.

## Usage

Here is how you can use this API wrapper in your project:

1. Import the `c99` class.
2. Instantiate the class with your API key.
3. Call the desired method and handle the response.

### Example

```javascript
const c99 = require("./c99");
const api = new c99("api-key-here");

// Example usage of getSubDomains
api.getSubDomains("google.com")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

### Available Methods

- `getSubDomains(domain)`
- `getPhoneInfo(number)`
- `getSkypeUserInfo(username)`
- `getSkypeIPInfo(ip)`
- `FirewallResolver(domain)`
- `PortScanner(ip)`
- `CheckPort(host, port)`
- `Ping(ip)`
- `HostnameResolver(ip)`
- `dnschecker(domain)`
- `HostToIP(host)`
- `IP2Domains(ip)`
- `AlexaRankChecker(url)`
- `WhoisChecker(domain)`
- `ScreenshotTool(url)`
- `GeoIP(host)`
- `WebsiteUpOrDownChecker(host)`
- `SiteReputationChecker(url)`
- `GetWebsiteHeaders(host)`
- `LinkBackup(url)`
- `URLShortener(url)`
- `RandomStringPicker(textfile)`
- `Dictionary(word)`
- `ImageReverse(url)`
- `SynonymFinder(word)`
- `EmailValidator(email)`
- `DisposableMailCheck(email)`
- `IPValidator(ip)`
- `TORChecker(ip)`
- `Translator(text, tolanguage)`
- `RandomInfoGenerator(gender)`
- `YoutubeVideoDetails(videoid)`
- `YoutubeToMP3(videoid)`
- `IPLogger(action)`
- `BitcoinBalance(address)`
- `EthereumBalance(address)`
- `CurrencyConverter(amount, from, to)`
- `CurrencyRates(source)`
- `WeatherChecker(location, unit)`
- `QRCodeGenerator(string, size)`
- `TextParser(url)`
- `ProxyDetector(ip)`
- `PasswordGenerator(length, include, customlist)`
- `RandomNumberGenerator(length, between)`
- `LicenseKeyGenerator(template, amount)`
- `EitherOr()`
- `GIFFinder(keyword)`

This updated class includes methods for all the endpoints listed on the c99.nl website. Each method follows the same pattern, making an HTTP GET request to the corresponding API endpoint and returning the response data. If you need any more endpoints added or modifications, please let me know!