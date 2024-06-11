const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kinopoisk').then(() => {
    console.log('Connectes to MongoDB');
}).catch((e) => {
    console.log("Failed to connect to MongoDB");
})