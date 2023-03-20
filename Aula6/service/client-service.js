//"Open" metodo que recibe dos patametros (metodo,url)

/*CRUD  -- Metodos Http
Create  -- post
Read    -- get
Update  -- put/patch
Delete  -- delete

*/
/*const listaClientes = () =>{
    const promise = new Promise((resolve, rejact) =>{
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3000/perfil");
        http.send();
        http.onload = () => {
          const response = JSON.parse(http.response);
          if (http.status >= 400){
            rejact(response);
          }else{
            resolve(response);
          }
        };

    });

    return promise;
};*/


// Fetch API
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
    listaClientes,
};