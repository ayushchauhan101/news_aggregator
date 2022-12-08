import fetch from "node-fetch";

const url = 'https://newsapi.org/v2/everything?q=privacy&sortBy=popularity&apiKey=091b3cb6469f43caacf630221ca121e6'

let res = await fetch(url)
let data = await res.json()

for (let i=0; i<3; i++){
    // storing fetched news data to variables
    let all_titles = data['articles'][i]['title']
    let all_descriptions = data['articles'][i]['description']
    let all_links = data['articles'][i]['url']

    module.exports = {all_titles,all_descriptions,all_links}
}