import http from 'http';


import routes from './routes.js';

const webServer = http.createServer(routes.handler);

webServer.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
