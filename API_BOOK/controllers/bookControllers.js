// bookController.js

const Book = require('../models/book');

// Fonction de lecture d'un livre par son ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: 'Livre non trouvé' });
      }
      res.json(book);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération du livre :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération du livre' });
    });
};

exports.getAllBooks = (req, res) => {
  Book.find({}, { " ": 0 })
    .then((books) => {
      res.json(books);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des livres :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
    });
}

exports.createBook = (req, res) => {
  const newBook = req.body;

  Book.create(newBook)
    .then((book) => {
      res.json(book);
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du livre :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du livre' });
    });
}

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  Book.findByIdAndUpdate(bookId, updatedBook, { new: true })
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: 'Livre non trouvé' });
      }
      res.json(book);
    })
    .catch((error) => {
      console.error('Erreur lors de la mise à jour du livre :', error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour du livre' });
    });
}

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;

  Book.findByIdAndRemove(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: 'Livre non trouvé' });
      }
      res.json({ message: 'Livre supprimé avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression du livre :', error);
      res.status(500).json({ error: 'Erreur lors de la suppression du livre' });
    });
}
