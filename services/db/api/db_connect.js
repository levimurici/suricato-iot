const { MongoClient } = require('mongodb');
const config = require('config')

/* Rotas do suricatoDB */
const url = config.mongodb.url;
const client = new MongoClient(url);
const dbName = config.mongodb.dbName;
const db = client.db(dbName);
const collection = config.mongodb.collection;

async function connect_to_db() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
}