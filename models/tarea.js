import { randomUUID } from "crypto";

class Tarea{
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        this.id = randomUUID();
        this.desc = desc;



    }


}

export {Tarea};