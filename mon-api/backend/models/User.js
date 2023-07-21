const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator'); // On importe le package mongoose-unique-validator pour s'assurer que deux utilisateurs ne peuvent pas utiliser la même adresse e-mail

/*
  * Création du schéma de données pour les utilisateurs de l'application
  * username: nom d'utilisateur
  * password: mot de passe
  * required: obligatoire
  * unique: unique
*/
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // unique: true empêche plusieurs utilisateurs d'utiliser la même adresse e-mail
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator); // On applique le plugin avant de créer le modèle pour s'assurer qu'aucun utilisateur ne peut utiliser la même adresse e-mail

/*
  * On utilise la méthode pre-save de mongoose pour hash le mot de passe avant de l'enregistrer dans la base de données
  * On utilise la fonction bcrypt.hash() pour hasher le mot de passe
*/

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema); // On crée le modèle de données pour les utilisateurs
module.exports = User; // On exporte le modèle pour pouvoir l'utiliser dans d'autres fichiers de notre projet
