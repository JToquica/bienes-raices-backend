const express = require("express");

//Crear la app
const app = express();
const port = 3000;

//Crear Routing
app.get("/", (req, res) => {
    res.send("Hola Mundo Prueba 3");
})

//Definir puerto de escucha
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})