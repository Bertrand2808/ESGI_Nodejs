import jwt from 'jsonwebtoken';

// Vérification du token d'authentification de l'utilisateur pour les routes protégées

export const isAuthentified = (req, res, next) => {
  // les jwt sont sur un header Authorization
  // sous la forme : Bearer token
  // { Authorization: 'Bearer token' }

  const authentificationsHeader = req.get('Authorization');
  if (!authentificationsHeader) {
    // Gestion de l'absence du header Authorization
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  const token = authentificationsHeader.split(' ')[1];
  let validatedToken
  try {
    validatedToken = jwt.verify(token, 'un super secret qui provient du fichier .env');
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }if(!validatedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = validatedToken.userId;
}

e
