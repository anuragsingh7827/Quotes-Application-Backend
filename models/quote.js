const mongoose = require('mongoose');
const Review = require('./review');

const quoteSchema = new mongoose.Schema({
    
    author: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]

});

quoteSchema.post('findOneAndDelete', async(quote) => {
    if(quote.reviews.length){
        await Review.deleteMany({ _id: { $in: quote.reviews } });
    }
});


const Quote = mongoose.model('Quote',quoteSchema);

module.exports = Quote;