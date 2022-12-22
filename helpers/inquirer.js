import inquirer from 'inquirer';
 
import colors from 'colors';
 
const menuOpts = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Seleccione una opción',
    choices: [
     {
            value: '1',
            name:  `${'1.'.green}Crear Tarea`
     },
     {
            value:'2',
            name:`${'1.'.green}Listar Tareas`
     },
     {
            value:'3',
            name: `${'3.'.green}Listar Tareas Completadas`
     },
     {
            value:'4',
            name:`${'4.'.green} Listar Tareas Pendientes`
     },
     {
            value:'5',
            name:`${'5.'.green} Completar Tarea(s)`
     },
     {
            value:'6',
            name:`${'6.'.green} Borrar Tarea`
     },
     {
            value:'0',
            name:`${'0.'.green} Salir`
     }
    ],
  },
];
 
const inquirerMenu = async () => {
  //console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción'.white);
  console.log('===========================\n'.green);
 
  const {opcion} = await inquirer.prompt(menuOpts);
 
  return opcion;
};
const pausa = async() =>{
    const question = [{
        type: 'input', 
        name: 'Enter',
        message: `Presione ${'Enter'.green} para continuar`
        
    }
    ];
    console.log('\n');
    
    await inquirer.prompt(question)






}
 
export { inquirerMenu,
        pausa};
