import React, { useState } from 'react';
import RedirectUser from './Components/RedirectUser';
import Doctors from './Components/ListDoctors';
import Patients from './Components/ListPatients';

const  access = [
  { nivel: 1, name: "Redirect" },
  { nivel: 2, name: "Doctors" },
  { nivel: 3, name: "Patients" },
]

const App = () => {
  const [ nivelUser, setNivelUser ] = useState(access[0].name);
  const [ idDoctor, setIdDoctor ] = useState('');

  const handleDoctorUpdate = (e) => {
    console.log(e.target.value);
    setIdDoctor = e.target.value;
    setNivelUser(access[1].name);
  }

  const handlePatientUpdate = (e) => {
    console.log(e.target.value);
    setNivelUser(access[2].name);
  }

  return (
    <>
      {nivelUser === 'Redirect' && <RedirectUser handlePatientUpdate={ handlePatientUpdate } handleDoctorUpdate={handleDoctorUpdate}  />}
      {nivelUser === 'Doctors' && <Doctors tipoDeAcesso="doctors" />}
      {nivelUser === 'Patients' && <Patients tipoDeAcesso="patients" />}
    </>
  );
}

export default App;
