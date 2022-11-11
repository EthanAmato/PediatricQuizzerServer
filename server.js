import express from "express";
import morgan from "morgan";
import cors from 'cors'; //data sharing
import { config } from "dotenv";
import router from "./router/route.js";
const app = express();

//app middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config();

// Application Port
const port = process.env.PORT || 8080;

//Create routes

app.use("/api", router) // apis - need to specify api endpoint and then rest of api route 

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
});

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`)
});