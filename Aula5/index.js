/*Importación de clases*/
import Cliente from './Cliente.js';
import Empleado from './Empleados/Empleado.js';
import Gerente from './Empleados/Gerente.js';
import Director from './Empleados/Director.js';
import SistemaAutenticacion from './SistemaAutenticacion.js';

const empleado = new Empleado('Juan Perez', '12532562',10000);
const cliente = new Cliente("Ana Mendez", "45324562",'12000');
const gerente = new Gerente("Carlos Zapata", "1544525", 20000);
const director = new Director("Maria Acosta", "82562",15000);

empleado.asignarClave("456123");
console.log(SistemaAutenticacion.login(empleado,"456123"));

cliente.asignarClave("456123");
console.log(SistemaAutenticacion.login(cliente, "456123"));

gerente.asignarClave("456123");
console.log(SistemaAutenticacion.login(gerente, "456123"));

director.asignarClave("456123");
console.log(SistemaAutenticacion.login(director, "456123"));