import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import productRouter from "./routes/product.js"
import transferRouter from "./routes/transfer.js"

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


  // CRUD = Create, Read, Update, Delete

  app.use((req, res, next) => {
    res.status(200)
    res.send("Hello ESGI")
    next()
  })

  // On se connecte à la base de données
  const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Football", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // On récupère la connexion et on retourne une promise
    .then((result) => {
      console.log("Connected to MongoDB")
      // ecoute du server sur le port 3000
      app.listen(3000, () => {
        console.log("Ecoute de l'API sur le port 3000!")
      })
    })
    // On récupère l'erreur
    .catch((err) => console.error("Could not connect to MongoDB", err))
}

main()
