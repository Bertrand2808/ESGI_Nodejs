import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import connectDB from "./BDD/app.js"

import productRouter from "./routes/product.js"
import  transferRouter from "./routes/transfer.js"

import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

async function main() {
  // On crée une application express
  const app = express()

  /*
    https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do

  */

  const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ESGI B3 AL Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "ESGI",
                url: "",
                email: "ESGI@ESGI.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
  }

  const swaggerSpec = swaggerJSDoc(options)

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use("/product", productRouter)
  app.use("/transfer", transferRouter)
  app.use(express.json())

  app.post('/api-stuff', (req, res) => {
    console.log(req.body)
    res.status(201).json({ message: 'Post created successfully' }
    )
  })

  // On se connecte à la base de données
  connectDB("mongodb://127.0.0.1:27017",(err) => {
    if (err) {
      console.log("Erreur de connexion a la base de données")
      process.exit(-1)
    }
    app.listen(3000, () => {
      console.log("Serveur démarré sur le port 3000")
    })
  })
}

main()
