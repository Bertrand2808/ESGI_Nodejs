import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// User correspond a un modele mongoose
import User from '../models/user.js'

const signup = (req, res, next) => {
  const {email, name, password} = req.body
  bcrypt.hash(password, 12)
    .then(hashedPw => {
      const user = new User({
        email: email,
        password: hashedPw,
        name: name
      })
      return user.save()
    })
    .then(result => {
      res.status(201).json({message: 'User created successfully !', userId: result._id})
    })
    .catch(err => {
      // logique de gestion d'erreur
      if (!err.statusCode) {
        err.statusCode = 500
      }
      // usage de next pour traiter l'erreur avec un middleware
      next(err)
    })
}

const login = (req, res, next) => {
  const email = req.body
  let exitingsUser
  User.findOne({email: email})
    .then(user => {
      if (!user) {
        const error = new Error('A user with this email could not be found.')
        error.statusCode = 401
        throw error
      }
      exitingsUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(isEqual => {
      if(!isEqual) {
        const error = new Error('Wrong password!')
        error.statusCode = 401
        throw error
      }
      const token = jwt.sign(
        {
        email: exitingsUser.email,
        userId: exitingsUser._id.toString()
        },
        'un super secret qui provient du fichier .env',
        { expiresIn: '1h'}
      )
    })
}
