const express = require("express");
const dbConnection = require("./DB_connection");
const { ObjectId } = require("mongodb");

const PORT = 3000
const app = express()

app.use(express.json())

app.get("/student-read", async (req, res) => {
    let myDB = await dbConnection()
    let studentCollection = myDB.collection("students")
    let dataObj = await studentCollection.find().toArray()
    
    
      let resObj = {
        status:1,
        msg: "Student List",
        dataObj
    }
    res.send(resObj)
})

app.post("/insert-student", async (req, res) => {
    let myDB = await dbConnection()
    let studentCollection = myDB.collection("students")
    const {sName, sEmail} = req.body
    let studentObj = {sName, sEmail}
    console.log(studentObj)
    let insertResponse = await studentCollection.insertOne(studentObj)
    let resObj = {
        status:1,
        msg: "Data Insert",
        insertResponse
    }
    res.send(resObj)
})

app.delete("/student-delete/:id",async (req, res) => {
    const {id} = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")
    let delRes = await studentCollection.deleteOne({_id: new ObjectId(id)})

    let resObj = {
        status: 1,
        msg: "Data Delete",
        delRes
    }
    res.send(resObj)
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT}`)
})

