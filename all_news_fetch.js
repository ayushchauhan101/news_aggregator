import fetch, { Headers } from 'node-fetch'

// // method 1 to call via await
const url = 'https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=091b3cb6469f43caacf630221ca121e6'

let options = {
    method: 'GET', 
    headers: 
        {Accept: '*/*'}
    };


let res = await fetch(url, options)
let data = await res.json()
console.log(data['articles'][0]['title'])
console.log('\n')
console.log(data['articles'][0]['description'])
console.log('\n')
console.log(data['articles'][0]['url'])
