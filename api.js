const axios = require("axios");

class c99 {
    constructor(apikey) {
        this.key = apikey;
    }

    async getSubDomains(subdomain) {
        let response = await axios.get(`https://api.c99.nl/subdomainfinder`, {
            params: {
                key: this.key,
                domain: subdomain,
                json: true
            }
        });

        return response.data;
    }

    async getPhoneInfo(number) {
        let response = await axios.get(`https://api.c99.nl/phonelookup`, {
            params: {
                key: this.key,
                number: number,
                json: true
            }
        });

        return response.data;
    }

    async getSkypeUserInfo(username) {
        let response = await axios.get(`https://api.c99.nl/skyperesolver`, {
            params: {
                key: this.key,
                username: username,
                json: true
            }
        });

        return response.data;
    }

    async getSkypeIPInfo(ip) { // Changed parameter name to 'ip'
        let response = await axios.get(`https://api.c99.nl/ip2skype`, {
            params: {
                key: this.key,
                ip: ip,
                json: true
            }
        });

        return response.data;
    }

    async FirewallResolver(domain) {
        let response = await axios.get('https://api.c99.nl/firewalldetector', {
            params: {
                key: this.key,
                url: domain,
                json: true
            }
        });

        return response.data;
    }

    async PortScanner(ip) {
        let response = await axios.get('https://api.c99.nl/portscanner', {
            params: {
                key: this.key,
                host: ip,
                json: true
            }
        });

        return response.data;
    }

    async CheckPort(host, port) {
        let response = await axios.get('https://api.c99.nl/portscanner', {
            params: {
                key: this.key,
                host: host,
                port: port,
                json: true
            }
        });

        return response.data;
    }

    async Ping(ip) {
        let response = await axios.get('https://api.c99.nl/ping', {
            params: {
                key: this.key,
                host: ip,
                json: true
            }
        });

        return response.data;
    }

    async HostnameResolver(ip) {
        let response = await axios.get('https://api.c99.nl/gethostname', {
            params: {
                key: this.key,
                host: ip,
                json: true
            }
        });

        return response.data;
    }

    async dnschecker(domain) {
        let response = await axios.get('https://api.c99.nl/dnschecker', {
            params: {
                key: this.key,
                url: domain,
                json: true
            }
        });

        return response.data;
    }

    async HostToIP(host) {
        let response = await axios.get('https://api.c99.nl/dnsresolver', {
            params: {
                key: this.key,
                host: host,
                server: 'US',
                json: true
            }
        });

        return response.data;
    }

    async IPToDomains(ip) {
        let response = await axios.get('https://api.c99.nl/ip2domains', {
            params: {
                key: this.key,
                ip: ip,
                json: true
            }
        });

        return response.data;
    }

