import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js';
import { v4 as uuidv4 } from 'uuid';
import { Tareas } from './models/tareas.js';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 
console.clear();
 
const main = async () => {
  let opt = '';
  do {
   opt = await inquirerMenu();
   console.log({ opt });
    tareas._listado[tarea.id] = tarea;
    console.log(tareas);


    await pausa();
  } while (opt !== '');
};
 
main();