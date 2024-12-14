const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views",__dirname + "/views");
app.get("/Blog",(req,res)=>{
    res.render("Blog")
});
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Main",
        message:"Not Main"
    })
})
app.get("/Iam",(req,res)=>{
    res.render("Iam", {
        title:"Обо мне",
    });
});    
app.post("/8", (req,res)=>{
    res.send("852");
});

const server = require("http").createServer(app)

server.listen(3000, "", ()=>{})
