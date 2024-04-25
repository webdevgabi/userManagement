const { MongoClient } = require("mongodb");

module.exports = async ({ connectionString, db }) => {
    const client = await new MongoClient(connectionString).connect()
    const database = client.db(db);
    global.db = database;
}