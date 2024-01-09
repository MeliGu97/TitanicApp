const mongoose = require('mongoose');

// Schéma de données MongoDB
const PassagerSchema = new mongoose.Schema({
    PassengerId: Number,
    Survived: Number,
    Pclass: Number,
    Name: String,
    Sex: String,
    Age: Number,
    SibSp: Number,
    Parch: Number,
    Ticket: String,
    Fare: Number,
    Cabin: String,
    Embarked: String,
  });

module.exports = mongoose.model('lesPassagers', PassagerSchema); // j'indique le nom de ma collection 
//[ATTENTION j'en ai crée 3 mais celle qui a les données = lesPassagers]
