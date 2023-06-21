import React from 'react'

const EditPatients = ({handleEditSubmit, selectedEditData}) => {
  return (
    <>
    <h3>EDITAR PACIENTES:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.patient_id)}>
      Nome do Paciente<input type='text' name='patient_first_name' defaultValue={selectedEditData.patient_first_name}/>
      Sobrenome do Paciente <input type='text' name='patient_last_name' defaultValue={selectedEditData.patient_last_name} />
      Tipo Sanguíneo <input type='text' name='patient_type_blood' defaultValue={selectedEditData.patient_type_blood} />
      <button type='submit'>Editar Paciente</button>
    </form>
    </>
  )
}

export default EditPatients