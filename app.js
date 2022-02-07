//Using environment variables in development environment
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

//Dummy data for testing
const seedDB = require('./seed');

//APIs
const quoteAPIs = require('./apis/quoteapis');
const reviewAPIs = require('./apis/reviewapis');


//connecting to the mongoDB database
const dbURL = process.env.db_URL || 'mongodb://localhost:27017/quotes-db';
mongoose.connect(dbURL)
        .then(() => console.log('DB connected successfully'))
        .catch(err => console.log(err));


app.use(mongoSanitize());
app.use(cors({
    origin: ['https://inspiring-bassi-292ddb.netlify.app']
}));
app.use(express.json());

// seedDB();

app.use('/quotes',quoteAPIs);
app.use(reviewAPIs);


app.all('*', (req, res) => {
    res.status(400).json({ msg: 'You are requesting a wrong url!!!' });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});