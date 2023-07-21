import express from "express"

const router = express.Router()

import { isAuthentidied } from "../middlewares/auth.js"

router.get('/sensitive', isAuthentidied, sensitiveController.getData)
