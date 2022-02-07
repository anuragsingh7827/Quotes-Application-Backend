const { reviewSchema } = require("../schemas");



module.exports.validateReview = (req,res,next) => {
    const { error } = reviewSchema.validate({ ...req.body });
    if(error){
        const msg = error.details.map(err => err.message).join(', ');
        return res.status(400).json({ msg: msg });
    }
    next();
};