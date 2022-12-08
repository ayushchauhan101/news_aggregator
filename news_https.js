import https from 'https'
// const https = require('https')

let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=091b3cb6469f43caacf630221ca121e6&q=election'

let req = https.get(url, (res, req) => {
    const userAgent = req.get('user-agent');
})


headers = {'User-Agent': userAgent}

https.get(url, headers, (response) => {
    let data = ''
    response.on('data', (chunck) => {
        data += chunck;
    })

    response.on('end', () => {
        console.log(data)
    })
})
.on('error', (err) => {
    console.log(err)
});