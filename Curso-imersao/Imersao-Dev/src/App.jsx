import { useState } from 'react'
import './styles/App.css'
import Chutar from './components/js/Chutar'

function App() {

  return (
    <div className="App">
      <form>
        <h1>Acerte o valor</h1>
        <label>Digite o valor de 0 - 10: </label>
        <input id="valor" type="number"/>

        <button onClick={Chutar}>Registar</button>

        <p id='teste'></p>
      </form>
      
    </div>
  )
}
export default App