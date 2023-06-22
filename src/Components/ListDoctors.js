import React, { useEffect, useState } from 'react'
import { getdoctors, adddoctors, editdoctors, deletedoctors } from '../Service/ApiService'
import AddDoctors from './AddDoctors';
import EditDoctors from './EditDoctors';

const ListDoctors = () => {
	const [ doctors, setDoctors ] = useState([])
	const [ showAddDoctorsForm, setShowAddDoctorsForm ] = useState(false)
	const [ showEditDoctorsForm, setShowEditDoctorsForm ] = useState(false)
	const [ selectedEditData, setSelectedEditData ] = useState()

	useEffect(() => {
		let mount = true
		getdoctors()
		.then(res => { 
					// console.log("Reponse da API", res)
					setDoctors(res)
					return() => mount = false
		})
	}, [])

	const handleAddSubmit = (e) => {
		adddoctors(e.target)
		.then(res => {
			setDoctors([res])
		})
	}

	const handleEditButton = (doctor) => {
		setSelectedEditData(doctor)
		// console.log("doctor selected is", doctor)
		setShowEditDoctorsForm(true)
		setShowAddDoctorsForm(false)
	}

	const handleEditSubmit = (e, doctor_id) => {
		editdoctors(doctor_id, e.target)
		.then(res => {
			setDoctors([res])
		})
	}

	const handleDeleteButton = (doctor_id) => {
		// console.log(doctor_id)
		deletedoctors(doctor_id)
		.then(res => {
			setDoctors(doctors.filter(p=> p.doctor_id !== doctor_id))
		})
	}

	function handleCancelButton() {
		setShowAddDoctorsForm(false)
	}

	return (
        <>
            <h3>LISTA DE DOUTORES</h3>
			<table border={"2px"} cellPadding={"5px"}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nome do Doutor</th>
								<th>Sobrenome do Doutor</th>
								<th>Tipo Sanguíneo</th>
								<th>Ação</th>
							</tr>
						</thead>	
						<tbody>
							{doctors.map(doctor => {
									return (
									<tr key={doctor.doctor_id}>
										<td>{doctor.doctor_id}</td>
										<td>{doctor.doctor_first_name}</td>
										<td>{doctor.doctor_last_name}</td> 
										<td>{doctor.doctor_type_blood}</td> 
										<td><button onClick={()=>handleEditButton(doctor)}>Editar</button>
											<button onClick={() => handleDeleteButton(doctor.doctor_id)}>Deletar</button>
											</td>
									</tr> )
							})}
						</tbody>	
			</table>
			<button onClick={() => setShowAddDoctorsForm(true)}>Adicionar Doutor</button>
			{showAddDoctorsForm && <AddDoctors handleAddSubmit={handleAddSubmit} handleCancelButton = {handleCancelButton} />}
			{showEditDoctorsForm && <EditDoctors handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
		</>
        )
    }

export default ListDoctors