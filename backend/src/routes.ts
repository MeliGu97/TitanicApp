'use strict';
import express, { Router, Request, Response } from "express";
import { Passengers, PassengersSurvived } from "./model";
import { log } from "console";
import { readFile, writeFile } from 'node:fs/promises';
import path from "path";
import { Utilisateur } from "./app";
import { Passenger } from "./Passenger";

const csvFilePath: string | undefined = process.env.DATA_URL;
const pathStatJSON = path.join(__dirname, `../src/${csvFilePath}/stat.json`);
const pathGenreJSON = path.join(__dirname, `../src/${csvFilePath}/genre.json`);

const router: Router = express.Router();

router.get("/passengers", async function (req: Request, res: Response) {
    const data = await Passengers();
    //log(data)
    res.json(data);
});

router.get("/passengers/Survived/:status", async function (req: Request, res: Response) {
    const status: string = req.params.status;
    const data = await PassengersSurvived(status);
    //log(data)

    res.json(data);
});

router.get("/passengers/Genre/:genre", async function (req: Request, res: Response) {
    const genre: string = req.params.genre;
    const data = await PassengersGenre(genre);
    res.json(data);
});

async function PassengersGenre(genre: string) {
    const data = await Passengers();
    const filteredData = data.filter((passenger: Passenger) => passenger.Sex.toLowerCase() === genre.toLowerCase());
    return filteredData;
}


router.post("/stat", async function (req: Request, res: Response) {
    const { Survived, SexAgePclass }: { Survived: string, SexAgePclass: string } = req.body;
    let contents: any = await readFile(pathStatJSON, { encoding: 'utf8' });
    contents = JSON.parse(contents);

    //log(contents)

    if (SexAgePclass) {
        contents["SexAgePclass"]["Survived"] += parseInt(Survived);
    }

    writeFile(pathStatJSON, JSON.stringify(contents));

    res.json(JSON.parse(contents))

    // res.redirect('/stat');
});

router.get("/stat/", async function (req: Request, res: Response) {

    const contents = await readFile(pathStatJSON, { encoding: 'utf8' });
    //console.log(contents);

    res.json(JSON.parse(contents))

});

router.get('/utilisateurs', async (req, res) => {
    try {
      const utilisateurs = await Utilisateur.find();
      res.json(utilisateurs);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post("/login", async function (req: Request, res: Response) {
const { email, password } = req.body;
try {
    const utilisateur = await Utilisateur.findOne({ email: email });

    if (utilisateur) {
        // Vérifier le mot de passe
        log(password)
        log("-----------")
        log(utilisateur.mdp)
        if (utilisateur.mdp === password) {
            res.json({ message: "Connexion réussie", utilisateur });
        } else {
            res.status(401).json({ message: "Mot de passe incorrect" });
        }
    } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
}
});


// ne rien mettre en dessous de cette route generique
router.get('*', function (req: Request, res: Response) {
    res.status(404).json({ error: "Not found" })
});

export default router;