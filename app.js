require("colors");
const { mostrarmenu, pausa } = require("./helpers/mensajes");

console.clear();    


const main = async () => { 
    console.log('hola mundo');
   
    let opt = '';
    do{
        opt = await mostrarmenu();
        console.log({opt});
        if(opt !== 0)
        await pausa();

    }while(  opt !== '0' );
   
    //pausa();


}
main();