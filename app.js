const { SerialPort } = require("serialport");

//Web Server
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const port = new SerialPort({
  path: "COM5",
  baudRate: 9600,
});


function obtenerDato(req, res){
    const datosMensaje = req.body.mensaje;

    port.write(datosMensaje)
    
    return res.send("Los recibi");
}

app.post("/enviar-dato",obtenerDato )
app.listen(8080)
port.on("data", detectarMensajeSerial);

function detectarMensajeSerial(bytes){
    const mensajeSerial = bytes.toString().trim()
    console.log(mensajeSerial)
}

