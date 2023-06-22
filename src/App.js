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

  const alterDoctors = () => {
    setNivelUser(access[1].name)
  }

  const alterPatients = () => {
    setNivelUser(access[2].name)
  }

  return (
    <>
      {nivelUser === 'Redirect' && <RedirectUser alterDoctors={alterDoctors} alterPatients={ alterPatients } />}
      {nivelUser === 'Doctors' && <Doctors cor="vermelho"  />}
      {nivelUser === 'Patients' && <Patients />}
    </>
  );
}

export default App;
