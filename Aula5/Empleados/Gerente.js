import Empleado from "./Empleado.js";

class Gerente extends Empleado{

    constructor(nombre, dni,salario){

        super(nombre, dni, salario);

    }

    verBonificacion(){
        
        return super._verBonificacion(5);
    }

}


export default Gerente;