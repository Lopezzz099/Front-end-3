import React, { Fragment, useState } from 'react'

const App = () => {
    const [message, setMessate] = useState("");
    const [secondMessage, setSecondMessage] = useState("")

    const handleOne = () => {
        setMessate("Hola camada 3")
    }

    const handleSecond = (value) => {
        setSecondMessage(value);
    }
    //readibility
    return (
        <div>
            <h1>Clase práctica 9</h1>
            <p>El mensaje uno: {message}</p>
            <button onClick={handleOne}>Obtener saludo</button>

            <ul>
                {
                    ["Jaider", "Ester", "Pedro", "Pablo"].map(name => (
                        <li key={name}>
                            <button onClick={() => handleSecond(name)}>Escoger person para saludar</button>
                        </li>
                    ))
                }
                <p>Este saludo es para: {secondMessage}</p>
            </ul>
        </div>
    )
}

export default App