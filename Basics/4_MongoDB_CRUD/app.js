const express = require("express");
const dbConnection = require("./DB_connection");

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

app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT}`)
})

