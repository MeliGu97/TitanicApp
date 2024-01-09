const express = require('express');
const mongoose = require('mongoose');
// ici le nom des collec ou sont stoquées les données :
const lesPassagers = require('./Passager');
const Users = require('./User');

const app = express();
// Mise en marche du serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`HEY Serveur en cours d'exécution sur http://localhost:${port}`);
});

// pour parser le JSON
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

// Pour récupérer les données USERS 
app.get('/Users', async (req, res) => {
  try {
    const users = await Users.find();
    console.log("Holaaaaaa",User);
    res.json(users);
  } catch (err) {
    console.log("erreur");
    res.status(500).json({ message: err.message });
  }
});
