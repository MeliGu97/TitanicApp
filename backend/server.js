const express = require('express');
const mongoose = require('mongoose');
// ici le nom de la collec 
const lesPassagers = require('./Passager');

const app = express();
// Mise en marche du serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`HEY Serveur en cours d'exécution sur http://localhost:${port}`);
});

app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/passengerTitanic', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost/passengerTitanic', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;


// Pour récupérer les données depuis la base de données
  app.get('/lesPassagers', async (req, res) => {
  try {
    const Passager = await lesPassagers.find();
    console.log("Hellooooo",Passager);
    res.json(Passager);
  } catch (err) {
    console.log("erreur");
    res.status(500).json({ message: err.message });
  }
});


