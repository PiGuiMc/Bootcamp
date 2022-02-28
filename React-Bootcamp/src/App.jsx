import React from 'react'
import Button from './Button'
import './index.css'

function soma(a,b){
  alert(a+b)
}

function App(){
  return (
    <div className='App'>
      Hello world
      <Button onClick={() => soma(2,2)} name="guilherme"/>
    </div>
  )
}

export default App