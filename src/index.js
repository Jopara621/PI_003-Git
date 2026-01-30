const express = require("express");
const app = express();
const morgan = require("morgan");

//middlewares
app.use(morgan("dev"));

app.set("port", process.env.PORT || 8080);



/*function leerPuerto(){
    console.log("hola desde el puerto" + app.get("port"));
}*/

//routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
    console.log("hola desde el puerto " + app.get("port"))
});