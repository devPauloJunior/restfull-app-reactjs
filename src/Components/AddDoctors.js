import React from 'react'

const AddPatients = ({handleAddSubmit, handleCancelButton}) => {
  return (
    <>
    <h3>Adicinar Paciente:</h3>
    <form onSubmit={handleAddSubmit}>
        Nome do Paciente <input type='text' name='patient_first_name' />
        Sobrenome do Paciente <input type='text' name='patient_last_name' />
        Tipo Sanguíneo <input type='text' name='patient_type_blood' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelButton}>Cancel</button>
    </form>
    </>
  )
}

export default AddPatients