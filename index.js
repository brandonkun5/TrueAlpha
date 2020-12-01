const express = require('express');
const app = express();

app.get('https://development.api.yodlee.com/ysl/holdings/securities', (req, res) => {
    var stock = res.security.description;
    console.log(stock);
}