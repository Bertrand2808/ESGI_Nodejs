

 **Introduction aux APIs en JavaScript**

Comprendre les APIs et leur utilité
    Les API (Application Programming Interface) sont des interfaces de programmation qui permettent à des applications de communiquer entre elles. Les API peuvent être utilisées pour accéder à des services web et échanger des données.

![](assets/api-rest-architecture.png)

En JavaScript, les **APIs** sont souvent utilisées pour accéder à des services web tels que des services de géolocalisation, des services de météo, des services de médias sociaux, des services de paiement en ligne et bien d'autres. Les APIs permettent à une application JavaScript de communiquer avec ces services web et de récupérer des données pour les afficher ou les utiliser dans l'application.

L'utilisation d'API en JavaScript est devenue très populaire ces dernières années avec l'émergence de l'architecture **RESTful**. Les services web **RESTful** fournissent une interface simple et uniforme pour accéder aux ressources et effectuer des opérations sur ces ressources. Les API RESTful sont généralement implémentées en utilisant les protocoles HTTP et HTTPS, qui sont les protocoles standards pour les communications sur le web.

Les principes REST : ('The design of loosely coupled web applications'):

- Uniform interface:
    ``` javascript
    const express = require('express');
    const app = express();

    // Define a resource at the endpoint '/users'
    app.get('/users', (req, res) => {
    // Return a list of all users
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' }
    ]);
    });

    // Define a resource at the endpoint '/users/:id'
    app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Return the user with the given ID
    res.json({ id: userId, name: 'User ' + userId });
    });

    // Define a resource at the endpoint '/users' for creating new users
    app.post('/users', (req, res) => {
    // Create a new user with the data in the request body
    const newUser = req.body;
    // Return the new user with its generated ID
    res.json({ id: 4, ...newUser });
    });

    // Define a resource at the endpoint '/users/:id' for updating an existing user
    app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Update the user with the given ID using the data in the request body
    const updatedUser = req.body;
    // Return the updated user
    res.json({ id: userId, ...updatedUser });
    });

    // Define a resource at the endpoint '/users/:id' for deleting an existing user
    app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Delete the user with the given ID
    // Return a success message
    res.json({ message: 'User ' + userId + ' has been deleted.' });
    });

    // Start the server
    app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    });
    ```

    Dans l'exemple précédent nous avons défini un endpoint sur la route '/users' afin de récupérer une liste de tous les utilisateurs, une autre ressource à l'endpoint 'users/:id' pour récupérer un utilisateur unique par ID, et des ressources supplémentaires sur la même route pour créer, supprimer et mettre à jour des utilisateurs. Ceci est un bon exemple de l'uniformicité de l'interface de notre API pour chacune des ressources. On suivra ce schéma général pour toutes les ressources : un endpoint qui inclut un parametre ID pour récupérer une ressource unique, et les méthodes qui permettent de créer, mettre à jour et supprimer une ressource utilisent toutes la même route. 

- Client - Server:
    Le principe de séparation client-serveur est l'un des principes clés de la conception d'API RESTful. Il suggère que le client et le serveur doivent être séparés l'un de l'autre afin d'améliorer la portabilité de l'interface utilisateur sur différents types de plates-formes et de simplifier l'architecture globale. Plus précisément, le client et le serveur sont des entités distinctes qui communiquent via une interface (comme une API RESTful) en utilisant un protocole standardisé (comme HTTP). Cette séparation permet au client de ne pas être préoccupé par les détails de stockage de données et de traitement, tandis que le serveur peut être conçu pour être extensible et évolutif sans affecter l'interface utilisateur. En conséquence, le client et le serveur peuvent être développés indépendamment l'un de l'autre et évoluer séparément, à condition qu'ils respectent l'interface standardisée convenue.
- Stateless
  Le principe de Stateless (sans état) est un autre principe clé de la conception d'API RESTful. Il stipule que chaque requête HTTP doit contenir toutes les informations nécessaires pour comprendre la requête et y répondre, sans aucune référence à un état précédent ou de contexte de session stocké sur le serveur. Cela signifie que le serveur n'a pas besoin de garder une trace de l'état de la session pour chaque client, ce qui rend l'architecture RESTful plus légère et plus facile à évoluer. Le client doit inclure toutes les informations nécessaires à la requête, telles que les identifiants d'authentification et les paramètres de requête, afin que le serveur puisse traiter la requête de manière autonome. En conséquence, chaque requête est considérée comme une transaction indépendante, ce qui facilite la mise en cache des réponses et la distribution de la charge sur plusieurs serveurs.
- Cacheable
- Layered system
- Code on demand (optional)



Pour utiliser une API en JavaScript, vous devez souvent effectuer des requêtes HTTP ou HTTPS pour envoyer des demandes à l'API et récupérer les données. Les requêtes HTTP peuvent être envoyées à l'aide de l'objet XMLHttpRequest ou de la méthode fetch(), qui sont des fonctionnalités intégrées à JavaScript pour effectuer des requêtes AJAX (Asynchronous JavaScript and XML).

