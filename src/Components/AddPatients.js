import React from 'react'
import { Doctors, useDoctors } from '../hooks/useDoctors'

const AddPatients = ({ handleAddSubmit, handleCancelButton }) => {
  const { doctors } = useDoctors([]);

  console.log(doctors[0]);

  return (
    <>
    <h3>Adicinar Paciente:</h3>
    <form onSubmit={handleAddSubmit}>
        Nome do Paciente <input type='text' name='patient_first_name' />
        Sobrenome do Paciente <input type='text' name='patient_last_name' />
        Tipo Sanguíneo <input type='text' name='patient_type_blood' />
        Meu Doutor  <select>
          { doctors.map((doctor) => (
            <option key={doctor.doctor_id} value={ doctor.doctor_id }>{ doctor.doctor_first_name }</option>
          ))}
        </select>
        <button type='submit'>ADD</button>
        <button onClick={handleCancelButton}>Cancel</button>
    </form>
    </>
  )
}

export default AddPatients