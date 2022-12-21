require("colors");
const { CLIENT_RENEG_LIMIT } = require("tls");
const { mostrarmenu, pausa } = require("./mensajes");

console.clear();    


const main = async () => { 
    console.log('hola mundo');
   
    let opt = '';
    do{
        opt = await mostrarmenu();
        console.log({pausa});
        
        opt = pausa();



    }while(
        opt !== '0'

    );
   
    pausa();


}
main();