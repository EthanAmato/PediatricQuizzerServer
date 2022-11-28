import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from "../database/data.js";

//get all questions - modify later
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({error})
    }
}

//Insert questions 
export async function insertQuestions(req, res) {
    try {
       Questions.insertMany({questions: questions, answers: answers}, function(err, data) {
            res.json({msg: "Data saved successfully"})
       });
    } catch (error) {
        res.json({error})
    }
}

//Delete all questions

export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({msg: "Data deleted successfully"})

    } catch (error) {
        res.json({error})
    }
}


//Result Controllers
//get all results
export async function getResults(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({error})
    }}
export async function storeResults(req, res) {
    try {
        const {username, result, attempts, points, achieved} = req.body;
        if(!username && !result) throw Error('Data Not Provided...')
        Results.create({username, result, attempts, points, achieved}, function(err,data){ //only inserts 1 row at a time
            res.json({msg:"User saved successfully..."});
        })
    } catch (error) {
        res.json({error})
    }
}

export async function dropResults(req, res) {
    try {
        await Results.deleteMany();
        res.json({msg: "Results deleted successfully..."})
    } catch (error) {
        res.json({error})
    }
}