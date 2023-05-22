import React from 'react'

const AddUsers = ({handleAddSubmit, handleCancelButton}) => {
  return (
    <>
    <h3>Adicinar Usário:</h3>
    <form onSubmit={handleAddSubmit}>
        Nome de Usuário <input type='text' name='username' />
        E-mail <input type='text' name='email' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelButton}>Cancel</button>

    </form>
    </>
  )
}

export default AddUsers