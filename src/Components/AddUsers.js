import React from 'react'

export default function AddUSer({handleAddSubmit, handleCancelBtn}) {
  return (
    <>
    <h3>ADD FORM:</h3>
    <form onSubmit={handleAddSubmit}>
        User Name <input type='text' name='username' />
        E-mail <input type='text' name='email' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelBtn}>Cancel</button>

    </form>
    </>
  )
}
