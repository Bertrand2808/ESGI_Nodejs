const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

/*
  * Création d'un utilisateur
*/
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });
  await user.save();

  const token = jwt.sign({ _id: user._id }, 'secretkey');
  res.status(200).send({ token });
});

/*
  * Connexion d'un utilisateur
*/
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid password');
  }

  const token = jwt.sign({ _id: user._id }, 'secretkey');
  res.status(200).send({ token });
});

module.exports = router;
