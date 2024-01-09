const mongoose = require('mongoose');

// Schéma de données MongoDB
const passengerSchema = new mongoose.Schema({
    passengerId: Number,
    survived: Number,
    pclass: Number,
    name: String,
    sex: String,
    age: Number,
    sibSp: Number,
    parch: Number,
    ticket: String,
    fare: Number,
    cabin: String,
    embarked: String,
  });


module.exports = mongoose.model('lesPassagers', passengerSchema); // j'indique le nom de ma collection 
//[ATTENTION j'en ai crée 3 mais celle qui a les données = lesPassagers]
