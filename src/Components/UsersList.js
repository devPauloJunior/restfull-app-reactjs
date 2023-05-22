import React, { useEffect, useState } from 'react'
import { getusers, adduser } from '../Service/ApiService'
import AddUser from './AddUser';

const UsersList = () => {
	const [ users, setUsers ] = useState([])
	const [ showAddUserForm, setShowAddUserForm ] = useState(false)

	useEffect(() => {
		let mount = true
		getusers()
		.then(res => { console.log("Reponse da API", res)
					setUsers(res)
					return() => mount = false
		})
	}, [])

	const handleAddSubmit = (e) => {
		adduser(e.target)
		.then(res => {
			setUsers(res)
		})
	}

	const handleCancelButton() {
		setShowAddUserForm(false)
	}

	return (
		<>
			<h3>USERS LIST</h3>
			<table border={"2px"} cellPadding={"5px"}>
						<thead>
							<td>ID</td>
							<td>Nomde do Usuario:</td>
							<td>E-mail</td>
							<td>Ação</td>
						</thead>	
						<tbody>
							{users.map(users => {
									return (
									<tr>
										<td key={users.id} >{users.id}</td>
										<td>{users.username}</td>
										<td>{users.email}</td> 
										<td>
											{/* <button onClick={() => handleEditButton(users)}>Editar</button>
											<button onClick={() => handleDeleteButton(users.id)}>Deletars</button> */}
											</td>
									</tr> )
							})}
						</tbody>	
			</table>
			<button onClick={() => setShowAddUserForm(true)}>Adicionar Usuário</button>
			{showAddUserForm && <AddUser handleAddSubmit={handleAddSubmit} handleCancelButton = {handleCancelButton} />}
		</>
)}

export default UsersList