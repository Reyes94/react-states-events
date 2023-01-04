import { useState } from 'react'
import Input from './components/Input'
import Boton from './components/Boton'

const App = () => {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")
    if (!name.trim() || !password.trim()) {
      return setError("Llena todos los campos");
    } 
    alert("Formulario enviado con éxito")
  };


  const handleName = (e) => {      //se vuelve a validar primer input, porque validación anterior depende de "Submit"
    setError("")               //Si contraseña es incorrecta, se valida de igual forma que primer input no esté vacío
    if(!e.target.value.trim()){ 
    return setError("Llena todos los campos");
    }
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const PasswordValidation = () => {    // Para informar a usuario que clave es incorrecta
    if (password.length >= 6){          // por tener dos "if" no se puede utilizar operador ternario después del form
      if (password === "252525"){
        return <Boton></Boton>
      }else{
        return (<p className='error'>Contraseña incorrecta</p>)
      }
    }
  }

  const handlePasswordValidation= PasswordValidation()

  return (
    <div className="container">
      <h1 className='text-center pt-4 pb-4'>Desafío Estado de los componentes y eventos</h1>
      <form id="form1" onSubmit={handleSubmit}>
        <Input
          action={handleName}
          value={name}
          text="Nombre"
          type="text"
          placeholder="Ingresa un texto" />

        <Input
          action={handlePassword}
          value={password}
          text="Contraseña"
          type="password"
          placeholder="Ingresa contraseña"
        />

      {handlePasswordValidation}    {/* Muestra Boton.jsx si la contraseña es correcta */}
                                    {/* Muestra msje "Contraseña incorrecta" si la clave ingresada no es "252525" */}

      </form>

      <p className='error'>{error}</p>

    </div>
  )
}


export default App
