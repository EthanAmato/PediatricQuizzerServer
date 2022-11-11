//Make all of the API routes for this project
const router = Router();

import { Router } from "express";

router.get('/questions', (req, res) => {
    res.json("questions api get request")
})


export default router;