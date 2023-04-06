import mongoose from 'mongoose'
import express from 'express'

const app = express()
// Fonction de connexion à mongoDB
function connectDB() {
  // On se connecte à la base de données
  mongoose.connect("mongodb://127.0.0.1:27017/Football", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    // On récupère la connexion et on retourne une promise
    .then((result) => {
      console.log("Connected to MongoDB")
      // ecoute du server sur le port 3000
      app.listen(3000, () => {
        console.log("Ecoute de l'API sur le port 3000!");
      });
    })
    // On récupère l'erreur
    .catch(err => console.error("Could not connect to MongoDB", err));
}

export default connectDB;

