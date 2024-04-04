const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const PORT = 3000;
const plName = ["c","c+","javva","python","js"]



app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).render("index",{pageTitle:"hello man surya man",plName:plName})
})

app.post("/",(req,res)=>{
    plName.push(req.body.plName)
    res.redirect('/');

})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact",{pageTitle:" surya man "})
})

app.listen(PORT,()=>{
    console.log("server 3000 started")
})

