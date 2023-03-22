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

  const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });

    }

    const eliminarCliente = (id) => {
      return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
      })
    };

    const consultarCliente = (id) => {
      return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
    };

    const editarCliente = (nombre, email, id) => {
      return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
      }).then((respuesta) => console.log(respuesta)).catch((error) => console.log(error));
    };




export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    consultarCliente,
    editarCliente,
};


