import axios, { toFormData } from 'axios'
import express from 'express'

const app = express();

axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=091b3cb6469f43caacf630221ca121e6&q=election')
    .then(result => {
        // console.log(result.data)

        app.get('/', (res, req)=>{
            req.send(`<h3> ${result.data['articles'][0]['title']} </h3> <br> ${result.data['articles'][0]['description']} <p> <a href="${result.data['articles'][0]['url']}" target="_blank"> link to news </a>`)
        })
    })
    .catch(err => {
        console.log(err)
    })

app.listen(8000, ()=>{
    console.log('running on port 8000')
})