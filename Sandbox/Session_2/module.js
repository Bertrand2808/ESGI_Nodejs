import fs from 'fs';

// export nommé
export const printMessage = (message) => {
    console.log('message', message);
}

export const writeMessage = (message) => {
    fs.writeFileSync('message.txt', message);
}


const utils = {
  // export par défaut
  printMessage: printMessage,
}

// autre façon d'écrire l'export par défaut
export default utils;
