const { Router } = require("express");
const router = Router();

//Rutas GET
router.get("/rutaGet1", (req, res) => {
    res.send("hola soy el usuario GranMonoBaby");
    console.log("hola en la consola de node, desde la 1º ruta GET en el servidor");
});

router.get("/rutaGet2", (req, res) => {
    res.send("hola soy el usuario Taez");
    console.log("hola en la consola de node, desde la 2º ruta GET en el servidor");
});

router.get("/rutaGet3", (req, res) => {
    res.send("hola soy el usuario Antoga");
    console.log("hola en la consola de node, desde la 3º ruta GET en el servidor");
});

router.get("/rutaGet4", (req, res) => {
    res.send("hola soy el usuario Adalga");
    console.log("hola en la consola de node, desde la 4º ruta GET en el servidor");
});

router.get("/rutaGet5", (req, res) => {
    res.send("hola soy el usuario Gabu");
    console.log("hola en la consola de node, desde la 5º ruta GET en el servidor");
});

module.exports = router;