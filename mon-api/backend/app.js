import mongoose from "mongoose"
import express from "express"

let clientDB = null

const app = express()
// Fonction de connexion à mongoDB
function connectDB(url, callback) {
  if (!clientDB) {
    console.log("Pas de client bdd en cours  => connexion a la base de données")
    // On se connecte à la base de données
    clientDB = mongoose.connect(url, {
      useNewUrlParser: true
    })

    clientDB
    .connect((err) => {
      if (err) {
        console.log("Erreur de connexion a la base de données")
        clientDB = null
        callback(err)
      }
    })
    .then(() => {
      console.log("Connexion a la base de données réussie")
      callback()
    })
  }
}

export default connectDB
