import toptransfer from '../models/transferModel.js'


export const getTransfers = (req, res, next) => {
  console.log('Page getTransfers !')
  try {
    console.log('Page getTransfers try !')
    toptransfer.find()
      .then(results => {
        res
          .status(200)
          .json({
            message: 'Posts retrieved successfully', results: results
          })
      })
    } catch (error) {
        switch(res.statusCode) {
          case 404:
            return res.status(404).json({message: 'Not found'})
          case 500:
            return res.status(500).json({message: 'Internal server error'})
        }
      }
}


export const getTransfer = (req, res, next) => {
  const id = req.params.id
  toptransfer.findById(id)
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

export default { getTransfers, getTransfer, postTransfer, createTransfer, updateTransfer, deleteTransfer, getHelloFromTransfer }
