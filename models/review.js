const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    
    comment: {
        type: String,
        trim: true,
        required: true
    }

});


const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;