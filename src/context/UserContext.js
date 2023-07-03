import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [ idDoctor, SetIdDoctor ] = useState(0);
    const [ idPatient, SetIdPatient ] = useState(0);
    const [ nivelUser, setNivelUser ] = useState(0);
    
    const handleIdDoctor = (e) => {
        SetIdDoctor(e.target.value);
        setNivelUser(1)
    }
      
    const handleIdPatient = (e) => {
        SetIdPatient(e.target.value);
        setNivelUser(2)
    }

    return (
        <UserContext.Provider value={{ idDoctor, handleIdDoctor, idPatient, handleIdPatient, nivelUser }}> 
            { children }
        </UserContext.Provider>
    )
}