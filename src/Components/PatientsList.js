import React, { useEffect, useState } from 'react'
import { getpatients, addpatients } from '../Service/ApiService'
import AddPatients from './AddPatients';

const PatientsList = () => {
	const [ patients, setPatients ] = useState([])
	const [ showAddPatientsForm, setShowAddPatientsForm ] = useState(false)

	useEffect(() => {
		let mount = true
		getpatients()
		.then(res => { console.log("Reponse da API", res)
					setPatients(res)
					return() => mount = false
		})
	}, [])

	const handleAddSubmit = (e) => {
		addpatients(e.target)
		.then(res => {
			setPatients([res])
		})
	}

	function handleCancelButton() {
		setShowAddPatientsForm(false)
	}

	return (
        <>
            <h3>LISTA DE PACIENTES</h3>
			<table border={"2px"} cellPadding={"5px"}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nome do Paciente</th>
								<th>Sobrenome do Paciente</th>
								<th>Tipo Sanguíneo</th>
								<th>Ação</th>
							</tr>
						</thead>	
						<tbody>
							{patients.map(patient => {
									return (
									<tr key={patient.patient_id}>
										<td>{patient.patient_id}</td>
										<td>{patient.patient_first_name}</td>
										<td>{patient.patient_last_name}</td> 
										<td>{patient.patient_type_blood}</td> 
										<td>Edit
											{/* <button onClick={() => handleEditButton(patients)}>Editar</button>
											<button onClick={() => handleDeleteButton(patients.id)}>Deletars</button> */}
											</td>
									</tr> )
							})}
						</tbody>	
			</table>
			<button onClick={() => setShowAddPatientsForm(true)}>Adicionar Paciente</button>
			{showAddPatientsForm && <AddPatients handleAddSubmit={handleAddSubmit} handleCancelButton = {handleCancelButton} />}
		</>
        )
    }

export default PatientsList