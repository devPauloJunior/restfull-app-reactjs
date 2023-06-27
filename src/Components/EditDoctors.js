import React from 'react'

const EditDoctors = ({handleEditSubmit, selectedEditData}) => {
  return (
    <>
    <h3>EDITAR DOUTORES:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e, selectedEditData.doctor_id)}>
      Nome do Paciente<input type='text' name='doctor_first_name' defaultValue={selectedEditData.doctor_first_name}/>
      Sobrenome do Paciente <input type='text' name='doctor_last_name' defaultValue={selectedEditData.doctor_last_name} />
      Tipo Sanguíneo <input type='text' name='doctor_type_blood' defaultValue={selectedEditData.doctor_type_blood} />
      <button type='submit'>Editar Paciente</button>
    </form>
    </>
  )
}

export default EditDoctors