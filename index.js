const express = require('express');
const app = express();
const DB = require("./config/mongoDB");
const cookieParser = require("cookie-parser");
const admin = require("./models/admin-model");
const query = require("./models/query-model");
const ensureAdmin = require("./middleware/EnsureAdmin");
app.set("view engine", "ejs");
app.use(express.static("public"));
require("dotenv").config();
DB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req, res) => {
  res.render("index");
});

app.post("/",async(req,res)=>{
  const { name, email, mobile, message } = req.body;

  try {
    const querydata = await query.create({
      name,
      mobile,
      email,
      message,
    })
    res.status(201).send('Query created successfully');
  } catch (error) {
    res.status(400).send(`Error creating query: ${error.message}`);
  }
})

app.get("/admin/login", (req, res) => {
  res.render("login");
});
app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;
  const data = await admin.findOne({email});
  try {
    if (data) {
      if (data.password === password) {
        res.cookie("admin",true, { maxAge: 24*60*60*1000, httpOnly: true });
        res.redirect("/admin/main");
      }
      else{
        res.redirect("/")
      }
    }
    else{
      res.send("you are not Authorized!");
    }
  }
  catch(error){
    res.send(error);
  }
});

app.get("/admin/main",ensureAdmin,async(req,res)=>{
  const querydata = await query.find();
  res.render("admin",{data : querydata});
})

app.delete("/delete-query/:_id",async(req,res)=>{
  try{
    const data = await query.findOneAndDelete({_id : req.params._id});
    res.status(201).send({success : true, message : "deleted"});
  }
  catch(err){
    console.log(err.message);
  }

})

app.listen(process.env.PORT, () => {
  console.log('app is running');
})
