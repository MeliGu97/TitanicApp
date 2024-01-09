const mongoose = require('mongoose');

// Schéma de données USERS MongoDB
const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
  });

module.exports = mongoose.model('Users', UserSchema); // j'indique le nom de ma collection 
