const axios = require("axios");//axios es una biblioteca popular en JavaScript para realizar solicitudes HTTP desde el cliente o servidor.

axios
  .get("https://jsonplaceholder.typicode.com/posts")//es un método que realiza una solicitud GET a la URL especificada  devuelve una promesa
  .then((object) => console.log(object.datos))//con el .the encadenamos lo que nos devuelve el .get object.data contiene todos los objetos obtenidos de el servidor si no le ponemos el . data me muestra no solo la informacion si no todo con el .data accedemos a un array que contiene objetos
  .catch((error) => console.error(error));//esta linea guarda los errores en caso tal de que no encuentre algo 


  