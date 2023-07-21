const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');

// Route pour récupérer un livre par son ID
router.get('/:id', bookController.getBookById);
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);


module.exports = router;
