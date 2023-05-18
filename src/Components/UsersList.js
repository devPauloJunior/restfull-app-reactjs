import React, { useEffect, useState } from 'react'
import { getusers } from '../Service/ApiService'

const UsersList = () => {
	const [ users, setUsers ] = useState([])

	useEffect(() => {
		let mount = true
		getusers()
		.then(res => { console.log("res from api", res)
					setUsers(res)
					return() => mount = false
		})
	}, [])	

	return (
		<>
			<h3>USERS LIST</h3>
			<table>
						<thead>
							<td>Nomde do Usuario:</td>
							<td>E-mail</td>
							<td>Ação</td>
						</thead>	
						<tbody>
							{users.map(users => {
									return <tr key={users.users_id}>
									<td>{users.username}</td>
									<td>{users.email}</td> 
									<td>Edit / Delete</td>
									</tr>
							})}
						</tbody>	
			</table>
		</>
)}

export default UsersList