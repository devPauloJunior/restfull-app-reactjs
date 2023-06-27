import React from 'react'

const AddDoctors = ({handleAddSubmit, handleCancelButton}) => {
  return (
    <>
    <h3>Adicinar Doctor:</h3>
    <form onSubmit={handleAddSubmit}>
        Nome do Doctors <input type='text' name='doctor_first_name' />
        Sobrenome do Doctors <input type='text' name='doctor_last_name' />
        Tipo Sanguíneo <input type='text' name='doctor_type_blood' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelButton}>Cancel</button>
    </form>
    </>
  )
}

export default AddDoctors