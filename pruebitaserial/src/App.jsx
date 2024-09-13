import axios from "axios"
import { useState } from "react"
function App() {
  const [cargando, setCargando] = useState(false)
  const enviarDato = async (numero) => {
    try {
      setCargando(true)
      await axios.post("http://localhost:8080/enviar-dato", {
        mensaje: numero.toString()
      })
    } catch (error) {
      console.log(error)
    }
    finally{
      setCargando(false)
    }
  }
  return (
    <>
      <button disabled={cargando} onClick={() => enviarDato(1)}>Enviar 1</button>
      <button disabled={cargando} onClick={() => enviarDato(2)}>Enviar 2</button>
      <button disabled={cargando} onClick={() => enviarDato(3)}>Enviar 3</button>
    </>
  )
}

export default App
