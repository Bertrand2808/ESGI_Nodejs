const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express(); // création de l'application express

app.use(bodyParser.json()); // analyse les corps des requêtes en json


mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Connection error", err);
  process.exit();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
