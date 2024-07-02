app.get("/api/characters/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionNameCharacters);
    const result = await collection.findOne({ id: id });
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
