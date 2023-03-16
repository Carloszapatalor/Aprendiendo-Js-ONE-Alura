import Empleado from "./Empleado.js";

class Director extends Empleado {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

 verBonificacion(){
        
        return super._verBonificacion(10);
    }

}
export default Director;