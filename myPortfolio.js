const express = require('express');
const app = express();

app.get('https://development.api.yodlee.com/ysl/holdings', () => (req, res) {
    req.send('Hello World');
})