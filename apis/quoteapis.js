const express = require('express');
const { showAllQuotes, addQuote, showQuote, deleteQuote } = require('../controllers/quote');
const { validateQuote } = require('../middlewares/quote');
const router = express.Router();


router.route('/')
    .get(showAllQuotes)
    .post(validateQuote,addQuote);
router.route('/:id')
    .get(showQuote)
    .delete(deleteQuote);


module.exports = router;