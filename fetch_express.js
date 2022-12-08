import fetch from "node-fetch"
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

const url = 'https://newsapi.org/v2/everything?q=privacy&sortBy=popularity&apiKey=091b3cb6469f43caacf630221ca121e6'

let res = await fetch(url)
let data = await res.json()

// for (let i=0; i<3; i++){
//     // storing fetched news data to variables
//     let title_to_print = data['articles'][i]['title']
//     let description_to_print = data['articles'][i]['description']
//     let link_to_print = data['articles'][i]['url']
// }

app.get('/', (req, res)=>{
    let title_to_print = (data['articles'][2]['title']);
    let description_to_print = (data['articles'][2]['description']);
    let link_to_print = (data['articles'][2]['url']);

    res.render('home', 
        {news : title_to_print, 
            desc : description_to_print, 
                link: link_to_print })
})


app.listen(8000, ()=>{
    console.log('running on port 8000')
})
