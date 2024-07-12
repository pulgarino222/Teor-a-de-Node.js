//La principal diferencia entre ambas es que require es síncrono y import es asíncrono. Además, import es una característica de ECMAScript, mientras que require es una característica de Node.js


// const fs = require("fs");
import fs from "fs" //fs es file sistem  funciones para trabajar con el sistema de archivos del sistema operativo.

fs.readFile("require-example.mjs", "utf8", (err, data) => {//err va a guardar todos los errores en caso de que haya alguno y el data va a guardar el contenido de todo el archivo en texto esta funcion es llamada callback
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});




