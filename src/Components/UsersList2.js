import React, { useEffect, useState } from 'react'
import { getusers, addusers, editusers, deleteusers} from '../Service/ApiService'
import AddUsers from './AddUsers'
import EditUsers from './EditUsers'

export default function UsersList() {

const [users, setUsers] = useState([])
const [showAddUsersForm, setShowAddUsersForm] = useState(false)
const [showEditUsersForm, setShowEditUsersForm] = useState(false)
const [selectedEditData, setSelectedEditData] = useState()

useEffect(() => {
    let mount = true
    getusers()
    .then(res => {console.log("res from api", res)
        setUsers(res)
        return() => mount = false
    })
}, [])

const handleAddSubmit = (e) => {
    addusers(e.target)
    .then(res => {
        setUsers(res)
    })
}

const handleEditBtn = (users) => {
    setSelectedEditData(users)
    console.log("users selected is", users)
    setShowEditUsersForm(true)
    setShowAddUsersForm(false)
}

const handleEditSubmit = (e, id) => {
    editusers(id, e.target)
    .then(res => {
        setUsers(res)
    })
}
function handleCancelBtn() {
    setShowAddUsersForm(false)
}
const handleDeleteBtn = (id) => {
    deleteusers(id)
    .then(res => {
        setUsers(users.filter(p=> p.username !== id))
    })
}

  return (
    <>
    <h3>USER LIST</h3>
    <table border={"2px"} cellPadding={"10px"}>
        <thead>
            <tr>
                <td>User Name</td>
                <td>E-mail</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {users.map(users => {
                return <tr key={users.users_id}>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td><button onClick={()=>handleEditBtn(users)}>Edit</button> <button onClick={()=>handleDeleteBtn(users.users_id)}>Delete</button></td>
            </tr>
            })}
            
        </tbody>
    </table>
    <button onClick={()=>setShowAddUsersForm(true)}>Add New Users</button>
    {showAddUsersForm && <AddUsers handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}
    {showEditUsersForm && <EditUsers handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
    </>
  )
}
