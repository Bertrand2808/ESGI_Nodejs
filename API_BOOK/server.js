const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./db/connect');
const app = express();
const port = 3000; // Choisis un port approprié
const booksRouter = require('./routes/books');

// Configuration de bodyParser pour analyser les demandes JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de gestion des livres');
});
// Définition des routes de l'API
app.use('/books', booksRouter);

// Connexion à la base de données MongoDB
connect("mongodb://localhost:27017/", (err) => {
  if(err) {
    console.log("err de connexion à la base de données : ", err);
    process.exit(-1); // Quitte l'application en cas d'erreur
  } else {
    console.log("Connexion à la base de données réussie");
    // Démarrer le serveur
    app.listen(port, () => {
      console.log(`Le serveur est en écoute sur le port ${port}`);
    });
  }
});





