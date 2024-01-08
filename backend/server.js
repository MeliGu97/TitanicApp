const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/titanicDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', function () {
  console.log('Connecté à MongoDB');
});

// Schéma de données MongoDB
const passengerSchema = new mongoose.Schema({
  // Définissez la structure des données en fonction de votre fichier CSV
  // Exemple : name: String, age: Number, ...
});

const Passenger = mongoose.model('Passenger', passengerSchema);


// API pour récupérer les données depuis la base de données
app.get('/api/passengers', async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
