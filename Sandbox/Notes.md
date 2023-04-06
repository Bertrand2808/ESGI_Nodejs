# ESGI NODE JS

### Commencer un projet Node

* Initier npm :

```
npm init
```

Cela va initier npm + créer un fichier package.json

* Installer un module :

```bash
npm install `<package>`
npm i `<package>`
```

* Lancer un fichier js :

```bash
npm run dev
```

### Export un fichier

à noter :
*1 seul export defaut par fichier
x export nommé par fichier*

### Express

Voici un fichier de base pour la dépendence Express, il permet de créer un serveur web http plus simplement et de passer par plusieurs requetes.

```js
import express from 'express'

const app = express()
app.use((req, res, next) => {
  console.log('Je suis dans le middleware')
  next()
})

app.use((req, res, next) => {
  console.log('Je suis dans le middleware')
  next()
})

// On ne peut avoir qu'un seul couple methode/route par app
app.get('/', (req, res, next) => {
  res.send('Hello ESGI')
})
app.listen(3000)
```

## Authors

- [@Bertrand2808](https://www.github.com/Bertrand2808)
