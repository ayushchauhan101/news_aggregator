import fetch from "node-fetch";
import express from 'express';
import path from 'path';
import { fileURLToPath} from 'url';
import * as dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// mention user specified search keyword here
let search_query = 'tesla'
const api_key = process.env.API_KEY

// all headlines
const url = `https://newsapi.org/v2/everything?sortBy=popularity&apiKey=${api_key}&searchIn=title&language=en&q=${search_query}`

// top headlines
// const url = `https://newsapi.org/v2/top-headlines?apiKey=${api_key}&q=${search_query}`

let res = await fetch(url)
let data = await res.json()

app.get('/', (req,res)=>{
    // res.send('welcome to newspaper.com')
    res.render('default')
})

app.get('/:news_id', (req,res) => {
    let k = req.params.news_id

    let titles = data['articles'][k]['title']
    let descriptions = data['articles'][k]['description']
    let urls = data['articles'][k]['url']
    let image_url = data['articles'][k]['urlToImage']

    res.render('home', {news:titles, desc:descriptions, link: urls, image_url})
})

app.listen(8000, ()=> {
    console.log('running on port 8000')
})
