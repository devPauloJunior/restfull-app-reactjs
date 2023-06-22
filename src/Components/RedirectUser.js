import './RedirectUser.css';
import React from 'react'

const RedirectUser = ({ alterDoctors, alterPatients }) => {
  return (
    <div className='redirect'>
        <h1>O INICIO</h1>
        <p>Escolha como quer acessar o APP</p>
        <button onClick={ alterDoctors }>DOUTORES</button>
        <button onClick={ alterPatients }>PACIENTES</button>
    </div>
  )
}

export default RedirectUser