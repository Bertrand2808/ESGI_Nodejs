import { printMessage } from './module.js';
import { writeMessage } from './module.js';
import someUtilsFunction from './module.js';


export const routes = {
  handler : (request, response) => {
    const url = request.url;
    const method = request.method;

    if(url === '/') {
      // Afficher le formulaire html
      response.write('<html>');
      response.write('<head><title>Enter Message</title></head>');
      response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

      // Ecrire le message dans un fichier texte grâce au module fs
      return response.end();

    } else if (request.url === '/message' && request.method === 'POST') {
        // Écrire le message dans un fichier texte

        const body = [];

        // On récupère les données du formulaire
        request.on('data', (chunk) => {
            console.log(chunk);
            // On ajoute les données dans le tableau body
            body.push(chunk);
        })

        // On parse les données du tableau body
        request.on('end', () => {

          // On convertit les données en string
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          printMessage(message);
          writeMessage(message);
        })
        response.statusCode = 302;
        response.setHeader('Location', '/')
        return response.end()
      }
  }
}

export default routes;
