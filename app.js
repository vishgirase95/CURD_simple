const express = require("express");
const { json } = require("express/lib/response");
const mongoose = require("mongoose");
const confDB=require("./config/config.database.js");
const routes=require("./route/app.route.js");

mongoose.connect(confDB.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to data base : Sucsess!");
}).catch((err)=>{
    console.log("Connection to databse failed ",err)
})
const app=express();

// const con=mongoose.connection;
// con.on("open", ()=>{
//     console.log("datbase connected");
// })
app.use(express.json());
app.use("/",routes);
app.use("/:id",routes);


app.listen(3000,(e)=>{
        console.log("Connected to server : 3000");

    
})