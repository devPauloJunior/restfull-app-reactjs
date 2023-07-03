import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useDoctors } from "../hooks/useDoctors";
import { useAppointments } from "../hooks/useAppointments";


const QueryListDoctor = () => {
  const { doctors } = useDoctors([]);
  const { appointments } = useAppointments([]);
  const { idDoctor } = useContext(UserContext);
  const [name, setName] = useState([])

  return (
    <div>
      <h2>Dashboard Doutor</h2>
      {doctors.filter(doctor => doctor.doctor_id == idDoctor).map(filterDoctor => (
        <div key={filterDoctor.doctor_id}> Olá {filterDoctor.doctor_first_name}  </div>
      ))}

      <h3>Seus Pacientes</h3>
      <p> Abaixo lista de consultas marcadas para você: <strong> { name } </strong></p>
      <table border={"2px"} cellPadding={"5px"}>
        <thead>
          <tr>
            <th>ID da Consulta</th>
            <th>Nome do Paciente</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {appointments.filter(appointment => appointment.appointments_doctor  == idDoctor).map(filterAppointment => ( <tr key={filterAppointment.appointments_id}>
                <td>{filterAppointment.appointments_id}</td>
                <td>{filterAppointment.appointments_patient}</td>
                <td>{filterAppointment.appointments_title}</td>
                <td>{filterAppointment.appointments_desc}</td>
                <td><button>Atender</button>
                  <button>Deletar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}

export default QueryListDoctor