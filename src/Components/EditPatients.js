import React from 'react'

const EditUsers = ({handleEditSubmit, selectedEditData}) => {
  return (
    <>
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.patient_id)}>
        User Name <input type='text' name='username' defaultValue={selectedEditData.username}/>
        E-mail <input type='text' name='email' defaultValue={selectedEditData.email} />
        
        <button type='submit'>EDIT</button>
    </form>
    </>
  )
}

export default EditUsers