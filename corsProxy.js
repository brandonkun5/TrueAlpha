const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/v2/top-headlines', (req, res) => {
    request(
        {url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2c9aadb862ba458a9ffc475420b4bc84'},
        (error, response, body) => {
            if(error || response.statusCode !== 200) {
                return res.status(500).json({type: 'error', message: error.message });
            }

            res.json(JSON.parse(body));
        }
    )
});
