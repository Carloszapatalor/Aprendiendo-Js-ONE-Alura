const http = new XMLHttpRequest();


//"Open" metodo que recibe dos patametros (metodo,url)

/*CRUD  -- Metodos Http
Create  -- post
Read    -- get
Update  -- put/patch
Delete  -- delete

*/
http.open("GET", "http://localhost:3000/perfil");
http.send();
http.onload = () =>{
    const data = http.response
    console.log(data);

}
