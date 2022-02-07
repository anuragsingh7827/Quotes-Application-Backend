const Quote = require('../models/quote');

module.exports.showAllQuotes = async(req,res) => {
    try{
        const quotes = await Quote.find();
        res.status(200).json(quotes);
    }
    catch(e){
        res.status(400).json({msg: 'something went wrong!!'},e);
    }
};

module.exports.addQuote = async(req,res) => {
    try{
        const { author, text } = req.body;
        await Quote.create({ author: author, text: text });
        console.log('New quote added successfully!!');
        res.status(200).json({ msg: 'New quote added successfully!!' });
    }
    catch(e){
        res.status(400).json({ msg: 'something went wrong!!' },e);
    }
};

module.exports.showQuote = async(req,res) => {
    const quote = await Quote.findById(req.params.id);
    res.status(200).json(quote);
};

module.exports.deleteQuote =  async(req,res) => {
    await Quote.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'Deleted the quote successfully!!' });
};