const { MongoClient } = require('mongodb');

let dbConnectionURL = `mongodb://127.0.0.1:27017`

const client = new MongoClient(dbConnectionURL);

let dbConnection = async () => {
    await client.connect()
    let DB = client.db("mongoDBProject_Database")
    return DB
}


module.exports = dbConnection