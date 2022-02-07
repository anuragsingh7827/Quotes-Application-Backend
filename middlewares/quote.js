const { quoteSchema } = require("../schemas");


module.exports.validateQuote = (req,res,next) => {
    const { error } = quoteSchema.validate({ ...req.body });
    if(error){
        const msg = error.details.map(err => err.message).join(', ');
        return res.status(400).json({ msg: msg });
    }
    next();
};