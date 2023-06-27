import { useEffect, useState } from "react";
import { getpatients } from '../Service/ApiService'

export const usePatients = () => {
    const [ patients, setPatients ] = useState([]);

    useEffect(() => {
		getpatients()
		.then(res => { 
					// console.log("Reponse da API", res)
					setPatients(res)
		})
	}, []);

    return { 
        patients
    };

}