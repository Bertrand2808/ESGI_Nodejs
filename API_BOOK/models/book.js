const mongoose = require('mongoose');
const { Schema } = mongoose;


/*
  * Création du schéma de données pour les livres de l'application
  * Book: titre du livre
  * Author: auteur du livre
  * Description: description du livre
  * Genres: genres du livre
  * Avg_Rating: note moyenne du livre
  * Num_Ratings: nombre de notes du livre
  * URL: URL du livre
*/
const BookSchema = new mongoose.Schema(
  {
    _id: mongoose.ObjectId,
    Book: { type: String, required: true },
    Author: { type: String, required: true },
    Description: { type: String, required: true },
    Genres: { type: String, required: true },
    Avg_Rating: { type: Number, required: true },
    Num_Ratings: { type: String, required: true },
    URL: { type: String, required: true },
  },
  { collection: 'bestbook' }
);

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
