require('colors');
const inquirer = require('inquirer');
const { listenerCount } = require('process');




const menuOpts = [{


    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: ['opt1', 'opt2', 'opt3']
}];

const inquirermenu = async () =>{
console.clear();
console.log('=========================='.green);
console.log('  Seleccione una opcion  '.green);
console.log('==========================\n'.green);

const opt = await inquirer.createPrompt (preguntas);
return (opt);




}
module.exports = {
inquirermenu

}