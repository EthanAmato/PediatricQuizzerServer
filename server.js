import express from "express";
import morgan from "morgan";
import cors from 'cors'; //data sharing
import { config } from "dotenv";
import router from "./router/route.js";

// Import connection to MongoDB //
import connect from "./database/connection.js";



const app = express();

//app middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config();

//Create routes

app.use("/api", router) // apis - need to specify api endpoint and then rest of api route 
                        // e.g. "https://localhost:5000/api/questions"

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
});


// Application Port
const port = process.env.PORT || 8080;

connect().then(() => { //ensures that we have access to backend database before even starting to provide
                       //api routing
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        });
    } catch (error) {
        console.log("Cannot Connect to the server...")
    }
}).catch(error => {
    console.log("Invalid Database Connection")
});

