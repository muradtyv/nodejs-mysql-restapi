const express = require("express");
const cors = require("cors");

const app = express();

var corOption ={
    origin: "http://localhost:8080"
}

//middleware
app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));


//routers 

const router = require("./routes/productRoutes");

app.use("/api/products", router)

//testing api 
app.get("/", (req, res) =>{
    res.json({message: "message from api"});
})

//port 
const PORT = process.env.PORT || 8080


//server

app.listen(PORT, () =>{
    console.log("running api...")
})