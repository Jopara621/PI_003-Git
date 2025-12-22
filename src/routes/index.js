const { Router } = require("express");
const router = Router();

//Rutas GET
router.get("/rutaGet1", (req, res) => {
    res.send("hola soy la 1º ruta get");
    console.log("hola en la consola de node, desde la 1º ruta GET en el servidor");
});

router.get("/rutaGet2", (req, res) => {
    res.send("hola soy la 2º ruta get");
    console.log("hola en la consola de node, desde la 2º ruta GET en el servidor");
});



module.exports = router;