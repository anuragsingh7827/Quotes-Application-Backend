const Quote = require('../models/quote');
const Review = require('../models/review');

module.exports.showAllReviews = async(req,res) => {
    try{
        const quote = await Quote.findById(req.params.quoteid).populate('reviews');
        res.status(200).json(quote.reviews);
    }
    catch(e){
        res.status(400).json({ msg: 'something went wrong!!' },e);
    }

};

module.exports.createReview = async(req,res) => {
    try{
        const review =  new Review({ comment: req.body.comment });
        await review.save();

        const quote = await Quote.findById(req.params.quoteid);
        quote.reviews.push(review);
        await quote.save();
        
        console.log('new comment added successfully!!');
        res.status(200).json({ msg: 'new comment added successfully!!' });
    }
    catch(e){
        res.status(400).json({ msg: 'something went wrong!!' },e);
    }

}