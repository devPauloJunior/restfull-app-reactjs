import React from 'react'

export default function EditUsers({handleEditSubmit, selectedEditData}) {
  return (
    <>
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.patient_id)}>
        User Name <input type='text' name='username' defaultValue={selectedEditData.first_name}/>
        E-mail <input type='text' name='email' defaultValue={selectedEditData.last_name} />
        
        <button type='submit'>EDIT</button>
    </form>
    </>
  )
}
