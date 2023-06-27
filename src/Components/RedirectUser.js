import './RedirectUser.css';
import React, { useState } from 'react';
import { usePatients } from '../hooks/usePatients';
import { useDoctors } from '../hooks/useDoctors';

const RedirectUser = ({ handleDoctorUpdate, handlePatientUpdate }) => {
  const { patients } = usePatients([]);
  const { doctors } = useDoctors([]);
  
  // console.log(patients[0]);
  // console.log(doctors[0]);

  return (
    <div className='redirect'>
        <h1>O INICIO</h1>
        <p>Me diga quem é você para acessar?</p>
        Pacientes:  <select onChange={ handlePatientUpdate }>
          { patients.map((patient) => (
            <option key={patient.patient_id} value={ patient.patient_id }>{ patient.patient_first_name }</option>
          ))}
        </select>
            <br />
        Doutores:  <select onChange={ handleDoctorUpdate }>
          { doctors.map((doctor) => (
            <option key={doctor.doctor_id} value={ doctor.doctor_id }>{ doctor.doctor_first_name }</option>
          ))}
        </select>

        {/* <button onClick={ alterDoctors }>DOUTORES</button>
        <button onClick={  }>PACIENTES</button> */}
    </div>
  )
}

export default RedirectUser