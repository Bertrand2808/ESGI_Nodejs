import express from 'express'
import { getHelloFromTransfer, getTransfers } from '../controler/transferControler.js'

// Ce routeur doit être accessible depuis la route localhost:3000/product

const router = express.Router()
router.get('/', getHelloFromTransfer)
router.get('/list', getTransfers)
router.get('/', getHelloFromTransfer)
router.get('/', getHelloFromTransfer)


export default router
