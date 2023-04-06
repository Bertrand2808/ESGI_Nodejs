import { TopTransfer } from '../models/transferModel.js'

export const getTransfers = (req, res, next) => {
  console.log('Page getTransfers !')
  TopTransfer.find()
    .then((result) => {
      res
        .status(200)
        .json({'transfers': result})
    })
    .catch((err) => {
      if(!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
      console.log(err)
    })

}

export const getTransfer = (req, res, next) => {
  const id = req.params.id
  TopTransfer.findById(id)
    .then((result) => {
      res
        .status(200)
        .json({'transfer': result})
    })
    .catch((err) => {
      console.log(err)
    })
}

export const postTransfer = (req, res, next) => {
  const transfer = new TopTransfer(req.body)
  transfer.save()
    .then((result) => {
      res
        .status(200)
        .json({
          message: 'Transfer created', result
        })
    })
    .catch((err) => {
      console.log(err)
    })

}

export const createTransfer = (req, res, next) => {

}

export const updateTransfer = (req, res, next) => {

}

export const deleteTransfer = (req, res, next) => {

}

export const getHelloFromTransfer = (req, res, next) => {
    console.log('Page d\'accueil des transfers !')
    res.send('Page d\'accueil des transfers !')
  }