    async AlexaRank(url) {
        let response = await axios.get('https://api.c99.nl/alexarank', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async WhoisChecker(domain) {
        let response = await axios.get('https://api.c99.nl/whois', {
            params: {
                key: this.key,
                domain: domain,
                json: true
            }
        });

        return response.data;
    }

    async ScreenshotTool(url) {
        let response = await axios.get('https://api.c99.nl/createscreenshot', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async GeoIP(host) {
        let response = await axios.get('https://api.c99.nl/geoip', {
            params: {
                key: this.key,
                host: host,
                json: true
            }
        });

        return response.data;
    }

    async WebsiteUpOrDownChecker(host) {
        let response = await axios.get('https://api.c99.nl/upordown', {
            params: {
                key: this.key,
                host: host,
                json: true
            }
        });

        return response.data;
    }

    async SiteReputationChecker(url) {
        let response = await axios.get('https://api.c99.nl/reputationchecker', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async GetWebsiteHeaders(host) {
        let response = await axios.get('https://api.c99.nl/getheaders', {
            params: {
                key: this.key,
                host: host,
                json: true
            }
        });

        return response.data;
    }

    async LinkBackup(url) {
        let response = await axios.get('https://api.c99.nl/linkbackup', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async URLShortener(url) {
        let response = await axios.get('https://api.c99.nl/urlshortener', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async RandomStringPicker(textfile) {
        let response = await axios.get('https://api.c99.nl/randomstringpicker', {
            params: {
                key: this.key,
                textfile: textfile,
                json: true
            }
        });

        return response.data;
    }

    async Dictionary(word) {
        let response = await axios.get('https://api.c99.nl/dictionary', {
            params: {
                key: this.key,
                word: word,
                json: true
            }
        });

        return response.data;
    }

    async ImageReverse(url) {
        let response = await axios.get('https://api.c99.nl/definepicture', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async SynonymFinder(word) {
        let response = await axios.get('https://api.c99.nl/synonym', {
            params: {
                key: this.key,
                word: word,
                json: true
            }
        });

        return response.data;
    }

    async EmailValidator(email) {
        let response = await axios.get('https://api.c99.nl/emailvalidator', {
            params: {
                key: this.key,
                email: email,
                json: true
            }
        });

        return response.data;
    }

    async DisposableMailCheck(email) {
        let response = await axios.get('https://api.c99.nl/disposablemailchecker', {
            params: {
                key: this.key,
                email: email,
                json: true
            }
        });

        return response.data;
    }

    async IPValidator(ip) {
        let response = await axios.get('https://api.c99.nl/ipvalidator', {
            params: {
                key: this.key,
                ip: ip,
                json: true
            }
        });

        return response.data;
    }

    async TORChecker(ip) {
        let response = await axios.get('https://api.c99.nl/torchecker', {
            params: {
                key: this.key,
                ip: ip,
                json: true
            }
        });

        return response.data;
    }

    async Translator(text, tolanguage) {
        let response = await axios.get('https://api.c99.nl/translate', {
            params: {
                key: this.key,
                text: text,
                tolanguage: tolanguage,
                json: true
            }
        });

        return response.data;
    }

    async RandomInfoGenerator(gender = 'all') {
        let response = await axios.get('https://api.c99.nl/randomperson', {
            params: {
                key: this.key,
                gender: gender,
                json: true
            }
        });

        return response.data;
    }

    async YouTubeVideoDetails(videoid) {
        let response = await axios.get('https://api.c99.nl/youtubedetails', {
            params: {
                key: this.key,
                videoid: videoid,
                json: true
            }
        });

        return response.data;
    }

    async YouTubeToMP3(videoid) {
        let response = await axios.get('https://api.c99.nl/youtubemp3', {
            params: {
                key: this.key,
                videoid: videoid,
                json: true
            }
        });

        return response.data;
    }

    async IPLogger(action = 'viewloggers') {
        let response = await axios.get('https://api.c99.nl/iplogger', {
            params: {
                key: this.key,
                action: action,
                json: true
            }
        });

        return response.data;
    }

    async BitcoinBalance(address) {
        let response = await axios.get('https://api.c99.nl/bitcoinbalance', {
            params: {
                key: this.key,
                address: address,
                json: true
            }
        });

        return response.data;
    }

    async EthereumBalance(address) {
        let response = await axios.get('https://api.c99.nl/ethereumbalance', {
            params: {
                key: this.key,
                address: address,
                json: true
            }
        });

        return response.data;
    }

    async CurrencyConverter(amount, from, to) {
        let response = await axios.get('https://api.c99.nl/currency', {
            params: {
                key: this.key,
                amount: amount,
                from: from,
                to: to,
                json: true
            }
        });

        return response.data;
    }

    async CurrencyRates(source) {
        let response = await axios.get('https://api.c99.nl/currencyrates', {
            params: {
                key: this.key,
                source: source,
                json: true
            }
        });

        return response.data;
    }

    async WeatherChecker(location, unit = 'C') {
        let response = await axios.get('https://api.c99.nl/weather', {
            params: {
                key: this.key,
                location: location,
                unit: unit,
                json: true
            }
        });

        return response.data;
    }

    async QRCodeGenerator(string, size = 150) {
        let response = await axios.get('https://api.c99.nl/qrgenerator', {
            params: {
                key: this.key,
                string: string,
                size: size,
                json: true
            }
        });

        return response.data;
    }

    async TextParser(url) {
        let response = await axios.get('https://api.c99.nl/textparser', {
            params: {
                key: this.key,
                url: url,
                json: true
            }
        });

        return response.data;
    }

    async ProxyDetector(ip) {
        let response = await axios.get('https://api.c99.nl/proxydetector', {
            params: {
                key: this.key,
                ip: ip,
                json: true
            }
        });

        return response.data;
    }

    async PasswordGenerator(length, include, customlist) {
        let response = await axios.get('https://api.c99.nl/passwordgenerator', {
            params: {
                key: this.key,
                length: length,
                include: include,
                customlist: customlist,
                json: true
            }
        });

        return response.data;
    }

    async RandomNumberGenerator(length, between) {
        let params = {
            key: this.key,
            json: true
        };

        if (length) params.length = length;
        if (between) params.between = between;

        let response = await axios.get('https://api.c99.nl/randomnumber', {
            params: params
        });

        return response.data;
    }

    async LicenseKeyGenerator(template, amount = 1) {
        let response = await axios.get('https://api.c99.nl/licensekeygenerator', {
            params: {
                key: this.key,
                template: template,
                amount: amount,
                json: true
            }
        });

        return response.data;
    }

    async EitherOr() {
        let response = await axios.get('https://api.c99.nl/eitheror', {
            params: {
                key: this.key,
                json: true
            }
        });

        return response.data;
    }

    async GIFFinder(keyword) {
        let response = await axios.get('https://api.c99.nl/gif', {
            params: {
                key: this.key,
                keyword: keyword,
                json: true
            }
        });

        return response.data;
    }
}

module.exports = c99;
