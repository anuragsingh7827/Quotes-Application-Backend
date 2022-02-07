const express = require('express');
const { showAllReviews, createReview } = require('../controllers/review');
const { validateReview } = require('../middlewares/review');
const router = express.Router();

router.route('/quotes/:quoteid/reviews')
    .get(showAllReviews)
    .post(validateReview,createReview);


module.exports = router;