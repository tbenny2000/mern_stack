const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    "mongodb+srv://tbenny2000:tbenny2000@tacotacluster.pinbnnq.mongodb.net/mern?retryWrites=true&w=majority"
    
    )

    app.get("/getUsers", (req, res) => {
        UserModel.find({}).then(function(users) {
            // display users to the frontend
            res.json(users)
        }).catch(function(err){
            res.json(err)
        })
    })

    // sending data to db
    app.post("/createUser", async (req, res) => {
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
    })

app.listen(3005, ()=> {
    console.log("Server is Running")
})