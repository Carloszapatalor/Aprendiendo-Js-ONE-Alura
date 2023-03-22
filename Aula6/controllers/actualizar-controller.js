import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");


const verCliente = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href= "./error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    
    clientServices.consultarCliente(id).then((perfil) =>{
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });

};

verCliente();


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices.editarCliente(nombre, email, id).then (() =>{
     window.location.href = "./edicion_concluida.html";
  })
});