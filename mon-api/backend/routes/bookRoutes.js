const express = require('express');
const Book = require('../models/Books');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

module.exports = router;