En résumé, les API sont des interfaces de programmation qui permettent à des applications de communiquer entre elles. Les API sont largement utilisées en JavaScript pour accéder à des services web RESTful et récupérer des données pour les afficher ou les utiliser dans une application. Les requêtes HTTP sont souvent utilisées pour envoyer des demandes à l'API et récupérer les données, et peuvent être envoyées à l'aide de l'objet XMLHttpRequest ou de la méthode fetch().

-   Les différentes types d'API : Web, REST, JSON, etc.
En JavaScript, il existe plusieurs types d'API qui peuvent être utilisées pour communiquer avec des services web et échanger des données. Voici quelques-uns des types d'API les plus couramment utilisés en JavaScript :

    **API Web** : Les API Web fournissent une interface pour accéder à des services web via des protocoles tels que HTTP ou HTTPS. Les services web peuvent fournir des données dans différents formats, tels que JSON, XML ou CSV. En JavaScript, l'objet XMLHttpRequest ou la méthode fetch() sont souvent utilisés pour effectuer des requêtes HTTP et récupérer les données fournies par les API Web.

    **API REST** : Les API RESTful (Representational State Transfer) sont une approche pour concevoir des services web qui suivent les principes REST. Les API RESTful fournissent une interface uniforme pour accéder à des ressources via des méthodes HTTP standard telles que GET, POST, PUT et DELETE. Les API RESTful retournent souvent des données au format JSON.

    **API JSON** : Les API JSON fournissent des données dans le format JSON (JavaScript Object Notation). Le format JSON est léger et facile à lire et à écrire, ce qui le rend idéal pour les services web. Les API JSON peuvent être utilisées pour fournir des données telles que des listes d'éléments, des détails de produits, des résultats de recherche et bien d'autres.

    **API OAuth** : Les API OAuth sont utilisées pour autoriser l'accès à des ressources protégées sur des services web. OAuth permet aux utilisateurs d'autoriser des applications tierces à accéder à leurs ressources sans partager leur mot de passe. Les API OAuth sont souvent utilisées pour accéder à des services tels que les réseaux sociaux, les services de stockage en nuage et les plateformes de paiement en ligne.

    En résumé, en JavaScript, il existe plusieurs types d'API qui peuvent être utilisées pour communiquer avec des services web et échanger des données, tels que les API Web, REST, JSON et OAuth. Chacun de ces types d'API fournit une interface pour accéder à des ressources et échanger des données en utilisant des protocoles standard tels que HTTP et HTTPS. Les développeurs peuvent choisir le type d'API le plus approprié en fonction des besoins de leur application et des services auxquels ils souhaitent accéder.




Notre objectif a la fin du prochain module Angular est de comprendre toutes les briques de la stack applicative MEAN : 
![](assets/mean-stack-tech.png).

Nous comprendrons  déjà le trajet des données de la stack entiere des la fin du module Api avec Node JS.

![](assets/mean-stack-flow.png)



-   Les outils pour interroger les APIs

    Il existe plusieurs outils pour interroger les API en JavaScript. Voici quelques-uns des outils les plus couramment utilisés :

    **Postman** : Postman est un outil de test d'API populaire qui permet aux développeurs de tester, de déboguer et de documenter des API. Il offre une interface graphique conviviale pour envoyer des requêtes HTTP et HTTPS à des API, et permet de visualiser facilement les réponses de l'API.

    **cURL** : cURL est un outil de ligne de commande qui permet d'envoyer des requêtes HTTP et HTTPS à des API. Il est souvent utilisé pour automatiser des tâches et pour tester des API depuis des scripts.

    **Insomnia** : Insomnia est un outil de test d'API qui offre une interface utilisateur facile à utiliser pour envoyer des requêtes HTTP et HTTPS à des API. Il permet également de visualiser facilement les réponses de l'API et de gérer les environnements de test.

    **Paw** : Paw est un outil de test d'API pour macOS qui offre une interface utilisateur intuitive pour tester, déboguer et documenter des API. Il prend en charge les requêtes HTTP et HTTPS, ainsi que les protocoles WebSocket et GraphQL.

    **JavaScript natif** : En JavaScript, les développeurs peuvent également utiliser l'objet XMLHttpRequest ou la méthode fetch() pour envoyer des requêtes HTTP et HTTPS à des API. Ces fonctionnalités sont intégrées à JavaScript et ne nécessitent pas d'installation supplémentaire.

    En résumé, il existe plusieurs outils pour interroger les API en JavaScript, tels que Postman, cURL, Insomnia, Paw et les fonctionnalités intégrées à JavaScript telles que l'objet XMLHttpRequest et la méthode fetch(). Les développeurs peuvent choisir l'outil le plus approprié en fonction de leurs besoins et de leurs préférences personnelles.