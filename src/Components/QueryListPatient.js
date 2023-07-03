import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const QueryListPatient = () => {
  const { idPatient } = useContext(UserContext);

  return (
    <div>
      <h1>Paciente</h1>
      { idPatient }
    </div>
  )
}

export default QueryListPatient