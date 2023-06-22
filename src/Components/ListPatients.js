import React, { useEffect, useState } from 'react'
import { getpatients, addpatients, editpatients, deletepatients } from '../Service/ApiService'
import AddPatients from './AddPatients';
import EditPatients from './EditPatients';

const ListPatients = () => {
	const [ patients, setPatients ] = useState([])
	const [ showAddPatientsForm, setShowAddPatientsForm ] = useState(false)
	const [ showEditPatientsForm, setShowEditPatientsForm ] = useState(false)
	const [ selectedEditData, setSelectedEditData ] = useState()

	useEffect(() => {
		let mount = true
		getpatients()
		.then(res => { 
					// console.log("Reponse da API", res)
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

	const handleEditButton = (patient) => {
		setSelectedEditData(patient)
		// console.log("patient selected is", patient)
		setShowEditPatientsForm(true)
		setShowAddPatientsForm(false)
	}

	const handleEditSubmit = (e, patient_id) => {
		editpatients(patient_id, e.target)
		.then(res => {
			setPatients([res])
		})
	}

	const handleDeleteButton = (patient_id) => {
		// console.log(patient_id)
		deletepatients(patient_id)
		.then(res => {
			setPatients(patients.filter(p=> p.patient_id !== patient_id))
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
										<td><button onClick={()=>handleEditButton(patient)}>Editar</button>
											<button onClick={() => handleDeleteButton(patient.patient_id)}>Deletar</button>
											</td>
									</tr> )
							})}
						</tbody>	
			</table>
			<button onClick={() => setShowAddPatientsForm(true)}>Adicionar Paciente</button>
			{showAddPatientsForm && <AddPatients handleAddSubmit={handleAddSubmit} handleCancelButton = {handleCancelButton} />}
			{showEditPatientsForm && <EditPatients handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
		</>
        )
    }

export default ListPatients