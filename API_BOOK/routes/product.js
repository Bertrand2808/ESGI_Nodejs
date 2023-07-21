const express = require('express');

// Ce routeur doit être accessible depuis la route localhost:3000/product

const router = express.Router()

router
    .get('/', getRouteHandler)

function getRouteHandler(req, res) {
    console.log('Hello world, about product')
    res.send('Hello world, about product')
}

module.exports = router;
