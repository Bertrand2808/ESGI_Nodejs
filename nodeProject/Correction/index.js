import http from 'http';
import fs from 'fs';
// Creer un serveur web avec le module http embarque
// http://localhost:3000/ doit retourner une page web 
// avec un formulaire contenant un input type text
// valider le form envoie une req post a l'url /message
// l'app doit ecrire le message au sein d'un fichier txt
// grace au module fs embarque
// la reponse http redirige vers '/' 


const webServer = http.createServer((request, response ) => {
    const method = request.method;
    const url = request.url;
    if (url === '/') {
        console.log('je passe par la')
        response.write('<html>')
        response.write('<head><title>Enter message</title></head>')
        response.write('<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Send</button></form></body>')
        response.write('</html>')
        return response.end();
    }

    if (url === '/message' && method ==='POST') {
        fs.writeFileSync('message.txt', 'test')
        const body = []
        request.on('data', (chunk) => {
            body.push(chunk)
        })
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', 'test')
            console.log('parsedBody: ', parsedBody)
        })
        response.statusCode = 302;
        response.setHeader('Location', '/')
        return response.end()
    }
})


webServer.listen(3000)
