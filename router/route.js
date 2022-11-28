//Make all of the API routes for this project
import { Router } from "express";
const router = Router();

//Import controllers
import * as controller from '../controllers/controller.js'

//Chain multiple types of requests to a single endpoint without reusing code
router.route('/questions')
            .get(controller.getQuestions) //GET request
            .post(controller.insertQuestions) //POST request
            .delete(controller.dropQuestions) //DELETE request


router.route('/results')
            .get(controller.getResults)
            .post(controller.storeResults)
            .delete(controller.dropResults)




export default router;