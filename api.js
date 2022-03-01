const axios = require("axios");
const config = require("./config.json");

async function getSubDomains(domain) {

    const res = await axios.get('https://api.c99.nl/subdomainfinder', {
        params: {
            key: config.apikey,
            domain: domain,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function getPhoneInfo(number) {

    const res = await axios.get('https://api.c99.nl/phonelookup', {
        params: {
            key: config.apikey,
            number: number,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function getSkypeUserInfo(username) {

    const res = await axios.get('https://api.c99.nl/skyperesolver', {
        params: {
            key: config.apikey,
            username: username,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function getSkypeIPInfo(ip) {

    const res = await axios.get('https://api.c99.nl/ip2skype', {
        params: {
            key: config.apikey,
            ip: ip,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function FirewallResolver(domain) {

    const res = await axios.get('https://api.c99.nl/firewalldetector', {
        params: {
            key: config.apikey,
            url: domain,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function PortScanner(ip) {

    const res = await axios.get('https://api.c99.nl/ip2skype', {
        params: {
            key: config.apikey,
            host: ip,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function CheckPort(host, port) {

    const res = await axios.get('https://api.c99.nl/portscanner', {
        params: {
            key: config.apikey,
            host: host,
            port: port,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function Ping(ip) {

    const res = await axios.get('https://api.c99.nl/ping', {
        params: {
            key: config.apikey,
            host: ip,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function HostnameResolver(ip) {

    const res = await axios.get('https://api.c99.nl/gethostname', {
        params: {
            key: config.apikey,
            host: ip,
            json: true
        }
    })
    const data = res.data
    return data;
}

async function dnschecker(domain) {

    const res = await axios.get('https://api.c99.nl/dnschecker', {
        params: {
            key: config.apikey,
            url: domain,
            json: true
        }
    })
    const data = res.data
    return data;
}


module.exports = {
    getSubDomains,
    getPhoneInfo,
    getSkypeUserInfo,
    getSkypeIPInfo,
    FirewallResolver,
    PortScanner,
    CheckPort,
    Ping,
    HostnameResolver,
    dnschecker
}