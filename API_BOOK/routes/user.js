const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/user');

router.route('/users').post(addUser);


module.exports = router;
