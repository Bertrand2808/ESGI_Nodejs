const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

// Connexion à la base de données MongoDB
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017'; // Assure-toi que MongoDB est en cours d'exécution
const dbName = 'Books';
const collectionName = 'bestbook';

let db;
let collection;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données', err);
    return;
  }

  db = client.db(dbName);
  collection = db.collection(collectionName);

  // Démarrage du serveur une fois connecté à la base de données
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
});

// Configurer le middleware pour parser les données JSON
app.use(express.json());

// Routes de l'API
// Exemple : GET /books
app.get('/books', (req, res) => {
  collection.find({}).toArray((err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des livres', err);
      res.status(500).send('Une erreur s\'est produite');
      return;
    }

    res.json(result);
  });
});

// Autres routes pour les opérations CRUD (à implémenter)

