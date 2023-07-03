import { useContext } from "react"
import { useDoctors } from '../hooks/useDoctors';
import { usePatients } from '../hooks/usePatients';
import { UserContext } from "../context/UserContext";

const Auth = () => {
    const { doctors } = useDoctors([]);
    const { patients } = usePatients([]);
    const { idDoctor, idPatient, handleIdDoctor, handleIdPatient, nivelUser } = useContext(UserContext);

    return (
        <>
            <h1>Autenticador</h1>
            <div>
                {idDoctor} - { nivelUser } - 
                Doutores:  <select onChange={ handleIdDoctor } >
                    <option>Selecione um Doutor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor.doctor_id} value={doctor.doctor_id}>{doctor.doctor_first_name}</option>
                    ))}
                </select>
            </div>
            <div>
                {idPatient} -
                Paciente:  <select onChange={handleIdPatient} >
                    <option>Selecione um Paciente</option>
                    {patients.map((patient) => (
                        <option key={patient.patient_id} value={patient.patient_id}>{patient.patient_first_name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Auth