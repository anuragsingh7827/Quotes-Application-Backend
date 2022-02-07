const Quote = require("./models/quote");

const DUMMY_QUOTES = [
    {
        author: 'Mahatma Gandhi',
        text: 'Be the change that you wish to see in the world.'
    },
    {
        author: 'Mahatma Gandhi',
        text: 'Happiness is when what you think, what you say, and what you do are in harmony.'
    },
    {
        author: 'Martin Luther King Jr.',
        text: 'Our lives begin to end the day we become silent about things that matter.'
    },
    {
        author: 'Martin Luther King Jr.',
        text: 'Injustice anywhere is a threat to justice everywhere.'
    },
    {
        author: 'Nelson Mandela',
        text: "It always seems impossible until it's done."
    },
    {
        author: 'Nelson Mandela',
        text: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.'
    },
    {
        author: 'Abraham Lincoln',
        text: 'Folks are usually about as happy as they make their minds up to be.'
    },
    {
        author: 'Abraham Lincoln',
        text: 'Those who deny freedom to others, deserve it not for themselves.'
    },
    {
        author: 'John Lennon',
        text: "Life is what happens when you're busy making other plans."
    },
    {
        author: 'John Lennon',
        text: 'Count your age by friends, not years. Count your life by smiles, not tears.'
    }
];

async function seedDB(){
    await Quote.insertMany(DUMMY_QUOTES);
    console.log('DB seeded successfully');
}

module.exports = seedDB;