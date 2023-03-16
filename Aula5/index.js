/*Importación de clases*/
import Cliente from './Cliente.js';
import CuentaCorriente from './Cuentas/CuentaCorriente.js';
import CuentaAhorro from './Cuentas/CuentaAhorro.js';
import CuentaNomina from './Cuentas/CuentaNomina.js';
import Empleado from './Empleados/Empleado.js';
import Gerente from './Empleados/Gerente.js';
import Director from './Empleados/Director.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '12532562',10000);
const gerente = new Gerente("Ana Mendez", "45324562",12000);
const director = new Director("Maria Acosta", "82562",15000);


console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());