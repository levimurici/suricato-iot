const { MongoClient } = require('mongodb');

// Connection URL
const url = "mongodb://192.168.1.12:27017";
const client = new MongoClient(url);
const dbName = 'local';

const db = client.db(dbName);
const collection = db.collection('suricatoIot');

async function connect() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    var data = await collection.find({
        "name": "suricato01",
        "data.control": "control"
    }).toArray();
    console.log(data);
}

connect()
    .catch(console.error)
    .finally(() => client.close());