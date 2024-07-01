import express from "express";
// import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionNameCharacters = process.env.MONGO_DB_COLLECTION_CHARACTERS;
const collectionNameFilms = process.env.MONGO_DB_COLLECTION_FILMS;
const collectionNamePlanets = process.env.MONGO_DB_COLLECTION_PLANETS;
const collectionNameFilmsCharacters = process.env.MONGO_DB_COLLECTION_FILMS_CHARACTERS;
const collectionNameFilmsPlanets = process.env.MONGO_DB_COLLECTION_FILMS_PLANETS;


const app = express();
app.use(cors()); // Enable CORS for all routes
const PORT = 3000;

app.get("/api/characters", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNameCharacters);
    const characters = await collection.find({}).toArray();
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.get("/api/films", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNameFilms);
    const films = await collection.find({}).toArray();
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.get("/api/planets", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNamePlanets);
    const planets = await collection.find({}).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.get("/api/characters/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNameCharacters);
    const result = await collection.findOne({ id : id });
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).send("Character not found");
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.get("/api/films/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNameFilms);
    const result = await collection.findOne({ id: id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Film not found");
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.get("/api/planets/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNamePlanets);
    const result = await collection.findOne({ id: id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Planet not found");
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// sets up middleware to automatically parse JSON-formatted request bodies,
// which is common for POST requests
app.use(express.json());
