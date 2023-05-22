import React, { useEffect, useState } from 'react'
import { getusers, adduser } from '../Service/ApiService'
import AddUsers from './AddUsers';

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

	function handleCancelButton() {
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
							{users.map(user => {
									return (
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>{user.username}</td>
										<td>{user.email}</td> 
										<td>Edit
											{/* <button onClick={() => handleEditButton(users)}>Editar</button>
											<button onClick={() => handleDeleteButton(users.id)}>Deletars</button> */}
											</td>
									</tr> )
							})}
						</tbody>	
			</table>
			<button onClick={() => setShowAddUserForm(true)}>Adicionar Usuário</button>
			{showAddUserForm && <AddUsers handleAddSubmit={handleAddSubmit} handleCancelButton = {handleCancelButton} />}
		</>
)}

export default UsersList