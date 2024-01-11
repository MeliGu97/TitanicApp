'use strict';
import express, { Express } from 'express';

import cors from "cors";
import router from './routes';
import { port, host } from "./config";
const mongoose = require('mongoose');

const app : Express = express();

mongoose.connect('mongodb://localhost:27017/bddConnexion', { useNewUrlParser: true, useUnifiedTopology: true });

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  mdp: String
});
export const Utilisateur = mongoose.model('utilisateurs', utilisateurSchema);

// récupération des données post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// router
app.use("/api", router);

app.listen(port, () =>
  console.log(`listen ${host}:${port}`),
);
